# Recipe Management Backend API

This is the backend for the Recipe Management Application, built with Node.js, Express, and MongoDB. It handles user authentication and CRUD operations for recipes.

## Features

- User Registration and Login with JWT token authentication
- Recipe CRUD Operations:
  - Create Recipe
  - Read Recipes (all or by ID)
  - Update Recipe
  - Delete Recipe
- MongoDB used to store recipe data
- Error handling for invalid requests and server errors

## Folder Structure

- **controllers/**: Contains logic for user authentication and recipe management.
- **models/**: Mongoose schemas for User and Recipe.
- **routes/**: API routes for user authentication and recipe management.
- **middleware/**: Middleware for JWT token verification.
- **config/**: MongoDB connection setup.
- **app.js**: Application setup and middleware configuration.
- **server.js**: Starting point of the server.
