# 🚀 Bontha Chakri — Developer Portfolio

A full-stack developer portfolio built with the MERN stack (MongoDB, Express, React, Node.js), featuring a 3D interactive hero, smooth animations, and a complete REST API backend.

## ✨ Features

- **3D Interactive Hero** — React Three Fiber with rotating icosahedron and orbital rings
- **Smooth Animations** — Framer Motion transitions and scroll-triggered reveals
- **Dynamic Projects** — Fetched from MongoDB with static fallback
- **Contact Form** — Sends messages to MongoDB with validation
- **Dark Theme** — Premium minimal design with glassmorphism
- **Responsive** — Mobile-first, works on all screen sizes
- **SEO Ready** — Meta tags and semantic HTML
- **Production Ready** — Error handling, rate limiting, security headers

---

## 📁 Folder Structure

```
portfolio/
├── client/                     # React + Vite frontend
│   └── src/
│       ├── components/
│       │   ├── layout/         # Navbar, Footer
│       │   ├── sections/       # Hero, About, Skills, Projects, Experience, Contact
│       │   ├── three/          # HeroScene (React Three Fiber)
│       │   └── ui/             # Reusable UI components
│       ├── hooks/              # useProjects, useSkills
│       ├── services/           # Axios API layer
│       └── styles/             # Global CSS + Tailwind
│
├── server/                     # Node.js + Express backend
│   ├── config/                 # DB connection
│   ├── controllers/            # Business logic
│   ├── middleware/             # Error handler, validation
│   ├── models/                 # Mongoose schemas
│   ├── routes/                 # API routes
│   └── server.js               # Entry point
│
├── .env.example                # Environment template
└── README.md
```

---

## 🛠️ Local Setup

### Prerequisites
- Node.js v18+
- MongoDB (local or [Atlas](https://cloud.mongodb.com))
- npm or yarn

### Step 1 — Clone & install

```bash
git clone https://github.com/chakribontha/portfolio.git
cd portfolio

# Install all dependencies
npm run install-all
```

### Step 2 — Environment setup

```bash
# Copy the example env file
cp .env.example .env

# Edit .env with your values
nano .env
```

Required variables:
```env
MONGODB_URI=mongodb://localhost:27017/portfolio
CLIENT_URL=http://localhost:5173
VITE_API_URL=http://localhost:5000/api
```

### Step 3 — Seed the database (optional)

```bash
cd server
node seed.js
```

This adds sample projects and skills to MongoDB.

### Step 4 — Run development servers

```bash
# From root — runs both frontend and backend
npm run dev

# Or separately:
npm run server   # Backend on http://localhost:5000
npm run client   # Frontend on http://localhost:5173
```

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/projects` | Get all projects |
| POST | `/api/projects` | Create a project |
| GET | `/api/projects/:id` | Get single project |
| GET | `/api/skills` | Get all skills (grouped) |
| POST | `/api/skills` | Create a skill |
| POST | `/api/contact` | Submit contact form |
| GET | `/api/health` | Health check |

---

## 🚀 Deployment

### Frontend → Vercel

1. Push your `client/` folder (or whole repo) to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repo
4. Set **Root Directory** to `client`
5. Add environment variables:
   ```
   VITE_API_URL=https://your-render-backend.onrender.com/api
   ```
6. Click Deploy ✅

### Backend → Render

1. Go to [render.com](https://render.com) → New Web Service
2. Connect your GitHub repo
3. Set **Root Directory** to `server`
4. Set **Build Command**: `npm install`
5. Set **Start Command**: `node server.js`
6. Add environment variables:
   ```
   MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/portfolio
   CLIENT_URL=https://your-vercel-app.vercel.app
   NODE_ENV=production
   PORT=5000
   ```
7. Click Deploy ✅

### Database → MongoDB Atlas (Free)

1. Create account at [cloud.mongodb.com](https://cloud.mongodb.com)
2. Create a free M0 cluster
3. Add a database user with read/write permissions
4. Allow access from `0.0.0.0/0` (anywhere) for Render
5. Copy connection string to `MONGODB_URI` in Render

---

## 📦 Build for Production

```bash
# Build frontend
npm run build
# Output is in client/dist/
```

---

## 🔧 Customization

1. **Update personal info** — Edit `client/src/components/sections/` files
2. **Add projects** — POST to `/api/projects` or edit `server/seed.js`
3. **Change colors** — Edit `client/tailwind.config.js` accent colors
4. **Update resume link** — Edit the "Get Resume" button in `Hero.jsx`

---

## 📄 License

MIT © Bontha Chakri
