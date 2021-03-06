FROM node:14-alpine as builder
# Get the necessary build tools
RUN apk update && apk add build-base autoconf automake libtool pkgconfig nasm

# Add the package.json file and build the node_modules folder
WORKDIR /app
COPY ./package*.json ./
RUN mkdir node_modules && npm install

# Get a clean image with react-scripts and the pre-built node modules
FROM node:14-alpine

RUN npm install -g react-scripts && mkdir /save

COPY --from=builder /app/node_modules /save/node_modules
