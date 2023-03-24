FROM node:12.18.3-alpine3.9 AS build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build

FROM node:12.18.3-alpine3.9 AS production-stage

WORKDIR /usr/src/app

COPY --from=build-stage /usr/src/app/dist ./dist

COPY --from=build-stage /usr/src/app/node_modules ./node_modules


CMD [ "npm", "start" ]