# Project Name
This project contains APIs for 
Social Media Api.

## Installation
To install the required dependencies, run the following command:
npm install

## APIs
## User Registration API
Endpoint: /api/user/register
Method: POST
Parameters:
username: User's username
email: User's email address
password: User's password
## User Login API
Endpoint: /api/user/login
Method: POST
Parameters:
username: User's username
password: User's password
Forgot Password API
Endpoint: /api/user/forgot-password
Method: POST
Parameters:
email: User's email address
newPassword: New password to set

## Post API
Create Post API
Endpoint: /api/post/create
Method: POST
Parameters:
userId: ID of the user creating the post
content: Content of the post
## Get Post API
Endpoint: /api/post/:postId
Method: GET
Parameters:
postId: ID of the post to retrieve
## Update Post API
Endpoint: /api/post/:postId
Method: PUT
Parameters:
postId: ID of the post to update
content: New content for the post
## Delete Post API
Endpoint: /api/post/:postId
Method: DELETE
Parameters:
postId: ID of the post to delete
## Like Post API
Endpoint: /api/post/like/:postId
Method: POST
Parameters:
postId: ID of the post to like
## Add Comment API
Endpoint: /api/post/comment/:postId
Method: POST
Parameters:
postId: ID of the post to add a comment to
userId: ID of the user adding the comment
comment: Comment content

## Packages Used
Express: Fast, unopinionated, minimalist web framework for Node.js.
Mongoose: MongoDB object modeling tool designed to work in an asynchronous environment.
bcrypt: Library to hash passwords.
dotenv: Loads environment variables from a .env file into process.env.
