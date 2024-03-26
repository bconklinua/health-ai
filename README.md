# Health AI Web Application

This project is a full-stack web application with a React frontend and a Node.js/Express backend, utilizing PostgreSQL as the database. Follow these instructions to set up and run the project locally.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- Node.js and npm
- PostgreSQL
- Git (for cloning the repository)

## Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/bconklinua/health-ai.git
cd health-ai
```

## Backend Setup
Navigate to the backend directory and install the necessary npm packages:

```bash
cd backend
npm install
```

## Database Configuration
Ensure PostgreSQL is running on your system. Create a PostgreSQL user and database for this project:

1. Log in to the PostgreSQL CLI:
`psql -U postgres`

2. Create a new user:
`CREATE USER <username> WITH PASSWORD '<password>' SUPERUSER;`

3. Create a new database:
`CREATE DATABASE health_ai_db OWNER  <username>;`

4. Exit the PostgreSQL CLI:
`\q`

# Environment Configuration
Create a .env file in the backend directory to store your environment variables:
```
DB_HOST=localhost
DB_PORT=5432
DB_USER=<username>
DB_PASSWORD=<password>
DB_NAME=health_ai_db
```

# Database Migration
Run the database migrations to set up the necessary tables (in backend folder):
```bash
npx sequelize-cli db:migrate
```

# Frontend Setup
Navigate to the frontend directory from the root of the project and install the necessary npm packages:
```bash
cd ../frontend  # Assuming you're in the backend directory
npm install
```

## Running the Application
### Start the Backend Server
In the backend directory, start the Node.js server:
```bash
npm start

```

The backend server will start at http://localhost:4000

## Start the Frontend Application
In a new terminal window, navigate to the frontend directory and start the React application:

```bash
npm start
```

Your default web browser should open to http://localhost:3000, where the application will be running.

