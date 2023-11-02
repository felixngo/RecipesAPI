# RECIPE API

## Overview

This is a brief guide on how to run the app using Docker Compose.  
The application consists of a backend, a frontend, and a PostgreSQL database.

## Prerequisites

Before you begin, ensure you have Docker and Docker Compose installed on your system. If not, you can install them from
the official Docker website:

- [Docker](https://docs.docker.com/get-docker/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Running the Application

To start your application, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo.git
   cd your-app
   ```

2. Run Docker Compose to start the application:
   ```sh
   docker-compose up
   ```

3. After the services are up and running, you can access your application by opening a web browser and navigating to
   http://localhost:3000


4. You can also access the backend API at :  
   http://localhost:80/api/

## Stopping the Application

1. To stop the application, press `Ctrl+C` in your terminal.
2. To stop and remove the containers, networks, images, and volumes, run:
   ```sh
   docker-compose down
   ```

