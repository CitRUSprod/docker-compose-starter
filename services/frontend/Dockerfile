ARG NODE_IMAGE

FROM ${NODE_IMAGE}

WORKDIR /services/frontend

COPY . .

RUN yarn

RUN yarn prod
