# 📖 Documentation

---

## 1️⃣ Project Overview

**📝 Name:** Sajib Bhattacharjee - Frontend Developer Portfolio  
**💡 Description:** A modern, responsive portfolio website built with React.js and TypeScript to showcase skills, projects, certifications, documentation, blog posts, and contact information. The site features advanced, visually engaging sections and dynamic theme support.

**🎯 Purpose & Goals:**

- 🏆 Present professional experience and skills
- 💻 Showcase real-world projects
- 📚 Provide technical documentation and blog resources
- 🏅 Highlight certifications and achievements
- 📬 Enable easy contact and resume download

**🔗 Live Link:** [sajibbhattacharjee.netlify.app](https://sajibbhattacharjee.netlify.app/)  
**🐙 GitHub:** [github.com/Sajib-Bhattacharjee/portfolio-website](https://github.com/Sajib-Bhattacharjee/portfolio-website)

---

## 2️⃣ Features

- 📱 Responsive layout for all devices
- 🌗 Dark/light theme toggle with full color consistency
- 🎬 Smooth, dynamic animations (Framer Motion)
- 🏅 Advanced Certifications section with gradients, badges, and issuer highlights
- 📚 Featured Resource section with animated, theme-aware resource links
- 🗂️ Dynamic project listing and filtering
- ✉️ Contact form with email functionality (EmailJS/Formspree)
- 📄 Resume download button
- ⬆️ Scroll-to-top functionality
- 📝 Blog section with search and categories
- 📖 Technical documentation pages

---

## 3️⃣ Technology Stack

- **⚛️ Frontend:** React, TypeScript
- **🎨 Styling:** Styled-Components (theme-based, dynamic gradients, and color variables)
- **🌀 Animation:** Framer Motion
- **🛣️ Routing:** React Router
- **🚀 Deployment:** Netlify, Vercel
- **🔧 Others:** React Icons, EmailJS/Formspree

---

## 4️⃣ Folder Structure

```
src/
  components/    # 🧩 Reusable UI components (Navbar, Footer, ProjectCard, etc.)
  pages/         # 📄 Page components (Home, About, Projects, Blog, etc.)
  assets/        # 🖼️ Images, icons, fonts, and other static resources
  utils/         # 🛠️ Utility functions (resume generator, helpers)
  hooks/         # 🪝 Custom React hooks
  styles/        # 🎨 Global and theme styles
  constants/     # 📦 Static data/constants (skills, projects, etc.)
```

- **components:** UI building blocks, reusable across pages
- **pages:** Main route views, each representing a section
- **assets:** Images, logos, and downloadable files
- **utils:** Helper functions (e.g., PDF resume generator)
- **hooks:** Custom hooks for state, effects, etc.
- **styles:** Global CSS, theme definitions
- **constants:** Static data for skills, projects, docs

---

## 5️⃣ Installation & Setup

**🔽 Clone the repository:**

```bash
git clone https://github.com/Sajib-Bhattacharjee/portfolio-website.git
cd portfolio-website
```

**📦 Install dependencies:**

```bash
npm install
```

**▶️ Run locally:**

```bash
npm start
```

Visit [http://localhost:3000](http://localhost:3000) in your browser.

---

## 6️⃣ Build & Deployment

**🏗️ Build the project:**

```bash
npm run build
```

**🌐 Hosting:**

- **Netlify:** Drag & drop `build/` folder or connect repo  
  Add `_redirects` file in `public/`:
  ```
  /* /index.html 200
  ```
- **Vercel:** Import repo, auto-detect React app

---

## 7️⃣ Custom Components & Sections

- **🧭 Navbar:** Responsive navigation, theme toggle
- **🔗 Footer:** Contact info, social links, newsletter
- **👤 HeroSection:** Intro, profile image, call-to-action
- **🏅 Certifications:** Advanced, colorful, and dynamic section with issuer badges and gradients
- **📚 Featured Resource:** Animated, theme-consistent resource highlights
- **📦 ProjectCard:** Project display, links, tags
- **🛠️ Skills:** Visual skill bars, categorized
- **📥 ResumeButton:** Download/generate resume PDF
- **⬆️ ScrollToTop:** Floating button for smooth scroll

All components are reusable and styled for consistency across pages.

---

## 8️⃣ Routing Setup

- 🛣️ Uses React Router v6
- 🗂️ All main pages are routed in [`src/App.tsx`](src/App.tsx)
- 🔀 Nested routing for project details, blog posts
- 🎬 Page transitions via Framer Motion

---

## 9️⃣ Responsive Design

- 📱 Mobile-first approach
- 🎨 Media queries in [`src/App.css`](src/App.css) and styled-components
- 🧮 Utility classes for grid/flex layouts
- 🌍 Cross-browser tested

---

## 🔟 SEO & Meta Setup

- 🏷️ Dynamic titles and meta tags in [`public/index.html`](public/index.html)
- 🖼️ Favicon and social share images
- 🤖 Robots.txt and manifest for PWA

---

## 1️⃣1️⃣ Form Integration

- ✉️ Contact form uses EmailJS or Formspree
- ✅ Validation and feedback messages
- 📝 Netlify forms supported via HTML attributes

---

## 1️⃣2️⃣ PWA Support (Optional)

- 📱 Manifest setup in [`public/manifest.json`](public/manifest.json)
- 🛡️ Service worker registration in [`src/index.tsx`](src/index.tsx)
- 📲 "Add to Home Screen" prompt

---

## 1️⃣3️⃣ Performance Optimization

- 💤 Lazy loading images/components
- ✂️ Code splitting via React.lazy/Suspense
- 🚦 Lighthouse score optimization
- 🗜️ Image compression

---

## 1️⃣4️⃣ Assets & Resources

- 🖼️ Images: Unsplash, Pexels, or custom
- 🔣 Icons: React Icons, FontAwesome
- 🔤 Fonts: Google Fonts (e.g., Poppins)

---

## 1️⃣5️⃣ Challenges Faced

- 📱 Responsive design for all devices
- 🎬 Animation performance tuning
- ✉️ EmailJS integration for contact form
- 🛣️ Routing support for Netlify deployment
- 🗂️ Maintaining scalable folder structure

---

## 1️⃣6️⃣ Lessons Learned

- 🏗️ Building scalable React components
- 🧹 Importance of clean code and structure
- 🐞 Debugging deployment/routing issues
- 🚀 Performance optimization for UX
- 🔄 Improved CI/CD and frontend workflows

---

## 1️⃣7️⃣ Known Issues

- 🖥️ Minor compatibility issues on legacy browsers
- 📝 Blog CMS integration in progress
- 🐢 Some animations may be heavy on low-end devices

---

## 1️⃣8️⃣ Future Improvements

- 📝 Add blog section with Markdown/CMS
- 🎨 Theme customization panel
- 🧪 Unit testing (Jest, React Testing Library)
- 🔐 Authentication/dashboard for advanced features

---

## 1️⃣9️⃣ License

📝 MIT License. See [`LICENSE`](LICENSE) for details.

---

## 2️⃣0️⃣ Credits

- 🔣 Icons: [React Icons](https://react-icons.github.io/react-icons/)
- 🖼️ Images: [Unsplash](https://unsplash.com/), [Pexels](https://pexels.com/)
- 🛠️ Libraries: React, Framer Motion, Styled Components, EmailJS
- 📚 Tutorials: freeCodeCamp, documentation guides

---

## 2️⃣1️⃣ Author Info

**👨‍💻 Sajib Bhattacharjee**

- [🔗 LinkedIn](https://www.linkedin.com/in/sajib-bhattacharjee-42682a178/)
- [🐙 GitHub](https://github.com/Sajib-Bhattacharjee)
- [🌐 Portfolio](https://sajibbhattacharjee.netlify.app/)

_Motivation:_  
💬 Passionate about building beautiful, accessible web experiences and sharing knowledge with the developer community.
