FROM node:18-alpine
EXPOSE 80
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
ENTRYPOINT ["npm", "run", "serve"]
