FROM node:16.20.2-buster

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install pm2 -g

COPY . .

EXPOSE 8082

CMD ["pm2-runtime", "start", "ecosystem.config.js", "--env", "production"]