FROM node:20-alpine

# set working directory
WORKDIR /code

ARG ENV

COPY ./frontend /code

RUN npm install

# run dev
CMD npm run dev