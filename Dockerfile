FROM node:lts-alpine as build
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY ./ /app/

ARG REACT_APP_URL
ENV REACT_APP_URL $REACT_APP_URL

ARG REACT_APP_ADMIN_SECRET
ENV REACT_APP_ADMIN_SECRET $REACT_APP_ADMIN_SECRET

ARG REACT_APP_AUTH0_DOMAIN_NAME
ENV REACT_APP_AUTH0_DOMAIN_NAME $REACT_APP_AUTH0_DOMAIN_NAME

ARG REACT_APP_AUTH0_CLIENT_ID
ENV REACT_APP_AUTH0_CLIENT_ID $REACT_APP_AUTH0_CLIENT_ID

RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]