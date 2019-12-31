FROM node:12.14.0-alpine

RUN apk add yarn

WORKDIR /opt/app

COPY . /opt/app

RUN apk add --no-cache openssl

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && tar -C /usr/local/bin -xzvf dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
    && rm dockerize-alpine-linux-amd64-$DOCKERIZE_VERSION.tar.gz

COPY docker-entrypoint.sh /usr/local/bin/

RUN yarn && yarn build

ENTRYPOINT [ "docker-entrypoint.sh" ]

CMD [ "yarn", "prod" ]