FROM node:alpine

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . .

CMD ["npx", "nodemon", "--exec", "npx", "ts-node", "src/server.ts"]