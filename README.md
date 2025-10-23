# 🧠 Learn AI

**Learn AI** is an interactive web application that uses artificial intelligence to generate **multiple choice questions (MCQs)** from any subject or topic.  
It helps students and teachers create customized quizzes and practice tests instantly.

---

## 🚀 Features

- 🤖 **AI-Powered Question Generation** — Automatically creates MCQs from any topic.
- 🧠 **Subject-Specific Options** — Choose your preferred subject or topic.
- ⚡ **Real-Time Response** — Generates questions instantly using Gemini AI.
- 🧩 **Dynamic Answer Options** — Provides multiple answer choices for each question.
- 🖥️ **Responsive Design** — Clean and user-friendly interface built with React + Tailwind CSS.
- 🔐 **Secure Backend** — Powered by Node.js, Express, and TypeScript.

---

## 🏗️ Tech Stack

### Frontend
- React (Vite)
- TypeScript
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- TypeScript
- MongoDB
- Google Generative AI API (Gemini)

### Deployment
- Render.com

---

## 📁 Project Structure


```
└── 📁learn-ai
        
    └── 📁public
        ├── vite.svg
    └── 📁src
        └── 📁assets
        └── 📁components
            ├── Navbar.tsx
        └── 📁pages
            ├── Mainpage.tsx
            └── Questions.tsx
        └── 📁Types
            └──dataTypes.ts
        ├── App.tsx
        ├── index.css
        ├── main.tsx
        ├── vite-env.d.ts
    ├── .env
    ├── .gitignore
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── README.md
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts
```

## 🧩 Frontend Installation & Setup

### 1. Navigate to the frontend folder
```bash
cd frontend
```
### 2. Install dependencies

```bash
npm install
```
### 3. Start the development server

```bash
npm run dev
```

## 🧠 How It Works

1. The user enters a topic or subject in the input field.  
2. The frontend sends the request to the backend API using Axios.  
3. The backend processes the data and communicates with **Gemini AI**.  
4. The response containing MCQs is returned to the frontend.  
5. The frontend dynamically displays the generated questions and options.

---

## 🖥️ Tech Stack

- **React (Vite)**
- **TypeScript**
- **Tailwind CSS**
- **Axios**

---

## 📜 License

This project is licensed under the **MIT License**.  
You are free to use, modify, and distribute it with attribution.

---

## 👨‍💻 Author

**Morison Frederick**  
Full Stack Web Developer (MERN Stack)  
📍 Cork, Ireland  
📧 [frederickmorison@gmail.com](mailto:frederickmorison@gmail.com)  
🔗 [LinkedIn Profile](https://www.linkedin.com/in/morisonf/)

