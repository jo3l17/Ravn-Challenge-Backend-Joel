FROM node:14

WORKDIR /ravn_challenge

COPY package.json /ravn_challenge/package.json
COPY package-lock.json /ravn_challenge/package-lock.json

RUN npm install

COPY . /ravn_challenge

EXPOSE 3700

CMD [ "node","dist/index.js" ]