FROM node:15.9 AS build-env

ADD . /app

WORKDIR /app

RUN npm install && npm run build

FROM node:15.9 
# AS build-env2

COPY --from=build-env /app/dist /app

WORKDIR /app


RUN npx prisma generate

# FROM gcr.io/distroless/nodejs:14

# COPY --from=build-env2 /app /app

# WORKDIR /app

EXPOSE 3000

CMD ["server.js"] 