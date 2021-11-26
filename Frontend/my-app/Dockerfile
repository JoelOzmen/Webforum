# FROM node:13.12.0-alpine

# # set working directory
# # WORKDIR /my-app

# # add `/app/node_modules/.bin` to $PATH
# ENV PATH /node_modules/.bin:$PATH

# # install app dependencies
# COPY package.json ./
# COPY package-lock.json ./
# RUN npm install --silent
# RUN npm install react-scripts@3.4.1 -g 

# # add app
# COPY . ./

# # start app
# CMD ["npm", "start"]

# FROM node:13.12.0-alpine as build
# WORKDIR /my-app
# ENV PATH /my-app/node_modules/.bin:$PATH
# COPY package.json ./
# COPY package-lock.json ./
# RUN apk add --update --no-cache curl py-pip make g++
# RUN npm ci --silent
# RUN npm install react-scripts@3.4.1 -g --silent
# COPY . ./
# RUN npm run build

# # production environment
# FROM nginx:stable-alpine
# COPY --from=build /app/build /usr/share/nginx/html
# COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

FROM node:15.13-alpine 
WORKDIR /my-app
ENV PATH="./node-modules/.bin:$PATH"
COPY . .
RUN npm run build
CMD ["npm", "start"]



