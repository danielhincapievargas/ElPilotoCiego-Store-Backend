# Backend El Piloto Ciego Store App 💻

Main base of the services used within the Go Cab Now App

- Built with Node.js and Express
- REST API
- MongoDB

## Prerequisites 📋

- [Git](https://git-scm.com/downloads)
- [Node.js and npm](https://nodejs.org) Node >= 18.15 LTS, npm >= 9.5.x - Install with Volta.sh

## Installation 🔧

   1. Clone the repository: git@github.com:danielhincapievargas/ElPilotoCiego-Store-Backend

   2. Run npm install.

## 🛠️ Local development

    npm run dev


## Express Router and Routes

## Auth Local

| Route                | HTTP Verb | Description |
| -------------------- | ----------| ----------- |
| /auth/local/login    | POST      | User login  |

## User Routes

| Route                        | HTTP Verb | Description               |
| ---------------------------- | --------- | ------------------------- |
| /api/users                   | GET       | Get list of all users     | 
| /api/users/                  | POST      | Create user               |
| /api/users/                  | DELETE    | Delete user               |

## Product Routes

| Route                        | HTTP Verb | Description                           |
| ---------------------------- | --------- | ------------------------------------- |
| /api/products                | GET       | Get list of all products              |
| /api/products                | POST      | Create a product (formData Middleware)|
| /api/products/:id            | GET       | Get Product By Id                     |
| /api/products/:id            | PUT       | Update a product (formData Middleware)|
| /api/products/:id            | DELETE    | Delete a product                      |


## Orders Routes

| Route                        | HTTP Verb | Description            |
| ---------------------------- | --------- | ---------------------- |
| /api/orders                  | GET       | Get list of all orders |
| /api/orders                  | POST      | Create an order        |
| /api/orders/:id              | GET       | Get Product By Id      |
| /api/orders/:id              | PUT       | Update a product       |
| /api/orders/:id              | DELETE    | Delete a product       |


## Database

**Setup**

This project uses Mongoose as the ODM (Object Data Modeling) tool to manage the database.
To make changes to the database models or create new queries, you should install Mongoose.

**Install Mongoose**

  npm i mongoose


### Authentication **user** `/auth/local/login`

This backend application uses JWT (JSON Web Tokens) for authentication. Users can obtain an access token by providing valid credentials (email and password)

Request Body:

```json
{
  "email": "pp@test.com",
  "password": "1234"
}
```

Response:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsbTB4MHpleDAwMDB1bHZodjZtZXVhbTkiLCJlbWFpbCI6ImF2QHRlc3QuY29tIiwiaWF0IjoxNjk0ODMyNjcxLCJleHAiOjE2OTQ5MTkwNzF9.fpD5shIH6Wuh-2G3P88MWVyEuYo_33zt4q_f3i1NmJI",
  "profile": {
    "id": "62fd77a4d25acc4a4e5df3d1",
    "firstName": "Pepito",
    "lastName": "Perez",
    "email": "pp@test.com"
  }
}
```

### Basic example **Create User** `/api/users`

Request Body:

```json
{
  "name": "Pepito Perez",
  "email": "pp@test.com",
  "password": "1234"
}
```

Response:

```json
{
  "name": "Pepito Perez",
  "email": "pp@test.com",
  "role": "USER"
}
```

### Developing 🛠️

1. Clone the repository

2. Run `npm install` to install server dependencies.

3. Configure the env running `cp .env.example .env`

4. Update `.env` with the required info

5. Run `npm run dev` to start the development server.


## Author ✒️

- Daniel Hincape Vargas - (https://github.com/danielhincapievargas)