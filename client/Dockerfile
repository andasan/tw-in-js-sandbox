FROM node:16.14.0-alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm install -qy
COPY . .
CMD ["npm", "run", "start"]