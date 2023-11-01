FROM node:18-alpine AS base
WORKDIR /app
EXPOSE 80

FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM base AS final
WORKDIR /app
COPY --from=build /app/dist ./dist
ENTRYPOINT ["npm", "start"]
