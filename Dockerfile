FROM node:18-bullseye-slim

RUN mkdir /app && chown -R node:node /app

WORKDIR /app

USER node

COPY --chown=node:node package.json tsconfig.json vite.config.ts tsconfig.node.json ./

RUN yarn install && yarn build && yarn cache clean

ADD . .

EXPOSE 5173