# 🚀 Whiteboard App - Setup Guide

## 📌 Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (Recommended: Latest LTS version) - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/)
- **VS Code** (or your preferred code editor) - [Download here](https://code.visualstudio.com/)

---

## 🔧 Installation Steps

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/YOUR-USERNAME/whiteboard-app.git
cd whiteboard-app
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Install Movex (For Multiplayer Features)

```sh
npm install movex
```

To verify the installation:

```sh
npm list movex
```

### 4️⃣ Start the Development Server

```sh
npm run dev
```

Visit [http://localhost:5173/](http://localhost:5173/) to see the app running.

---

## 📂 Project Structure

```
whiteboard-app/
│-- node_modules/        # Installed dependencies
│-- public/              # Static assets
│-- src/                 # Application source code
│   │-- components/      # React components
│   │-- App.tsx         # Main App component
│   │-- main.tsx        # Entry point
│-- .gitignore           # Ignored files for Git
│-- package.json         # Project metadata & dependencies
│-- README.md            # Project overview
│-- SETUP.md             # This setup guide
```

---

## 🛠️ Troubleshooting

**Problem:** `npm run dev` doesn't work?

- Make sure you are in the correct directory (`whiteboard-app`)
- Check if all dependencies are installed (`npm install`)
- Restart your terminal and try again

**Problem:** `movex` not found?

- Run `npm install movex` again
- Check if it's listed in `package.json` under dependencies

---

## 💡 Contributing

1. **Fork the repository** on GitHub.
2. **Create a new branch** for your feature or fix.
3. **Commit your changes** with a meaningful message.
4. **Push your branch** and open a pull request.

---

🎉 **You're all set! Happy coding!** 🚀

