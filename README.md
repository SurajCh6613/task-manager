# 📝 Task Manager (MERN Stack)

A full-stack Task Management application built with the MERN stack (MongoDB, Express.js, React.js, and Node.js) that allows users to register, log in, and manage their personal tasks with ease.

## 🚀 Features

- 🔐 **Authentication** – Register & Login functionality with hashed passwords using `bcrypt`
- 📋 **Task Management** – Create, view, update, and delete your daily tasks
- 📦 **RESTful API** – Built using Express.js and connected to MongoDB via Mongoose
- ⚛️ **Frontend** – React.js with Axios for API integration
- 💾 **Persistent Storage** – MongoDB Atlas used to store user and task data
- 📤 **Deployed** – Easily deployable to platforms like Render, Vercel, or Railway

## 🖥️ Tech Stack

- **Frontend**: React.js, Axios, Tailwind CSS (if used)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (MongoDB Atlas)
- **Authentication**: JWT, bcrypt

## 📂 Folder Structure

```bash
task-manager/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
└── README.md
```
##🛠️ Installation
 Prerequisites
   => Node.js and npm installed
   => MongoDB Atlas URI

Backend Setup
```bash
cd backend
npm install
# Create a .env file with the following:
# MONGO_URI=your_mongodb_connection_string
# JWT_SECRET=your_secret_key
npm run server
```

#Frontend Setup
```bash
cd frontend
npm install
npm start
```
#🔒 Environment Variables
Create a .env file in the backend directory:
```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
#📸 Screenshots
<!-- Add screenshots here -->
Coming Soon...

#🤝 Contributing
Fork the repo

Create your feature branch: git checkout -b feature/YourFeature

Commit your changes: git commit -m 'Add some feature'

Push to the branch: git push origin feature/YourFeature

Open a pull request

📄 License
This project is licensed under the MIT License.

#🙋‍♂️ Author
Suraj Chaudhary – @SurajCh6613
