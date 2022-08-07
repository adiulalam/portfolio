FROM node as build
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY ./ /app/

ARG REACT_APP_URL
ENV REACT_APP_URL=$REACT_APP_URL

RUN npm run build

FROM nginx
COPY --from=build /app/build /usr/share/nginx/html