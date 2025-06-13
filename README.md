# 💬 Bloop - Real-Time Chat Web Application

**Bloop** is a real-time chat application built with modern fullstack technologies. It supports user registration, login, real-time conversations, and sending messages with images. The project is designed for practicing fullstack web development and demonstrating the ability to build complete, end-to-end systems.

---

## 🚀 Features

- 🔐 JWT-based authentication (Signup, Login, Logout)
- 👤 User profile picture management with Cloudinary
- 💬 Real-time messaging using Socket.io
- 🟢 Online/offline user presence tracking
- 🍪 Secure cookies for auth token storage
- 📱 Responsive design using TailwindCSS & DaisyUI

---

## 🛠 Tech Stack

### Frontend
- React 19 + Vite
- TailwindCSS + DaisyUI
- Zustand
- React Router
- React Hot Toast
- Lucide Icons

### Backend
- Node.js + Express
- MongoDB + Mongoose
- JWT + bcrypt.js
- Cloudinary API
- Socket.io
- dotenv, cookie-parser, cors

---

## 📦 Getting Started

### 1. Clone Repository

```bash
git clone https://github.com/dekbadnerd/Bloop.git
cd Bloop
```

### 2. Install Dependencies

```bash
# Install backend & frontend dependencies
npm install --prefix backend
npm install --prefix frontend
```

### 3. Setup Environment Variables

Create  `.env` files in:

- `/backend/.env`

Use `.env.example` provided as template.

### 4. Run the App Locally

at  `Bloop/`:
```bash
# Build frontend
npm run build

# Start server
cd backend
npm start

# Start static Frontend
cd ../frontend
npm run dev
```

App will be available at: [http://localhost:5173](http://localhost:5173)

---

## 📄 API Endpoints Overview

| Method | Endpoint                  | Description               |
|--------|---------------------------|---------------------------|
| POST   | `/api/auth/signup`        | Register new user         |
| POST   | `/api/auth/login`         | Login with credentials    |
| POST   | `/api/auth/logout`        | Logout                    |
| PUT    | `/api/auth/update-profile`| Update profile picture    |
| GET    | `/api/auth/check`         | Get logged-in user info   |
| GET    | `/api/messages/users`     | Get list of users         |
| GET    | `/api/messages/:id`       | Get messages with user    |
| POST   | `/api/messages/send/:id`  | Send message to user      |

---

## 📚 Learned From / Inspired By

This project was built based on knowledge and inspiration from the following resource:

- [https://github.com/burakorkmez/fullstack-chat-app](https://github.com/burakorkmez/fullstack-chat-app)

Special thanks to the original author for providing such a clear and well-structured example. It served as a great learning foundation for this project.

