FROM node:16.14.2 as build
WORKDIR /usr/app
COPY package.json ./
RUN npm install --force
COPY ./ ./
RUN npm run build


FROM nginx
COPY --from=build /usr/app/build /usr/share/nginx/html