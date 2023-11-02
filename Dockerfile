# Use the official Ubuntu as the base image
FROM ubuntu:latest

# Set environment variables to avoid interactive prompts
ENV DEBIAN_FRONTEND=noninteractive

# Install system dependencies
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    nodejs \
    npm

# Set the working directory for the backend
WORKDIR /app/backend

# Copy the backend code into the container
COPY ./web/backend /app/backend

# Install Python dependencies
RUN pip3 install -r requirements.txt

# Set the working directory for the frontend
WORKDIR /app/frontend

# Copy the frontend code into the container
COPY ./web/frontend /app/frontend

# Install Node.js dependencies and build the React app
RUN npm install
RUN npm run build

# Expose the ports your backend and frontend will run on
EXPOSE 8000 3000

# Command to run the backend and frontend concurrently
CMD (cd /app/backend && python app.py) & (cd /app/frontend && npm start)
