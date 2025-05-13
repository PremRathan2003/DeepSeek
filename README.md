# 🧠 DeepSeek Clone - Full Stack AI App with Next.js & DeepSeek API

A fully functional DeepSeek AI clone built with **Next.js**, **DeepSeek API**, **Clerk Auth**, and **MongoDB Atlas**. This project replicates an AI assistant experience similar to ChatGPT/DeepSeek, allowing users to sign up, interact with an AI model, and view their chat history—all in a sleek, modern interface.

## 🚀 Live Demo

🔗 Live Preview: https://deep-seek-8oww.vercel.app

## 🧾 GitHub Repository

📂 [View on GitHub](https://github.com/PremRathan2003/DeepSeek.git)

---

## 📦 Features

- 🔐 **User Authentication** using [Clerk](https://clerk.dev)
- 🧠 **AI Chat Functionality** using [DeepSeek API](https://deepseek.com)
- 💾 **MongoDB Atlas Integration** for storing users and chat history
- 🧭 **Chat History Sidebar** to revisit previous conversations
- 🌐 **Deployed on Vercel** for fast and scalable hosting
- 🎨 Responsive UI and clean UX

---

## 🛠️ Tech Stack

- **Frontend & Backend**: [Next.js](https://nextjs.org/)
- **Authentication**: [Clerk](https://clerk.dev)
- **Database**: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **AI API**: [DeepSeek](https://deepseek.com)
- **Deployment**: [Vercel](https://vercel.com)

---

## 📁 Folder Structure

/app → Next.js App Router structure
/components → Reusable React components
/lib → Utilities and API logic
/models → Mongoose models for MongoDB
/api → API route handlers
/middleware.ts → Auth middleware for protected routes
/public → Static assets
/styles → Global styles
.env.local → Environment variables

---

## ⚙️ Setup Instructions

1. **Clone the repository**

git clone https://github.com/PremRathan2003/DeepSeek.git
cd DeepSeek
Install dependencies

npm install
Set up environment variables

npm run dev
The app will run locally on http://localhost:3000.

🔒 Authentication Flow
Clerk manages user login and registration.

Webhooks are used to sync user data with MongoDB.

Only authenticated users can chat with the AI or view their history.

🧠 AI Integration
The DeepSeek API processes user prompts and returns intelligent responses. Each interaction is saved in MongoDB, allowing users to revisit past conversations.

🌍 Deployment
The project is deployed using Vercel:
🔗 https://deep-seek-8oww.vercel.app

💡 Inspired by DeepSeek

📬 Contact
Made with ❤️ by Prem Rathan
