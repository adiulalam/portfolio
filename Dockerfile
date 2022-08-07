FROM node as build
WORKDIR /app
COPY package.json /app/
RUN npm install

ARG REACT_APP_DEBUG
ENV REACT_APP_DEBUG=$REACT_APP_DEBUG

COPY ./ /app/
RUN npm run build



FROM nginx
COPY --from=build /app/build /usr/share/nginx/html