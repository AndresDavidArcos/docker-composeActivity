FROM node

COPY ["." ,"/usr/src"]

WORKDIR /usr/src/attendance

RUN npm install

CMD ["npm", "run", "dev"]

