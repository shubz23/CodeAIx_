# CodeAIx - BackEnd

## Overview
This project is the backend component of the CodeAIx. It provides the necessary APIs and services to support the frontend application.

## Features
- User authentication and authorization
- CRUD operations for user data
- Integration with external APIs
- Data validation and error handling

## Technologies Used
- Node.js
- Express.js
- MongoDB
- JWT for authentication

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/codeaix-backend.git
    ```
2. Navigate to the project directory:
    ```bash
    cd codeaix-backend
    ```
3. Install dependencies:
    ```bash
    npm install
    ```

## How to Run the Backend Server
1. Create a `.env` file in the root directory and add the following environment variables:
    ```env
    PORT=8080
    API_KEY=your_api_key
    Open_API_Url=https://api.openai.com/v1/chat/completions
    MONGO_URI=your_mongo_uri
    JWT_SECRET=your_jwt_secret
    ```
2. Start the development server:
    ```bash
    npm run server
    ```
3. The server will be running at `http://localhost:8080`.

## API Endpoints
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `PUT /api/users/:id` - Update user by ID
- `DELETE /api/users/:id` - Delete user by ID

## Contribution Guidelines
We welcome contributions to CodeAIx! To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with clear and concise messages.
4. Push your changes to your forked repository.
5. Submit a pull request to the main repository.

Please ensure that your code adheres to our coding standards and includes appropriate tests.


## Contributors

- [Pulkit Kumar Mathur](https://github.com/Pulkit1822)
- [Khushi Srivastava](https://github.com/Khushisrivastava9)
- [Kashish Sinha](https://github.com/kashish281)
- [Mritunjay](https://github.com/mritunjayyy)
- [Shubham Saxena](https://github.com/shubz23)
