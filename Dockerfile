FROM node:alpine

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . .

ENV PORT 4000

EXPOSE $PORT

CMD ["npx", "nodemon", "--exec", "npx", "ts-node", "src/server.ts"]