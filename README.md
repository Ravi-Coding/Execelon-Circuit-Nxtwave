# Excelon-circuit Assignment

# City Management API

This Node.js application provides a RESTful API for managing a collection of cities, allowing users to add, update, delete,
and retrieve city information stored in a MongoDB database.

## Features

- **Add City**: Create a new city entry.
- **Update City**: Modify details of an existing city.
- **Delete City**: Remove a city from the collection.
- **Get Cities**: Retrieve cities with support for pagination, filtering, sorting, searching, and projection.

## Technologies Used

- Node.js
- Express.js
- Mongoose
- MongoDB
- dotenv

## Install Dependencies
 -npm install express mongoose dotenv nodemon

## start server
 - npm run dev

## Environment variable
 - PORT=3004
 - MONGODB_URI=mongodb://localhost:27017/cities_database

## API Endpoints
   -Add City
   
    http://localhost:3004/api/cities
    Method: POST
    Body:
    {
    "name": "mumbai",
    "population": 10000,
    "country": "India",
    "latitude": 16.87,
    "longitude": 76.47
    }

 ## Success Response:

    Code: 201 CREATED
    Content: {"message": "waoo City added successfully", "data": { ...cityData }}
   
