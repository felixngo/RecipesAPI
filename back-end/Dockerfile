FROM node:18-alpine
EXPOSE 80
COPY package*.json ./
RUN npm install
COPY . .
ENTRYPOINT ["npm", "start"]
