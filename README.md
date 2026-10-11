# Mini SaaS Template Store (TemplateNest)

A full-stack intern assessment project with user registration, JWT login, template browsing, template details, search/category filters, and per-user favorites.

## Stack
React + Vite, CSS, Axios, React Router, Node.js, Express, MongoDB, Mongoose, JWT, bcryptjs.

## Requirements
Node.js 20.19+ or 22.12+, npm, and a running MongoDB server (local or Atlas).

## Backend setup
```powershell
cd server
npm install
Copy-Item .env.example .env
```
Edit `server/.env`: set `MONGO_URI` and replace `JWT_SECRET` with a long random secret. Ensure MongoDB is running.
```powershell
npm run seed
npm run dev
```
API: http://localhost:5000/api/health

## Frontend setup (new terminal)
```powershell
cd client
npm install
Copy-Item .env.example .env
npm run dev
```
Open http://localhost:5173

## API
- POST `/api/auth/register` `{name,email,password}`
- POST `/api/auth/login` `{email,password}`
- GET `/api/templates`
- GET `/api/templates/:id`
- GET `/api/favorites` (Bearer token)
- POST `/api/favorites/:templateId` (Bearer token)
- DELETE `/api/favorites/:templateId` (Bearer token, extra functionality)

## Test checklist
Register; log out; log in; view all six templates; search/filter; open details; add favorite; verify My Favorites; remove favorite; confirm favorites remain after refresh; confirm `/favorites` redirects to login when signed out.

## Submission
Create a public GitHub repository named `fullstack-intern-task`, push `client/`, `server/`, and this README. Do not commit `.env` or `node_modules`.

## Author
Replace this section with **your name, email address, and GitHub profile** before submission.
