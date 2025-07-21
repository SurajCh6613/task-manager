# 📝 Task Manager (MERN Stack)

A full-stack Task Management application built with the MERN stack (MongoDB, Express.js, React.js, and Node.js) that allows users to register, log in, and manage their personal tasks with ease — along with automated email reminders.

## 🚀 Features

- 🔐 **Authentication** – Register & Login functionality with hashed passwords using `bcrypt`
- 📋 **Task Management** – Create, view, update, and delete your daily tasks
- 📦 **RESTful API** – Built using Express.js and connected to MongoDB via Mongoose
- 📦 **Email Reminders** – Automatically sends task reminders 1 hour before deadline using node-cron and nodemailer
- ⚛️ **Frontend** – React.js with Axios for API integration
- 💾 **Persistent Storage** – MongoDB Atlas used to store user and task data
- 📤 **Deployed** – Easily deployable to platforms like Render, Vercel

## 🖥️ Tech Stack

- **Frontend**: React.js, Axios, Tailwind CSS (if used)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (MongoDB Atlas)
- **Authentication**: JWT, bcrypt
- **Email**: Nodemailer
- **Scheduling**: node-cron

## 📂 Folder Structure

```bash
task-manager/
├── backend/
│   ├── controllers/
|   ├── config/
│   ├── models/
│   ├── routes/
|   ├── jobs/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
└── README.md
```

## 🛠️ Installation

Prerequisites
=> Node.js and npm installed
=> MongoDB Atlas URI

## Backend Setup

```bash
cd backend
npm install
# Create a .env file with the following:
# MONGO_URI=your_mongodb_connection_string
# JWT_SECRET=your_secret_key
# EMAIL=your_email@example.com
# EMAIL_PASSWORD=your_app_password
npm run server
```

## Frontend Setup

```bash
cd frontend
npm install
npm start
```

## 🔒 Environment Variables

Create a .env file in the backend directory:

```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

🔁 Email Reminder Job
A background cron job runs every minute using node-cron, and sends email reminders for tasks that are:

Due within the next hour

Not yet reminded (reminderSent: false)

To ensure this works:

Add task dates in near-future (e.g., within 1 hour)

Verify email and task creation work correctly

Configure Gmail to allow app passwords

## 📸 Screenshots

<!-- Add screenshots here -->

Coming Soon...

## 🤝 Contributing

1. Fork the repo

2. Create your feature branch: git checkout -b feature/YourFeature

3. Commit your changes: git commit -m 'Add some feature'

4. Push to the branch: git push origin feature/YourFeature

5. Open a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙋‍♂️ Author

Suraj Chaudhary – @SurajCh6613
