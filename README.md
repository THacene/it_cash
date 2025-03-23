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
2. UserInfo Table
The userinfo table stores additional user information:

sql
Copy
CREATE TABLE userinfo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    address VARCHAR(255),
    city VARCHAR(100),
    country VARCHAR(100),
    postal_code VARCHAR(20),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
user_id: A foreign key that references the id column in the users table.

address: The user's address.

city: The user's city.

country: The user's country.

postal_code: The user's postal code.

How to Run the Project
1. Frontend (React)
Navigate to the client folder:

bash
Copy
cd client
Install dependencies:

bash
Copy
npm install
Start the development server:

bash
Copy
npm start
2. Backend (Node.js)
Navigate to the server folder:

bash
Copy
cd server
Install dependencies:

bash
Copy
npm install
Start the server:

bash
Copy
node server.js
3. Database (MySQL)
Import the database schema:

bash
Copy
mysql -u root -p bank_app < database/schema.sql
Contributing
Feel free to contribute to this project by opening issues or submitting pull requests.

License
This project is licensed under the MIT License.

How to Use This README.md on GitHub
Create a New Repository:

Go to your GitHub account and create a new repository.

Add the README.md File:

Copy the content above into a new file named README.md.

Add this file to the root of your repository.

Push Your Code:

Use Git to push your project code to the repository. For example:

bash
Copy
git add .
git commit -m "Initial commit with README.md"
git push origin main
View the README:

Once pushed, the README.md will automatically render on the main page of your GitHub repository, providing a clear overview of your project.

Example of a GitHub Repository Structure
Copy
bank-app/
│
├── client/                  # Frontend (React)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── styles/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── README.md
│
├── server/                  # Backend (Node.js)
│   ├── server.js            # Main server file
│   ├── package.json
│   └── README.md
│
├── database/                # Database (MySQL)
│   ├── schema.sql           # SQL schema for the database
│   └── README.md
│
└── README.md                # Main README for the entire project
