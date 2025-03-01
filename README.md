# Blog Platform

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Tech Stack](https://img.shields.io/badge/stack-React.js%20%7C%20Hono%20%7C%20Cloudflare%20Workers%20%7C%20PostgreSQL%20%7C%20JWT-brightgreen)

🔗 **[Live Demo](https://lumevo.vercel.app/signup)**
A full-stack **blog platform** built with **React.js** on the frontend (deployed on Vercel) and **Hono with Cloudflare Workers** on the backend. The platform uses **PostgreSQL** for scalable data storage and **JWT-based authentication** for secure user interactions.

## Features ✨

- 📝 **Create, edit, and delete blog posts**  
- 🔒 **JWT authentication** & **role-based access**  
- 📄 **Pagination for efficient content display**  
- ⚡ **Optimized performance with Cloudflare Workers**  
- 📡 **Backend API built with Hono & PostgreSQL**  
- 🚀 **Deployed on Vercel & Cloudflare for scalability**  

---

## Tech Stack 🛠️

- **Frontend:** React.js, Vercel  
- **Backend:** Hono (Cloudflare Workers)  
- **Database:** PostgreSQL  
- **Authentication:** JWT  
- **Hosting:** Vercel (Frontend), Cloudflare Workers (Backend)  

---

## Installation & Setup 🚀

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/MuraliChowdhary/Lumevo.git
cd Lumevo

cd backend
pnpm install
pnpm run dev


cd frontend
pnpm install
pnpm run dev


API Endpoints 🔗
Method	Endpoint	Description
POST	/api/auth/signup	Register a new user
POST	/api/auth/login	Authenticate user (JWT token)
GET	/api/posts	Get all blog posts
GET	/api/posts/:id	Get a single post
POST	/api/posts	Create a new blog post
PUT	/api/posts/:id	Update an existing blog post
DELETE	/api/posts/:id	Delete a blog post


Deployment 🌍
Frontend: Deployed on Vercel
Backend: Deployed on Cloudflare Workers
Database: Hosted on PostgreSQL
Contributing 🤝
Contributions are welcome! Follow these steps:

Fork the repository
Create a new branch (git checkout -b feature-branch)
Commit your changes (git commit -m "Add new feature")
Push to the branch (git push origin feature-branch)
Open a Pull Request



This README follows GitHub formatting best practices, making it **clear, professional, and easy to navigate**. Let me know if you'd like any modifications! 🚀

