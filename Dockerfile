# syntax=docker/dockerfile:1 

# or debian/bookworm
ARG DISTRO=alpine
FROM node:21-${DISTRO}
WORKDIR /usr/src/server

COPY . .

RUN npm clean-install

RUN npm run compile

EXPOSE 4000

USER node

CMD ["node", "dist/index.js"]
