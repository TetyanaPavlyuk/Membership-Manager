FROM node:20-alpine3.21

# create working directory
WORKDIR /app

# copy dependency files
COPY package.json .
COPY package-lock.json .

# install dependencies
RUN npm install

# copy the source code
COPY . /app/

# open port 3000
EXPOSE 3000

# run server
CMD ["npm", "run", "dev"]
