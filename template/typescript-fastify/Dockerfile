FROM --platform=${TARGETPLATFORM:-linux/amd64} ghcr.io/openfaas/of-watchdog:0.8.3 as watchdog
FROM --platform=${TARGETPLATFORM:-linux/amd64} node:14-alpine as build

ARG TARGETPLATFORM
ARG BUILDPLATFORM

# Turn down the verbosity to default level.
ENV NPM_CONFIG_LOGLEVEL warn

# Wrapper/boot-strapper
WORKDIR /home/app
COPY function/package.json ./

# Install dependencies
RUN npm install

# COPY function files and folders
COPY function/ ./

# replace handler
COPY index.ts ./

# Run any tests that may be available
RUN npm test

# Build
RUN npm run build

# runtime
FROM --platform=${TARGETPLATFORM:-linux/amd64} node:14-alpine as runtime

COPY --from=watchdog /fwatchdog /usr/bin/fwatchdog
RUN chmod +x /usr/bin/fwatchdog

RUN mkdir -p /home/app
COPY --from=build /home/app/dist /home/app
COPY --from=build /home/app/node_modules /home/app/node_modules

RUN apk --no-cache add curl ca-certificates \
    && addgroup -S app && adduser -S -g app app

RUN chmod 777 /tmp

USER app

# Set correct permissions to use non root user
WORKDIR /home/app/

ENV cgi_headers="true"
ENV fprocess="node index.js"
ENV mode="http"
ENV upstream_url="http://127.0.0.1:9000"

ENV exec_timeout="30s"
ENV write_timeout="15s"
ENV read_timeout="15s"

ENV prefix_logs="false"

HEALTHCHECK --interval=3s CMD [ -e /tmp/.lock ] || exit 1

CMD ["fwatchdog"]
