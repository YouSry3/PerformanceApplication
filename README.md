# ⚛️ Performance Optimization in React

This project demonstrates how to boost performance in React applications by leveraging:

* **`React.memo`** – Prevent unnecessary component re-renders
* **`useCallback`** – Memoize functions to avoid re-creating them on every render
* **`useMemo`** – Cache expensive computations for better performance

## 📹 Video Walkthrough

In this short video, I walk you through a real-world example using these three optimization techniques and explain when and why you should use each one.

> Whether you're just starting with React or looking to improve your app's performance, this is a practical and beginner-friendly guide.

## 🚀 Live Demo

🔗 [View the Application](https://performance-application.vercel.app/)

## 📂 Project Structure

```
/src
  ├── Components
  │   ├── Card.tsx
  │   ├── Products.tsx
  │   ├── ChartComponent.tsx
  │   └── ui/
  │       └── Button.tsx
  ├── Data.ts
  ├── interfaces.ts
  └── App.tsx
```

* Components like `<Card />` receive functions via props and demonstrate how to prevent unnecessary re-renders.
* The `Products` component uses `useCallback` to memoize a toast notification handler.
* State updates and chart visualization show how memoization affects UI rendering.

## 🧹 Tech Stack

* React (with TypeScript)
* Chart.js via `react-chartjs-2`
* React Toastify
* TailwindCSS

## 📦 Setup

```bash
git clone https://github.com/YouSry3/PerformanceApplication.git
cd PerformanceApplication
npm install
npm run dev
```

## 🙌 Author

**Mohammed Sherif**
Full Stack Developer | React (TS) & .NET Core
🔗 [LinkedIn](https://linkedin.com/in/mohammed--sherif)
