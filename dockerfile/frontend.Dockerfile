FROM node:20.7.0-alpine3.17

WORKDIR /app

COPY frontend .

# RUN npm install

EXPOSE 5173

# CMD ["npm", "run", "serve"]