# Animated Resume Site

A professional, animated, single-page resume site built with React, Tailwind CSS, and Framer Motion.

## Features

- IT-inspired dark blue theme
- Smooth, modern animations
- Easy-to-edit resume data (`src/data.js`)
- Responsive and fast
- Ready for deployment on GitHub Pages

## How to Use

1. **Clone your repo:**
```bash
git clone https://github.com/yourusername/your-resume-site.git
cd your-resume-site
```

2. **Install dependencies:**
```bash
npm install
```

3. **Edit your resume data:**
Update your info in `src/data.js`.

4. **Run locally:**
```bash
npm start
```

5. **Build for production:**
```bash
npm run build
```

6. **Deploy on GitHub Pages:**

- Install gh-pages:
```bash
npm install --save-dev gh-pages
```

- Add these scripts to your `package.json`:
```json
"homepage": "https://yourusername.github.io/your-resume-site",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

- Push your code to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/your-resume-site.git
git push -u origin main
```

- Deploy:
```bash
npm run deploy
```

- Enable GitHub Pages in your repo settings (set source to `gh-pages` branch).

## Customize

- Change colors in `tailwind.config.js`
- Edit sections/components in `src/components/`
- Replace "Your Name" and other placeholder text

---

Enjoy your animated professional resume! 🚀
