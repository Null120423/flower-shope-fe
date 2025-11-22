FROM node:20-alpine

# Install necessary dependencies for Next.js
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copy package files for better Docker layer caching
COPY package.json yarn.lock* package-lock.json* ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy all source code
COPY . .

# Ensure public directory is included (for Google verification files, etc.)
COPY public/ ./public/

# Build Next.js app
RUN yarn build

# Expose port 3000
EXPOSE 3000

# Set environment to production
ENV NODE_ENV=production

# Start Next.js in production mode
CMD ["yarn", "start"]