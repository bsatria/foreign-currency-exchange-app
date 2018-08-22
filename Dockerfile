FROM node:latest

COPY . .

RUN yarn install

RUN yarn start

EXPOSE 3000