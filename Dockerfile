FROM node:12-alpine
WORKDIR /app
COPY . .
RUN npm install --production
CMD ["npm", "start"]
