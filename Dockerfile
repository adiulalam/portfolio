FROM node:16.14.2 as build
WORKDIR /home/opc/app
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build


FROM nginx
COPY --from=build /home/opc/app/build /usr/share/nginx/html