ARG NODE_IMAGE

FROM ${NODE_IMAGE}

RUN npm install -g pnpm

WORKDIR /services/frontend

COPY . .

RUN pnpm i

RUN pnpm build
