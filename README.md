# URL Shortener - Frontend

🚀🚀🚀 A modern, high-performance frontend for a **URL Shortening Service**, built with **React.js, Tailwind CSS, and TypeScript**. This project leverages a robust boilerplate for better scalability, developer experience, and maintainability.

> **Boilerplate Used**: [React Boilerplate for Starter](https://github.com/sonht113/react-boilerplate-for-starter)

<p align="center">
<img src="public/assets/imgs/banner.png?raw=true" alt="URL Shortener Banner" />
</p>

## ✨ Features

- ⚡ **[React.js 18+](https://react.dev/)** - Fast and scalable frontend framework
- 🎨 **[Tailwind CSS 3.3](https://tailwindcss.com/)** - Utility-first modern styling
- 🔥 **Type checking with [TypeScript](https://www.typescriptlang.org/)**
- 📏 **Linting with [ESLint](https://eslint.org/)** (Airbnb, Tailwind, and Core Web Vitals)
- 💖 **Code Formatting with [Prettier](https://prettier.io/)**
- 🦊 **Husky for Git Hooks** - Enforce best practices before committing
- 🚫 **Lint-staged** - Run linters on staged Git files
- 🗂 **Organized Project Structure** for scalability
- ✅ **Strict Mode Enabled** for TypeScript and React

## 📜 Requirements

- **Node.js 16+**
- **pnpm** (recommended for package management)

## ⚡ Getting Started

Clone the repository and install dependencies:

\`\`\`sh
git clone https://github.com/SamyBchaalia/arcube-frontend-test.git
cd arcube-frontend-test
pnpm install
\`\`\`

### 🚀 Running the Development Server

Start the development server with live reload:

\`\`\`sh
pnpm run dev
\`\`\`

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📂 Project Structure

\`\`\`
.
├── README.md # Project documentation  
├── .github/ # GitHub workflows  
├── .husky/ # Husky configuration  
├── public/ # Static assets  
├── src/
│ ├── apis/ # API calls to backend  
│ ├── components/ # Reusable UI components  
│ ├── data/ # Static data/constants  
│ ├── features/ # Feature-based modules  
│ ├── hooks/ # Custom React hooks  
│ ├── layout/ # Layout components  
│ ├── pages/ # Page components  
│ ├── provider/ # Global state providers  
│ ├── routes/ # Application routing  
│ ├── ts/ # Type definitions and enums  
│ ├── utils/ # Utility functions  
├── tailwind.config.js # Tailwind CSS configuration  
├── tsconfig.json # TypeScript configuration  
\`\`\`

## 🌍 API Integration

The frontend communicates with the backend using the following endpoints:

- **POST `/shorten`** - Accepts a long URL and returns a shortened version.
- **GET `/{shortened_id}`** - Redirects to the original URL.

### 🔑 Environment Variables

Create a `.env.local` file and set the backend API URL:

\`\`\`env
NEXT_PUBLIC_API_BASE_URL=https://your-backend-url.com
\`\`\`

## 🧪 Testing

Run tests using:

\`\`\`sh
pnpm run test
\`\`\`

## 🚀 Deployment

Deploy using **Vercel, Netlify, or your preferred hosting platform**:

\`\`\`sh
vercel deploy # For Vercel
\`\`\`

## 📜 License

This project is **open-source** under the **MIT License**.

---

Made with ♥ by [Samy Ben Chaalia](https://sami.benchaalia.com)
