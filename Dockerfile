FROM node:16
WORKDIR /usr/src/app
COPY . .
CMD ["node", "index.js"]
EXPOSE 3000
