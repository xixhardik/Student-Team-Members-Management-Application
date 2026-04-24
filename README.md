# Student-Team-Members-Management-Application-
TeamHub — A modern full-stack student team management dashboard built with React, Node.js, Express, and MongoDB. Easily create, manage, and explore team member profiles with a sleek UI.
# 🚀 TeamHub — Student Team Management Dashboard

TeamHub is a full-stack web application designed to manage and organize student team members efficiently. It provides a modern dashboard interface to create, view, update, and explore team profiles in a structured and user-friendly way.

---

## ✨ Features

* 🏠 Dashboard-style interface with sidebar navigation
* ➕ Create new team member profiles
* 👥 View all members in a responsive grid layout
* 🔍 Detailed member profile view
* ✏️ Edit member information
* 🗑️ Delete member functionality
* 🖼️ Image upload support for profiles
* ⚡ Fast and responsive UI

---

## 🛠️ Tech Stack

| Layer       | Technology                |
| ----------- | ------------------------- |
| Frontend    | React.js, React Router    |
| Backend     | Node.js, Express.js       |
| Database    | MongoDB, Mongoose         |
| File Upload | Multer                    |
| Styling     | Custom CSS (Dashboard UI) |

---

## 📁 Project Structure

```
teamhub/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── uploads/
│   ├── server.js
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── layout/
│   │   │   └── Sidebar.jsx
│   │   ├── pages/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── App.css
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 🔹 Prerequisites

* Node.js (v18 or higher)
* MongoDB (Local or Atlas)

---

### 🔹 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/teamhub.git
cd teamhub
```

---

### 🔹 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/teamhub
```

Start backend server:

```bash
node server.js
```

---

### 🔹 3. Setup Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

---

### 🔹 4. Run Application

* Frontend → http://localhost:5173
* Backend → http://localhost:5000

---

## 📡 API Endpoints

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | /api/members     | Get all members   |
| GET    | /api/members/:id | Get single member |
| POST   | /api/members     | Create member     |
| PUT    | /api/members/:id | Update member     |
| DELETE | /api/members/:id | Delete member     |

---

## 🎯 Use Case

This application is ideal for:

* Student project teams
* College clubs
* Group collaborations
* Team organization systems

---

## 🚀 Future Improvements

* 🔐 Authentication system
* 🔎 Search & filter functionality
* 📊 Dashboard analytics
* 🌐 Deployment (Render / Vercel)

---

## 👨‍💻 Author

Developed as a full-stack project using modern web technologies.

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
