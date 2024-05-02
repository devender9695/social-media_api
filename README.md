# Project Name
This project contains APIs for user registration, login, and password recovery functionalities.

## Installation
To install the required dependencies, run the following command:
npm install

## APIs

## User Registration API
Endpoint: /api/register
Method: POST
Parameters:
username: User's username
email: User's email address
password: User's password

## User Login API
Endpoint: /api/login
Method: POST
Parameters:
username: User's username
password: User's password

## Forgot Password API
Endpoint: /api/forgotpassword
Method: POST
Parameters:
email: User's email address
newPassword: New password to set
## Packages Used
Express: Fast, unopinionated, minimalist web framework for Node.js.
Mongoose: MongoDB object modeling tool designed to work in an asynchronous environment.
bcrypt: Library to hash passwords.
dotenv: Loads environment variables from a .env file into process.env.
