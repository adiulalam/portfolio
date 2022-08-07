FROM node:lts-alpine as build
WORKDIR /app
ARG REACT_APP_URL
ENV REACT_APP_URL=$REACT_APP_URL
COPY package.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]