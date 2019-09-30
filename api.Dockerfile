FROM node:10
EXPOSE 4000

WORKDIR /usr/workspace/communiTii

COPY package.json /usr/workspace/communiTii
COPY yarn.lock /usr/workspace/communiTii
COPY tsconfig.json /usr/workspace/communiTii
COPY lerna.json /usr/workspace/communiTii
COPY packages /usr/workspace/communiTii/packages

RUN yarn
RUN yarn bootstrap
RUN yarn build:api

CMD [ "yarn", "start:api" ]
