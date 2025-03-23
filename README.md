# Bank App - Login System

This project is a simple login system for a banking application. It includes a **React** frontend, a **Node.js** backend, and a **MySQL** database.

## Features

- **User Login**: Users can log in using their email and password.
- **Password Hashing**: Passwords are securely hashed using `bcryptjs`.
- **Responsive Design**: The frontend is designed to be responsive and user-friendly.
- **Error Handling**: Proper error handling for invalid inputs and server errors.

## Technologies Used

### 1. **Frontend (React)**
- **React**: A JavaScript library for building user interfaces.
- **React Router**: For navigation between different pages.
- **Axios**: For making HTTP requests to the backend.

### 2. **Backend (Node.js)**
- **Express**: A web framework for Node.js to handle API requests.
- **MySQL2**: A MySQL client for Node.js to interact with the database.
- **Bcryptjs**: For hashing and comparing passwords securely.
- **CORS**: To enable Cross-Origin Resource Sharing.

### 3. **Database (MySQL)**
- **MySQL**: A relational database management system.
- **Database Schema**: Includes a `users` table to store user information.

## Why Node.js and React?

### Node.js
- **Fast and Scalable**: Node.js is built on Chrome's V8 engine, making it fast and efficient.
- **Event-Driven Architecture**: Ideal for real-time applications like banking systems.
- **NPM Ecosystem**: Access to a vast library of packages for backend development.

### React
- **Component-Based Architecture**: Makes the UI modular and reusable.
- **Virtual DOM**: Improves performance by minimizing direct DOM manipulation.
- **Rich Ecosystem**: Includes tools like React Router, Axios, and more.

## Database Schema

The database contains a `users` table with the following structure:

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    phone_number VARCHAR(15) NOT NULL UNIQUE
);
