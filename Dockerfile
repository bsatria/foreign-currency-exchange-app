FROM node:10.8.0

COPY . .

RUN yarn install

RUN yarn start

EXPOSE 3000