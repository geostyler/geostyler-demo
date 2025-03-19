FROM node:20-alpine3.21 AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build-docker

############

FROM nginx:1.27.4-alpine AS runner

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
