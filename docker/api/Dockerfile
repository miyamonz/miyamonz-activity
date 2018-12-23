FROM node:10.13.0-alpine
ARG folder="code"
ADD . /${folder}
WORKDIR /${folder}
RUN npm install
CMD ["npm", "run", "start"]


