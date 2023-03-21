# Define the base Node image
FROM node:18-alpine

# Create the application working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install -g yarn --force
RUN yarn install

# Copy application source code
COPY . .

# Build the application
RUN yarn build

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]
