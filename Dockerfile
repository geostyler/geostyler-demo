FROM node:24-alpine3.24 AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build-docker

############

FROM nginx:1.31.2-alpine AS runner

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
