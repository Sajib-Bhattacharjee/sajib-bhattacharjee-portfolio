# 📚 Complete Portfolio Website Documentation

## Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture & Technology Stack](#architecture--technology-stack)
3. [Installation & Setup](#installation--setup)
4. [Project Structure](#project-structure)
5. [Core Components](#core-components)
6. [Pages & Routing](#pages--routing)
7. [Styling & Theming](#styling--theming)
8. [State Management](#state-management)
9. [Performance & Optimization](#performance--optimization)
10. [Deployment](#deployment)
11. [Development Guidelines](#development-guidelines)
12. [Troubleshooting](#troubleshooting)
13. [API Reference](#api-reference)
14. [Contributing](#contributing)

---

## Project Overview

### 🎯 Purpose

A modern, responsive portfolio website built with React and TypeScript to showcase Sajib Bhattacharjee's skills, projects, certifications, and professional experience. The application provides an interactive platform for potential employers and clients to explore his work.

### 🌟 Key Features

- **Responsive Design**: Mobile-first approach with cross-device compatibility
- **Dark/Light Theme**: Dynamic theme switching with localStorage persistence
- **Smooth Animations**: Framer Motion integration for engaging user experience
- **Project Showcase**: Filterable project gallery with detailed views
- **Contact Integration**: Email functionality with form validation
- **PWA Support**: Progressive Web App features for mobile users
- **Resume Download**: PDF generation and download functionality
- **SEO Optimized**: Search engine friendly with meta tags

### 🔗 Live Links

- **Production**: [sajib-bhattacharjee.netlify.app](https://sajib-bhattacharjee.netlify.app/)
- **GitHub**: [github.com/Sajib-Bhattacharjee/sajib-bhattacharjee-portfolio](https://github.com/Sajib-Bhattacharjee/sajib-bhattacharjee-portfolio)

---

## Architecture & Technology Stack

### 🏗️ Core Technologies

```json
{
  "react": "^19.0.0",
  "typescript": "^4.9.5",
  "styled-components": "^6.1.15",
  "react-router-dom": "^7.3.0"
}
```

### 🎨 UI & Animation

```json
{
  "framer-motion": "^12.4.11",
  "react-icons": "^5.5.0",
  "react-intersection-observer": "^9.16.0"
}
```

### 🛠️ Utilities & Libraries

```json
{
  "axios": "^1.8.2",
  "jspdf": "^3.0.1",
  "react-toastify": "^11.0.5",
  "react-tsparticles": "^2.12.2"
}
```

### 📱 PWA & Performance

- Service Worker for offline functionality
- Manifest.json for app-like experience
- Lazy loading and code splitting
- Image optimization and caching

---

## Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Git for version control

### 🚀 Quick Start

1. **Clone the repository**

```bash
git clone https://github.com/Sajib-Bhattacharjee/portfolio-website.git
cd portfolio-website
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm start
```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### 📦 Available Scripts

```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run test suite
npm run eject      # Eject from Create React App
```

---

## Project Structure

```
portfolio/
├── public/                    # Static assets
│   ├── images/               # Project images and assets
│   ├── assets/               # Additional static files
│   ├── _redirects           # Netlify redirects
│   └── manifest.json        # PWA manifest
├── src/
│   ├── components/           # Reusable UI components
│   ├── pages/               # Route components
│   ├── utils/               # Utility functions
│   ├── types/               # TypeScript definitions
│   ├── context/             # React context providers
│   ├── App.tsx             # Main application component
│   ├── index.tsx           # Application entry point
│   ├── GlobalStyles.ts     # Global CSS styles
│   └── themes.ts           # Theme definitions
├── package.json             # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

### 📁 Detailed Structure

#### Components (`src/components/`)

- **Navbar.tsx** - Responsive navigation with theme toggle
- **Footer.tsx** - Site footer with social links
- **ProjectCard.tsx** - Project display component
- **Button.tsx** - Reusable button component
- **Card.tsx** - Base card with accent colors
- **ContactForm.tsx** - Contact form with validation
- **PWAComponents.tsx** - PWA features (splash, install prompt)
- **ScrollToTop.tsx** - Smooth scroll functionality
- **ResumeButton.tsx** - PDF resume download
- **TestimonialsSection.tsx** - Client testimonials
- **SkillBar.tsx** - Animated skill progress bars

#### Pages (`src/pages/`)

- **HomePage.tsx** - Landing page with hero section
- **About.tsx** - Personal information and skills
- **Projects.tsx** - Project showcase with filtering
- **ProjectDetails.tsx** - Individual project pages
- **Certifications.tsx** - Professional certifications
- **Contact.tsx** - Contact form and information
- **Blog.tsx** - Blog section (external link)
- **Documentations.tsx** - Technical documentation
- **Legal.tsx** - Legal pages
- **NotFound.tsx** - 404 error page

---

## Core Components

### 🧭 Navbar Component

**File**: `src/components/Navbar.tsx`

**Features**:

- Responsive mobile navigation
- Theme toggle functionality
- Active route highlighting
- Smooth scroll behavior
- Backdrop blur effects

**Props**:

```typescript
interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}
```

**Usage**:

```tsx
<Navbar theme={theme} toggleTheme={toggleTheme} />
```

### 📦 ProjectCard Component

**File**: `src/components/ProjectCard.tsx`

**Features**:

- Responsive project display
- Image overlay with GitHub/live links
- Technology tag system
- Hover animations
- Gradient background support

**Props**:

```typescript
interface ProjectCardProps {
  id?: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  category: string;
  index: number;
  gradient?: string;
}
```

**Usage**:

```tsx
<ProjectCard
  id="project-id"
  title="Project Title"
  description="Project description"
  image="/path/to/image.png"
  tags={["React", "TypeScript"]}
  githubUrl="https://github.com/user/repo"
  liveUrl="https://demo.com"
  category="web"
  index={0}
  gradient="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
/>
```

### 🎨 Button Component

**File**: `src/components/Button.tsx`

**Variants**:

- `primary` - Solid background
- `outline` - Bordered style
- `ghost` - Transparent background

**Sizes**:

- `small` - Compact button
- `medium` - Default size
- `large` - Prominent button

**Usage**:

```tsx
<Button
  variant="primary"
  size="large"
  to="/contact"
  icon={<FaArrowRight />}
  iconPosition="right"
>
  Contact Me
</Button>
```

---

## Pages & Routing

### 🛣️ Routing Configuration

**File**: `src/App.tsx`

```tsx
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/about" element={<About />} />
  <Route path="/certifications" element={<Certifications />} />
  <Route path="/projects" element={<Projects />} />
  <Route path="/projects/:id" element={<ProjectDetails />} />
  <Route path="/documentations" element={<Documentations />} />
  <Route path="/blog" element={<Blog />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/legal" element={<Legal />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

### 🏠 HomePage Component

**File**: `src/pages/HomePage.tsx`

**Sections**:

1. **Hero Section** - Introduction with profile image
2. **Featured Projects** - Highlighted project showcase
3. **Services Section** - Offered services with icons
4. **Testimonials** - Client feedback

**Key Features**:

- Animated profile image with floating elements
- Social media links
- Call-to-action buttons
- Responsive grid layouts

### 📋 Projects Page

**File**: `src/pages/Projects.tsx`

**Features**:

- Category filtering (All, Web, Mobile, etc.)
- Search functionality
- Grid/List view toggle
- Project data management

**Project Data Structure**:

```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  additionalImages: string[];
  tags: string[];
  category: string;
  githubUrl: string;
  liveUrl: string;
  gradient: string;
  challenges: string;
  solution: string;
}
```

---

## Styling & Theming

### 🎨 Theme System

**File**: `src/themes.ts`

**Light Theme**:

```typescript
export const lightTheme: DefaultTheme = {
  primary: "#0070f3",
  secondary: "#0056b3",
  background: "#ffffff",
  text: "#333333",
  cardBackground: "#ffffff",
  // ... additional properties
};
```

**Dark Theme**:

```typescript
export const darkTheme: DefaultTheme = {
  primary: "#0070f3",
  secondary: "#4dabf7",
  background: "#1f1f1f",
  text: "#e0e0e0",
  cardBackground: "#2d2d2d",
  // ... additional properties
};
```

### 🎯 Global Styles

**File**: `src/GlobalStyles.ts`

**Features**:

- CSS custom properties for consistency
- Responsive typography scale
- Custom scrollbar styling
- Animation keyframes
- Utility classes

**Key Utilities**:

```css
.container          /* Max-width container */
/* Max-width container */
/* Max-width container */
/* Max-width container */
/* Max-width container */
/* Max-width container */
/* Max-width container */
/* Max-width container */
/* Max-width container */
/* Max-width container */
/* Max-width container */
/* Max-width container */
/* Max-width container */
/* Max-width container */
/* Max-width container */
/* Max-width container */
.text-gradient     /* Gradient text effect */
.card              /* Base card styling */
.gradient-primary; /* Primary gradient background */
```

### 🎭 Animation System

**Framer Motion Integration**:

- Page transitions
- Scroll-triggered animations
- Hover effects
- Loading states

**Example Usage**:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

---

## State Management

### 🎛️ Theme Management

**Implementation**: Local state with localStorage persistence

```tsx
const [theme, setTheme] = useState("dark");

const toggleTheme = () => {
  const newTheme = theme === "light" ? "dark" : "light";
  setTheme(newTheme);
  localStorage.setItem("theme", newTheme);
};
```

### 📱 PWA State

**Splash Screen**:

- Auto-hide after 2.5 seconds
- Branded loading experience
- Smooth transitions

**Install Prompt**:

- Detects PWA install capability
- Shows install button when available
- Handles user choice

---

## Performance & Optimization

### ⚡ Optimization Techniques

1. **Code Splitting**

```tsx
const LazyComponent = React.lazy(() => import("./Component"));
```

2. **Image Optimization**

- Responsive images with proper sizing
- Lazy loading for images
- WebP format support

3. **Bundle Optimization**

- Tree shaking for unused code
- Minification for production
- Gzip compression

4. **Caching Strategy**

- Service worker for offline support
- Browser caching for static assets
- CDN for global distribution

### 📊 Performance Metrics

**Target Scores**:

- Lighthouse Performance: 90+
- Lighthouse Accessibility: 95+
- Lighthouse Best Practices: 90+
- Lighthouse SEO: 95+

### 🔧 Performance Monitoring

**Tools**:

- Lighthouse CI for automated testing
- Web Vitals monitoring
- Bundle analyzer for size optimization

---

## Deployment

### 🌐 Netlify Deployment

1. **Build the project**

```bash
npm run build
```

2. **Deploy to Netlify**

- Drag and drop `build/` folder
- Or connect GitHub repository

3. **Configure redirects**
   Create `public/_redirects`:

```
/* /index.html 200
```

### 🚀 Vercel Deployment

1. **Connect repository**

- Import from GitHub
- Auto-detect React app

2. **Configure build settings**

- Build command: `npm run build`
- Output directory: `build`

### 📱 PWA Configuration

**Manifest.json**:

```json
{
  "name": "Sajib Bhattacharjee - Portfolio",
  "short_name": "Sajib Portfolio",
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#0070f3",
  "background_color": "#ffffff"
}
```

---

## Development Guidelines

### 📝 Code Style

**TypeScript**:

- Strict type checking enabled
- Interface definitions for all props
- Proper type annotations

**Component Structure**:

```tsx
// 1. Imports
import React from 'react';
import styled from 'styled-components';

// 2. Interface definitions
interface ComponentProps {
  // Props definition
}

// 3. Component definition
const Component: React.FC<ComponentProps> = ({ props }) => {
  // Component logic
  return (
    // JSX
  );
};

// 4. Styled components
const StyledComponent = styled.div`
  // Styles
`;

// 5. Export
export default Component;
```

### 🧪 Testing Strategy

**Unit Testing**:

- Component testing with React Testing Library
- Utility function testing
- Type checking with TypeScript

**Integration Testing**:

- User flow testing
- Form validation testing
- Theme switching testing

### 🔄 Git Workflow

**Branch Strategy**:

- `main` - Production-ready code
- `develop` - Development branch
- `feature/*` - Feature branches
- `hotfix/*` - Critical fixes

**Commit Convention**:

```
feat: add new project card component
fix: resolve theme toggle issue
docs: update README with new features
style: improve button hover effects
```

---

## Troubleshooting

### 🐛 Common Issues

**1. Theme not persisting**

```bash
# Check localStorage in browser dev tools
localStorage.getItem('theme')
```

**2. Build errors**

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**3. PWA not working**

```bash
# Check service worker registration
# Verify manifest.json configuration
# Test in incognito mode
```

**4. Styled Components issues**

```bash
# Clear styled-components cache
npm run build -- --reset-cache
```

### 🔧 Development Tools

**VS Code Extensions**:

- TypeScript and JavaScript Language Features
- Styled Components
- Prettier - Code formatter
- ESLint

**Browser Extensions**:

- React Developer Tools
- Redux DevTools (if using Redux)
- Lighthouse

---

## API Reference

### 🎨 Theme Interface

```typescript
interface DefaultTheme {
  primary: string;
  secondary: string;
  tertiary: string;
  background: string;
  backgroundAlt: string;
  backgroundSecondary: string;
  backgroundHover: string;
  cardBackground: string;
  cardBackgroundAlt: string;
  text: string;
  textSecondary: string;
  heading: string;
  borderColor: string;
  shadowColor: string;
  scrollbarTrack: string;
  scrollbarThumb: string;
  success: string;
  warning: string;
  error: string;
  info: string;
  cardAccent: {
    blue: string;
    purple: string;
    teal: string;
    cyan: string;
    green: string;
    orange: string;
    pink: string;
    indigo: string;
    red: string;
  };
  gradient: {
    primary: string;
    secondary: string;
  };
}
```

### 📦 Component Props

**Button Component**:

```typescript
interface ButtonProps {
  variant?: "primary" | "outline" | "ghost";
  size?: "small" | "medium" | "large";
  to?: string;
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
}
```

**ProjectCard Component**:

```typescript
interface ProjectCardProps {
  id?: string;
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  liveUrl?: string;
  delay?: number;
  category: string;
  index: number;
  gradient?: string;
}
```

### 🛠️ Utility Functions

**Icon Helper**:

```typescript
export const renderIcon = (
  Icon: any,
  size: number = 24
): React.ReactElement => {
  return <Icon size={size} />;
};
```

**Resume Generator**:

```typescript
export const generateResume = (): void => {
  // PDF generation logic
  const doc = new jsPDF();
  // ... PDF content
  doc.save("Sajib-Bhattacharjee-Resume.pdf");
};
```

---

## Contributing

### 🤝 How to Contribute

1. **Fork the repository**
2. **Create a feature branch**

```bash
git checkout -b feature/your-feature-name
```

3. **Make your changes**
4. **Test thoroughly**
5. **Submit a pull request**

### 📋 Contribution Guidelines

**Code Quality**:

- Follow TypeScript best practices
- Write meaningful commit messages
- Add tests for new features
- Update documentation

**Pull Request Process**:

1. Update README.md if needed
2. Add tests for new functionality
3. Ensure all tests pass
4. Update documentation
5. Request review from maintainers

### 🐛 Reporting Issues

**Issue Template**:

```
## Bug Description
Brief description of the issue

## Steps to Reproduce
1. Step 1
2. Step 2
3. Step 3

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Environment
- OS: [e.g., Windows 10]
- Browser: [e.g., Chrome 90]
- Node.js version: [e.g., 16.0.0]

## Additional Information
Any other relevant information
```

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Sajib Bhattacharjee**

- **Portfolio**: [sajib-bhattacharjee.netlify.app](https://sajib-bhattacharjee.netlify.app/)
- **LinkedIn**: [linkedin.com/in/sajib-bhattacharjee-42682a178](https://www.linkedin.com/in/sajib-bhattacharjee-42682a178/)
- **GitHub**: [github.com/Sajib-Bhattacharjee](https://github.com/Sajib-Bhattacharjee)

---

_This documentation is maintained and updated regularly. For the latest version, please check the GitHub repository._
