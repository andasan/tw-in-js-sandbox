FROM node:16.14.0-alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm install -qyg nodemon@2.0.7
RUN npm install -qy
COPY . .
CMD ["npm", "run", "dev"]