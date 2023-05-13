FROM node:16.18.1-alpine3.17

WORKDIR '/app'

COPY ./package*.json ./

RUN npm ci --legacy-peer-deps

COPY . .

RUN npm install -g serve

ENV NODE_ENV=production

RUN npm run build

EXPOSE 80

ENTRYPOINT serve -s build -l 80

