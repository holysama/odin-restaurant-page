# 🍣 Miyabi House - Japanese Restaurant Page

A responsive Japanese restaurant landing page built using **JavaScript**, **HTML**, and **CSS**, bundled with **Webpack**. Designed for The Odin Project curriculum, this page showcases modular JavaScript architecture and design integration from Dribbble inspiration.

> 🖌️ Design inspired by: [Japanese Food Restaurant Website on Dribbble](https://dribbble.com/shots/20495221-Japanese-Food-Restaurant-Website)

---

## ✨ Features

- Multi-section layout (Home, Menu, About, Contact)
- Dynamic page loading with modular JavaScript
- Webpack bundling & asset management
- Responsive background designs with themed illustrations
- Fully responsive and mobile-friendly layout
- Clean UI inspired by modern Japanese minimalism

---

## 📁 Project Structure

```
odin-restaurant-page/
├── dist/                # Production files (after build)
├── node_modules/
├── src/
│   ├── designModels/    # Sushi illustrations and image assets
│   ├── fonts/           # Custom fonts
│   ├── modules/         # JS modules for each page
│   ├── styles/          # CSS modules for sections
│   ├── index.html       # HTML boilerplate
│   ├── index.js         # JS entry point
│   └── style.css        # Main stylesheet
├── package.json
├── webpack.config.js
```

---

## 🧠 What I Learned

- Setting up a project with Webpack from scratch
- DOM manipulation and module patterns in vanilla JavaScript
- CSS modularization and layout techniques
- Structuring assets efficiently with Webpack’s file-loader
- Maintaining design consistency across multiple sections

---

## ⚔️ Challenges

- Managing visual overflow and image responsiveness with flex layouts
- Preserving visual quality when scaling background illustrations
- Adapting designs to mobile viewports while keeping aesthetic fidelity
- Fine-tuning floating layouts and layered background assets

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/odin-restaurant-page.git
cd odin-restaurant-page
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npx webpack serve --open
```

### 4. Build for production

```bash
npx webpack --mode production
```
