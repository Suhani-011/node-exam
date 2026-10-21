A RESTful Book Management API built using **Node.js, Express.js, and MongoDB**. This project provides CRUD operations to manage book records.

## Project Resources

📁 **Google Drive Link:**  
[Click here to view project files](https://drive.google.com/file/d/1byX4mzP24jpArawt_cOIYpaJ15wvw2Nj/view?usp=sharing)

## Features

- Create a new book
- Get all books
- Get a book by ID
- Update book details
- Delete a book
- JWT-based authentication (if configured)

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- Postman for API testing

## Installation and Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project Folder

```bash
cd your-project-folder
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory and add your configuration:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Replace the example values with your actual configuration.

### 5. Start the Server

```bash
npm start
```

For development, if a development script is configured:

```bash
npm run dev
```

## API Testing

Use **Postman** to test the API endpoints. Refer to the project's route files for the exact endpoint URLs, HTTP methods, and required request data.

## Security

- Keep sensitive credentials inside the `.env` file.
- Never upload your `.env` file to GitHub.
- Add `.env` to `.gitignore`.

## Author

Developed as a Node.js and Express.js backend project.
