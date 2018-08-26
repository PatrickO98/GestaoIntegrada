FROM node:8.9.4 as builder

COPY . /polygon-gestao

WORKDIR /polygon-gestao

RUN npm install
RUN npm run build

CMD ng serve