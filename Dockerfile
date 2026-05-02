FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package.json ./
RUN npm install

# Copy source
COPY . .

# Expose port for dev server
EXPOSE 5173

# Start development server
CMD ["npm", "run", "docs:dev"]
