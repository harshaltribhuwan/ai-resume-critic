# ⚡ AI Resume Critic

A sleek, interactive, and AI-powered resume feedback web app built with **React**, **Framer Motion**, **SCSS**, and sprinkled with magical UI experiences. This project reads PDF resumes, analyzes the content, and delivers smart, ATS-optimized feedback — all while showcasing premium frontend animation and UX craft.

---

## 🚀 Features

- 📎 **Drag & Drop Resume Upload** (PDF)
- 🤖 **Smart Feedback Generator** (mocked, customizable)
- ✨ **Framer Motion Animations** – spring physics, fade-ins, staggered transitions
- 🌀 **Interactive 3D Tilt Effects** for delight
- 🌌 **Animated Starfield & Floating Elements** for magic
- 📱 **Fully Responsive & Mobile-Ready**
- 🎨 Styled with **SCSS**, fully customizable

---

## 🛠️ Tech Stack

| Tool | Description |
|------|-------------|
| **React** | UI library |
| **Framer Motion** | For animations and transitions |
| **SCSS** | Clean modular styling |
| **react-parallax-tilt** | Magic tilt interactions |
| **React Confetti / Alternatives** | Animated celebration |
| **react-three/fiber** _(optional)_ | 3D & particle backgrounds |
| **pdfjs-dist** | PDF parsing (custom hook)

---

## 🧠 Smart Feedback

Uses a mocked feedback engine via:
```js
getMockedFeedback({ text, numPages });
