FROM node:16-alpine as build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm run build

FROM node:16-alpine as production-stage

WORKDIR /usr/src/app

COPY --from=build-stage /usr/src/app/dist ./dist

COPY --from=build-stage /usr/src/app/node_modules ./node_modules


CMD [ "npm", "start" ]