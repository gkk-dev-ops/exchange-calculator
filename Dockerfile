# Base image
FROM node:14-alpine

# Set working directory
WORKDIR /src

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --no-optional --no-shrinkwrap --no-package-lock

# Copy app files
COPY . .

# Build the app
RUN npm run build

# Set environment variable for production
ENV NODE_ENV=production

# Expose the port on which the app will run (change it according to your app)
EXPOSE 3000

# Run the app
CMD [ "npm", "start" ]
