FROM node:18 as build

WORKDIR /app
COPY ui/package.json ui/package-lock.json ./
RUN npm install

COPY ui/ .
RUN npm run build