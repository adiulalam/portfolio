FROM node:18-alpine AS deps

RUN apk --update add bash && \
    apk add dos2unix

RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build
COPY deploy-server.sh .
RUN chmod +x deploy-server.sh

# Production image, copy all the files and run next
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

COPY --from=builder /app/deploy-server.sh .
COPY --from=builder /app/src/server/db ./src/server/db

RUN dos2unix ./deploy-server.sh

CMD source deploy-server.sh