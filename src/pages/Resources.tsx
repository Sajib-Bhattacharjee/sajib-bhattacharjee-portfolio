import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBook,
  FaFilePdf,
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
  FaSearch,
  FaDownload,
} from "react-icons/fa";
import {
  FiGlobe,
  FiYoutube,
  FiTool,
  FiFileText,
  FiCode,
  FiServer,
  FiDatabase,
  FiCloud,
  FiGrid,
  FiList,
  FiBookmark,
  FiHeart,
  FiEye,
  FiTarget,
} from "react-icons/fi";
import { renderIcon } from "../utils/iconHelpers";
import SectionTitle from "../components/SectionTitle";
import { FiSettings, FiShare } from "react-icons/fi";

// Type definitions for data structures
interface Resource {
  name: string;
  url: string;
}

interface Roadmap {
  title: string;
  icon: any; // Using any for icon type to match renderIcon helper
  description: string;
  resources: Resource[];
}

interface Website {
  name: string;
  url: string;
  description: string;
}

interface YouTubeChannel {
  name: string;
  url: string;
  description: string;
}

interface Ebook {
  title: string;
  url: string;
  description: string;
  author?: string;
  format?: string;
}

interface Tool {
  name: string;
  url: string;
  description: string;
  category?: string;
}

interface Article {
  title: string;
  url: string;
  description: string;
  author?: string;
  date?: string;
}

interface Project {
  title: string;
  url: string;
  description: string;
  difficulty?: string;
  tech?: string[];
}

interface GithubRepo {
  name: string;
  url: string;
  description: string;
  stars?: number;
  language?: string;
}

interface ExternalResource {
  name: string;
  url: string;
  description: string;
  category?: string;
}

interface Note {
  title: string;
  content: string;
  tags?: string[];
  date?: string;
}

// Performance optimization: Memoize data arrays
const useMemoizedData = (): {
  roadmaps: Roadmap[];
  websites: Website[];
  youtubeChannels: YouTubeChannel[];
  ebooks: Ebook[];
  tools: Tool[];
  articles: Article[];
  projects: Project[];
  githubRepos: GithubRepo[];
  externalResources: ExternalResource[];
  notes: Note[];
} => {
  return useMemo(() => {
    const roadmaps: Roadmap[] = [
      {
        title: "Front-End Development",
        icon: FiCode,
        description: "HTML, CSS, JavaScript, React, Vue.js",
        resources: [
          { name: "MDN Web Docs", url: "https://developer.mozilla.org/" },
          { name: "freeCodeCamp", url: "https://www.freecodecamp.org/" },
          { name: "The Odin Project", url: "https://www.theodinproject.com/" },
          { name: "Frontend Masters", url: "https://frontendmasters.com/" },
          { name: "CSS-Tricks", url: "https://css-tricks.com/" },
          { name: "JavaScript.info", url: "https://javascript.info/" },
          { name: "React Official Docs", url: "https://react.dev/" },
          { name: "Vue.js Guide", url: "https://vuejs.org/guide/" },
          { name: "Angular Tutorial", url: "https://angular.io/tutorial" },
          {
            name: "TypeScript Handbook",
            url: "https://www.typescriptlang.org/docs/",
          },
        ],
      },
      {
        title: "Back-End Development",
        icon: FiServer,
        description: "Node.js, Express, Python, Django, PHP",
        resources: [
          { name: "Node.js Official Docs", url: "https://nodejs.org/docs/" },
          { name: "Express.js Guide", url: "https://expressjs.com/" },
          { name: "Python.org", url: "https://www.python.org/" },
          {
            name: "Django Documentation",
            url: "https://docs.djangoproject.com/",
          },
          {
            name: "Flask Web Development",
            url: "https://flask.palletsprojects.com/",
          },
          { name: "PHP.net", url: "https://www.php.net/manual/en/" },
          { name: "Laravel Documentation", url: "https://laravel.com/docs" },
          {
            name: "Ruby on Rails Guide",
            url: "https://guides.rubyonrails.org/",
          },
          { name: "Java Spring Boot", url: "https://spring.io/guides" },
          {
            name: "C# ASP.NET Core",
            url: "https://docs.microsoft.com/en-us/aspnet/core/",
          },
        ],
      },
      {
        title: "Full-Stack Development",
        icon: FiDatabase,
        description: "MERN Stack, MEAN Stack, LAMP Stack",
        resources: [
          {
            name: "MongoDB University",
            url: "https://university.mongodb.com/",
          },
          {
            name: "React + Node.js Tutorials",
            url: "https://www.youtube.com/@TraversyMedia",
          },
          { name: "Full Stack Open", url: "https://fullstackopen.com/" },
          {
            name: "The Complete Web Developer",
            url: "https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/",
          },
          {
            name: "MERN Stack Tutorial",
            url: "https://www.youtube.com/watch?v=PBTYxXADG_k",
          },
          {
            name: "MEAN Stack Guide",
            url: "https://www.mongodb.com/mean-stack",
          },
          {
            name: "PostgreSQL Tutorial",
            url: "https://www.postgresqltutorial.com/",
          },
          { name: "MySQL Documentation", url: "https://dev.mysql.com/doc/" },
          {
            name: "Redis Documentation",
            url: "https://redis.io/documentation",
          },
          { name: "GraphQL Tutorial", url: "https://graphql.org/learn/" },
        ],
      },
      {
        title: "DevOps & Cloud",
        icon: FiCloud,
        description: "Docker, Kubernetes, AWS, CI/CD",
        resources: [
          { name: "Docker Documentation", url: "https://docs.docker.com/" },
          { name: "AWS Training", url: "https://aws.amazon.com/training/" },
          {
            name: "GitHub Actions",
            url: "https://github.com/features/actions",
          },
          { name: "Kubernetes.io", url: "https://kubernetes.io/docs/" },
          {
            name: "Google Cloud Platform",
            url: "https://cloud.google.com/docs",
          },
          {
            name: "Microsoft Azure",
            url: "https://docs.microsoft.com/en-us/azure/",
          },
          { name: "Jenkins User Guide", url: "https://www.jenkins.io/doc/" },
          {
            name: "Terraform Documentation",
            url: "https://www.terraform.io/docs",
          },
          { name: "Ansible Documentation", url: "https://docs.ansible.com/" },
          { name: "Prometheus Monitoring", url: "https://prometheus.io/docs/" },
        ],
      },
    ];

    const websites: Website[] = [
      {
        name: "freeCodeCamp",
        url: "https://www.freecodecamp.org/",
        description: "Free coding lessons and projects",
      },
      {
        name: "MDN Web Docs",
        url: "https://developer.mozilla.org/",
        description: "Comprehensive web development documentation",
      },
      {
        name: "W3Schools",
        url: "https://www.w3schools.com/",
        description: "Web development tutorials and references",
      },
      {
        name: "CSS-Tricks",
        url: "https://css-tricks.com/",
        description: "CSS tips, tricks, and techniques",
      },
      {
        name: "Dev.to",
        url: "https://dev.to/",
        description: "Developer community and articles",
      },
      {
        name: "Stack Overflow",
        url: "https://stackoverflow.com/",
        description: "Q&A platform for developers",
      },
      {
        name: "GitHub",
        url: "https://github.com/",
        description: "Code hosting and collaboration platform",
      },
      {
        name: "CodePen",
        url: "https://codepen.io/",
        description: "Front-end playground and code sharing",
      },
      {
        name: "JSFiddle",
        url: "https://jsfiddle.net/",
        description: "Online JavaScript editor and playground",
      },
      {
        name: "Replit",
        url: "https://replit.com/",
        description: "Online IDE for multiple programming languages",
      },
      {
        name: "Glitch",
        url: "https://glitch.com/",
        description: "Create and deploy web apps instantly",
      },
      {
        name: "CodeSandbox",
        url: "https://codesandbox.io/",
        description: "Online code editor for React, Vue, and more",
      },
      {
        name: "HackerRank",
        url: "https://www.hackerrank.com/",
        description: "Practice coding challenges and interviews",
      },
      {
        name: "LeetCode",
        url: "https://leetcode.com/",
        description: "Coding interview preparation platform",
      },
      {
        name: "Codewars",
        url: "https://www.codewars.com/",
        description: "Learn programming through coding challenges",
      },
      {
        name: "Exercism",
        url: "https://exercism.org/",
        description: "Learn programming languages through exercises",
      },
      {
        name: "Frontend Mentor",
        url: "https://www.frontendmentor.io/",
        description: "Real-world frontend challenges",
      },
      {
        name: "Real World",
        url: "https://realworld.io/",
        description: "Full-stack applications with real-world complexity",
      },
      {
        name: "App Ideas",
        url: "https://github.com/florinpop17/app-ideas",
        description: "Collection of app ideas for practice",
      },
      {
        name: "Build Your Own X",
        url: "https://github.com/danistefanovic/build-your-own-x",
        description: "Learn by building your own versions of popular tools",
      },
    ];

    const youtubeChannels: YouTubeChannel[] = [
      {
        name: "Anisul Islam",
        url: "https://youtube.com/@anisul-islam?si=DH7FOsGwP9uzm-SI",
        description: "Bangla & English programming tutorials",
      },
      {
        name: "freeCodeCamp.org",
        url: "https://www.youtube.com/@freecodecamp",
        description: "In-depth web dev tutorials and full courses",
      },
      {
        name: "Traversy Media",
        url: "https://www.youtube.com/@TraversyMedia",
        description:
          "Web development tutorials across HTML, CSS, JS, React, Node",
      },
      {
        name: "The Net Ninja",
        url: "https://www.youtube.com/@TheNetNinja",
        description: "Modern web development and framework playlists",
      },
      {
        name: "Web Dev Simplified",
        url: "https://www.youtube.com/@WebDevSimplified",
        description: "Clear and practical JS, React, TypeScript tutorials",
      },
      {
        name: "Academind",
        url: "https://www.youtube.com/@Academind",
        description: "Step‑by‑step front‑end and React courses",
      },
      {
        name: "Dev Ed",
        url: "https://www.youtube.com/@DevEd",
        description: "Creative coding and web design explained simply",
      },
      {
        name: "Kevin Powell",
        url: "https://www.youtube.com/@KevinPowell",
        description: "CSS deep dives: grid, flexbox, animations",
      },
      {
        name: "DesignCourse",
        url: "https://www.youtube.com/@DesignCourse",
        description: "UI/UX and front‑end design tutorials",
      },
      {
        name: "Fireship",
        url: "https://www.youtube.com/@Fireship",
        description: "Fast‑paced web dev and tech concept videos",
      },
      {
        name: "Codevolution",
        url: "https://www.youtube.com/@Codevolution",
        description: "React, JavaScript, TypeScript tutorials",
      },
      {
        name: "Programming with Mosh",
        url: "https://www.youtube.com/@programmingwithmosh",
        description: "Comprehensive programming and React courses",
      },
      {
        name: "ThePrimeagen",
        url: "https://www.youtube.com/@ThePrimeagen",
        description: "Performance‑focused engineering and frontend topics",
      },
      {
        name: "Andrew Burgess",
        url: "https://www.youtube.com/@AndrewBurgessTech",
        description: "Deep dives into TypeScript, JS patterns",
      },
      {
        name: "Theo – t3.gg",
        url: "https://www.youtube.com/@theo_t3",
        description: "Full‑stack TypeScript, React and architecture",
      },
      {
        name: "Matt Pocock",
        url: "https://www.youtube.com/@mattpocockuk",
        description: "TypeScript, frontend best practices",
      },
      {
        name: "Forrest Knight",
        url: "https://www.youtube.com/@forrestknight",
        description: "Frontend engineering, JS projects & workflows",
      },
      {
        name: "Coder Coder",
        url: "https://www.youtube.com/@CoderCoder",
        description: "Beginner to intermediate HTML/CSS/JS tutorials",
      },
      {
        name: "Josh Tried Coding",
        url: "https://www.youtube.com/@JoshTriedCoding",
        description: "Friendly JavaScript and frontend walkthroughs",
      },
      {
        name: "CFE.dev",
        url: "https://www.youtube.com/@cfedev",
        description: "Frontend‑focused conference videos and talks",
      },

      {
        name: "Jhankar Mahbub",
        url: "https://www.youtube.com/@JhankarMahbub",
        description: "Bangla tutorials: web design, JS, frontend basics",
      },
      {
        name: "Tamim Shahriar",
        url: "https://www.youtube.com/@TamimShahriar",
        description: "Bangla software dev tutorials, JS, Python, frontend",
      },
      {
        name: "Stack Learner",
        url: "https://www.youtube.com/@StackLearner",
        description: "Bangla JavaScript, React, careers & frontend topics",
      },
      {
        name: "Learn with Hasin Hayder",
        url: "https://www.youtube.com/@HasinHayder",
        description: "Bangla tutorials on Laravel, JS, frontend",
      },
      {
        name: "Sharif Chowdhury",
        url: "https://www.youtube.com/@SharifChowdhury",
        description: "Bangla tutorials: Python, JS contests & frontend",
      },
      {
        name: "Ania Kubów",
        url: "https://www.youtube.com/@AniaKubow",
        description: "Creative JavaScript and CSS game‑style tutorials",
      },
      {
        name: "Ana Tudor",
        url: "https://www.youtube.com/@AnaTudor",
        description: "Advanced CSS, animations and SVG",
      },
      {
        name: "Kent C. Dodds",
        url: "https://www.youtube.com/@kentcdodds",
        description: "JavaScript, React, testing and best practices",
      },
      {
        name: "Byte‑Sized JavaScript",
        url: "https://www.youtube.com/@ByteSizedJavaScript",
        description: "Short, focused screencasts on JavaScript topics",
      },
      {
        name: "Paul Lewis",
        url: "https://www.youtube.com/@PaulLewis",
        description: "Web components, JS, performance",
      },
      {
        name: "Mozilla Developer",
        url: "https://www.youtube.com/@MozillaDeveloper",
        description: "CSS, DevTools, accessibility tutorials",
      },
    ];

    const ebooks: Ebook[] = [
      {
        title: "Eloquent JavaScript",
        url: "https://eloquentjavascript.net/",
        description: "A modern introduction to programming",
        author: "Marijn Haverbeke",
        format: "PDF/Online",
      },
      {
        title: "You Don't Know JS",
        url: "https://github.com/getify/You-Dont-Know-JS",
        description: "Deep dive into JavaScript",
        author: "Kyle Simpson",
        format: "PDF/Online",
      },
      {
        title: "JavaScript Garden",
        url: "http://bonsaiben.github.io/javascript-garden/",
        description: "Documentation on JavaScript quirks and gotchas",
        author: "JavaScript Garden",
        format: "Online",
      },
      {
        title: "Dive Into HTML5",
        url: "http://diveintohtml5.info/",
        description: "Comprehensive guide to modern HTML5",
        author: "Mark Pilgrim",
        format: "PDF/Online",
      },
      {
        title: "HTML5 Canvas Deep Dive",
        url: "https://freefrontend.com/html5-canvas-ebook/",
        description: "Hands‑on guide to HTML Canvas",
        author: "Steve & Jeff Fulton",
        format: "PDF/Online",
      },
      {
        title: "The Magic of CSS",
        url: "https://adamschwartz.co/magic-of-css/",
        description: "Creative CSS techniques and animations",
        author: "Adam Schwartz",
        format: "Online",
      },
      {
        title: "DOM Enlightenment",
        url: "http://domenlightenment.com/",
        description: "In‑depth exploration of the DOM API",
        author: "Cameron McCormack",
        format: "Online",
      },
      {
        title: "Frontend Developer Handbook",
        url: "https://frontendmasters.com/books/front-end-handbook/",
        description: "Industry skills and tooling for frontend devs",
        author: "Front‑End Masters",
        format: "PDF/Online",
      },
      {
        title: "Front‑End Interview Handbook",
        url: "https://github.com/yangshun/front-end-interview-handbook",
        description: "Guide to frontend interview knowledge",
        author: "Yangshun Tay",
        format: "PDF/Online",
      },
      {
        title: "Web Audio API Book",
        url: "https://bocoup.com/webaudio/",
        description: "Learn interactive audio in the browser",
        author: "Boris Smus",
        format: "Online",
      },
      {
        title: "Pro Git",
        url: "https://git-scm.com/book/en/v2",
        description: "Complete guide to Git version control",
        author: "Scott Chacon & Ben Straub",
        format: "PDF/Online",
      },
      {
        title: "React Express",
        url: "https://react.express/",
        description: "Practical React guide and how‑tos",
        author: "React Express Team",
        format: "Online",
      },
      {
        title: "Learning Web Design",
        url: "https://mikkegoes.com/",
        description: "Comprehensive beginner web design reference",
        author: "Jennifer Niederst Robbins",
        format: "PDF/Online",
      },
      {
        title: "Adaptive Web Design",
        url: "https://kvnol.github.io/frontend-books/#adaptive-web-design",
        description: "Progressive enhancement for HTML/CSS",
        author: "Aaron Gustafson",
        format: "PDF/Online",
      },
      {
        title: "JavaScript Design Patterns",
        url: "https://github.com/addyosmani/javascript-design-patterns",
        description: "Classic and modern JS patterns explained",
        author: "Addy Osmani",
        format: "PDF/Online",
      },
      {
        title: "Programming JavaScript Applications",
        url: "https://github.com/nodeschool/programming-books/blob/master/javascript.md",
        description: "Build scalable JS apps for the browser",
        author: "Eric Elliott",
        format: "PDF/Online",
      },
      {
        title: "Web Visual Effects with CSS3",
        url: "https://freefrontend.com/css3-effects-ebook/",
        description: "Create practical CSS3 visual effects",
        author: "FreeFrontend Contributors",
        format: "PDF/Online",
      },
      {
        title: "MarkSheet",
        url: "https://freefrontend.com/marksheet-ebook/",
        description: "Step‑by‑step build your web page from scratch",
        author: "FreeFrontend Contributors",
        format: "PDF/Online",
      },
      {
        title: "JavaScript Garden",
        url: "https://github.com/bonsaiben/javascript-garden",
        description: "FAQ style guide to quirky JS behavior",
        author: "bonsaiben",
        format: "PDF/Online",
      },
      {
        title: "Everything You Need to Know About Front‑End Development",
        url: "https://www.researchgate.net/publication/369229180",
        description: "Step‑by‑step frontend fundamentals",
        author: "Krrish Ghindani",
        format: "PDF",
      },
      {
        title: "HTML5 for Publishers",
        url: "https://kvnol.github.io/frontend-books/#html5-for-publishers",
        description: "HTML5 guide aimed at publishing workflows",
        author: "Sanders Kleinfeld",
        format: "PDF/Online",
      },
      {
        title: "Bootstrap Guide",
        url: "https://kvnol.github.io/frontend-books/#bootstrap-3.3.5",
        description: "Documentation of Bootstrap 3.3.5 CSS framework",
        author: "Maujor",
        format: "PDF/Online",
      },
      {
        title: "Developing Backbone.js Applications",
        url: "https://github.com/addyosmani/backbone-fundamentals",
        description: "Building structured JS apps with Backbone.js",
        author: "Addy Osmani",
        format: "PDF/Online",
      },
      {
        title: "HTML & CSS is Hard",
        url: "https://booksoncode.com/html-css-is-hard",
        description: "Beginner‑friendly guide to HTML and CSS concepts",
        author: "BooksonCode",
        format: "PDF/Online",
      },
      {
        title: "Free Programming Books Collection",
        url: "https://github.com/EbookFoundation/free-programming-books",
        description: "Massive curated list of free programming e‑books",
        author: "EbookFoundation",
        format: "PDF/Online",
      },
      {
        title: "Free Web Development Books",
        url: "https://freefrontend.com/free-web-books/",
        description: "Curated free books on HTML, CSS, JS, and frameworks",
        author: "FreeFrontend",
        format: "Online",
      },
      {
        title: "CSS Animation Guide",
        url: "https://freefrontend.com/css-animation-ebook/",
        description: "Learn CSS animations with practical examples",
        author: "FreeFrontend",
        format: "PDF/Online",
      },
      {
        title: "JavaScript Books Collection",
        url: "https://freefrontend.com/javascript-books-collection/",
        description: "Collection of free JS books and tutorials",
        author: "FreeFrontend",
        format: "Online",
      },
      {
        title: "Frontend Mentor HTML/CSS Guide",
        url: "https://freefrontend.com/",
        description: "UI challenge-based guides in ebook form",
        author: "FreeFrontend",
        format: "Online",
      },
      {
        title: "React State Management walkthrough",
        url: "https://react.express/state-management",
        description: "Guide on React state, hooks and context",
        author: "React Express",
        format: "Online",
      },
      {
        title: "Progressive Web Apps",
        url: "https://web.dev/progressive-web-apps/",
        description: "Guide to building PWAs from Google",
        author: "web.dev",
        format: "Online",
      },
    ];

    const tools: Tool[] = [
      {
        name: "VS Code",
        url: "https://code.visualstudio.com/",
        description: "Popular code editor with extensive extensions",
        category: "Editor",
      },
      {
        name: "Git",
        url: "https://git-scm.com/",
        description: "Version control system",
        category: "Version Control",
      },
      {
        name: "Postman",
        url: "https://www.postman.com/",
        description: "API development and testing tool",
        category: "API",
      },
      {
        name: "Figma",
        url: "https://www.figma.com/",
        description: "Design and prototyping tool",
        category: "Design",
      },
      {
        name: "Chrome DevTools",
        url: "https://developers.google.com/web/tools/chrome-devtools",
        description: "Web development tools built into Chrome",
        category: "Development",
      },

      {
        name: "Vite",
        url: "https://vitejs.dev/",
        description: "Fast next-generation build tool and dev server",
        category: "Build Tool",
      },
      {
        name: "esbuild",
        url: "https://esbuild.github.io/",
        description: "Ultra‑fast JavaScript bundler and minifier",
        category: "Build Tool",
      },
      {
        name: "PostCSS",
        url: "https://postcss.org/",
        description: "Jet‑powered CSS processing with plugins",
        category: "CSS Tool",
      },
      {
        name: "Webpack",
        url: "https://webpack.js.org/",
        description: "Flexible module bundler with rich plugin ecosystem",
        category: "Build Tool",
      },
      {
        name: "Parcel",
        url: "https://parceljs.org/",
        description: "Zero‑configuration web app bundler",
        category: "Build Tool",
      },
      {
        name: "Gulp",
        url: "https://gulpjs.com/",
        description: "Streaming build system for automating tasks",
        category: "Build Tool",
      },
      {
        name: "BrowserSync",
        url: "https://browsersync.io/",
        description: "Live‑reload development server",
        category: "Productivity",
      },
      {
        name: "Figma",
        url: "https://www.figma.com/",
        description: "Collaborative UI design and prototyping tool",
        category: "Design",
      },
      {
        name: "LottieFiles",
        url: "https://lottiefiles.com/",
        description: "Web-friendly animation library and editor",
        category: "Design Tool",
      },
      {
        name: "Heroicons",
        url: "https://heroicons.com/",
        description: "High‑quality open‑source SVG icons",
        category: "Design",
      },
      {
        name: "Tailwind CSS IntelliSense",
        url: "https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss",
        description: "Autocomplete and linting for Tailwind CSS",
        category: "VS Code Extension",
      },
      {
        name: "React Developer Tools",
        url: "https://reactjs.org/community/debugging-tools.html",
        description: "Inspect and debug React component tree",
        category: "Browser Extension",
      },
      {
        name: "Vue.js DevTools",
        url: "https://github.com/vuejs/vue-devtools",
        description: "Debug Vue applications in browser devtools",
        category: "Browser Extension",
      },
      {
        name: "Redux DevTools",
        url: "https://github.com/reduxjs/redux-devtools",
        description: "Time‑travel debugging for Redux state",
        category: "Browser Extension",
      },
      {
        name: "Angular DevTools",
        url: "https://angular.io/guide/devtools",
        description: "Profiling and debugging for Angular apps",
        category: "Browser Extension",
      },
      {
        name: "Web Developer Toolbar",
        url: "https://chrispederick.com/web-developer/",
        description: "Browser extension with utilities for DOM, CSS, forms",
        category: "Browser Extension",
      },
      {
        name: "ColorZilla",
        url: "https://www.colorzilla.com/chrome/",
        description: "Color picker and eyedropper extension",
        category: "Browser Extension",
      },
      {
        name: "Wappalyzer",
        url: "https://www.wappalyzer.com/",
        description: "Detect technologies used on websites",
        category: "Browser Extension",
      },
      {
        name: "uBlock Origin",
        url: "https://github.com/gorhill/uBlock",
        description: "Efficient content blocker and performance aid",
        category: "Browser Extension",
      },
      {
        name: "Live Server (VS Code)",
        url: "https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer",
        description: "Launch a local development server with live reload",
        category: "VS Code Extension",
      },
      {
        name: "ESLint",
        url: "https://eslint.org/",
        description: "Pluggable linting tool for JavaScript and TypeScript",
        category: "Code Quality",
      },
      {
        name: "Prettier",
        url: "https://prettier.io/",
        description: "Opinionated code formatter supporting many languages",
        category: "Code Quality",
      },
      {
        name: "Stylelint",
        url: "https://stylelint.io/",
        description: "Modern CSS linter to enforce consistent style",
        category: "Code Quality",
      },
      {
        name: "GitLens",
        url: "https://gitlens.amod.io/",
        description: "Powerful Git extension for Visual Studio Code",
        category: "VS Code Extension",
      },
      {
        name: "Path Intellisense",
        url: "https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense",
        description: "Auto-complete filenames in VS Code",
        category: "VS Code Extension",
      },
      {
        name: "Better Comments",
        url: "https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments",
        description: "Organize comments with color-coded tags",
        category: "VS Code Extension",
      },
      {
        name: "Live Share",
        url: "https://visualstudio.microsoft.com/services/live-share/",
        description: "Real-time collaborative editing in VS Code",
        category: "Productivity",
      },
      {
        name: "PostCSS",
        url: "https://postcss.org/",
        description: "Transformer for CSS with JavaScript plugins",
        category: "CSS Tool",
      },
      {
        name: "Browserslist",
        url: "https://github.com/browserslist/browserslist",
        description: "Specify target browsers for CSS/JS tooling",
        category: "Performance",
      },
      {
        name: "Autoprefixer",
        url: "https://github.com/postcss/autoprefixer",
        description: "Add vendor prefixes to CSS rules automatically",
        category: "CSS Tool",
      },
      {
        name: "HTTPie",
        url: "https://httpie.io/",
        description: "Friendly CLI for HTTP requests and APIs",
        category: "API Tool",
      },
      {
        name: "Insomnia",
        url: "https://insomnia.rest/",
        description: "Cross‑platform API client and GraphQL testing tool",
        category: "API Tool",
      },
      {
        name: "Lighthouse (Chrome DevTools)",
        url: "https://developers.google.com/web/tools/lighthouse",
        description: "Audit performance, accessibility, and SEO",
        category: "Browser Extension",
      },
      {
        name: "PageSpeed Insights",
        url: "https://developers.google.com/speed/pagespeed/insights/",
        description: "Google tool to measure page performance",
        category: "Performance Tool",
      },
      {
        name: "Design Systems",
        url: "https://styleguides.io/",
        description: "Frameworks for consistent UI development",
        category: "Design",
      },
      {
        name: "Storybook",
        url: "https://storybook.js.org/",
        description: "UI component development environment",
        category: "Tool",
      },
      {
        name: "Chromatic",
        url: "https://www.chromatic.com/",
        description: "Visual testing and review for UI components",
        category: "Tool",
      },
      {
        name: "Eclipse Theia",
        url: "https://theia-ide.org/",
        description: "Extensible IDE framework—web or desktop",
        category: "Editor",
      },
      {
        name: "Sublime Text",
        url: "https://www.sublimetext.com/",
        description: "Lightweight, fast, and feature‑rich editor",
        category: "Editor",
      },
      {
        name: "Brackets",
        url: "https://brackets.io/",
        description: "Live editing for HTML, CSS & JS—web design focused",
        category: "Editor",
      },
    ];

    const articles: Article[] = [
      {
        title: "Web Accessibility Basics",
        url: "https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility",
        description: "Introduction to accessibility principles for the web",
        author: "MDN",
        date: "2024",
      },
      {
        title: "Semantic HTML",
        url: "https://developer.mozilla.org/en-US/docs/Glossary/Semantics",
        description: "Why semantic HTML matters and how to use it",
        author: "MDN",
        date: "2024",
      },
      {
        title: "Responsive Web Design Basics",
        url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",
        description: "Core techniques for responsive CSS layout",
        author: "MDN",
        date: "2024",
      },
      {
        title: "CSS Flexbox Guide",
        url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/",
        description: "Comprehensive Flexbox guide with examples",
        author: "CSS-Tricks",
        date: "2024",
      },
      {
        title: "Using CSS Variables",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
        description: "Define and use custom properties in CSS",
        author: "MDN",
        date: "2024",
      },
      {
        title: "Grid vs Flexbox Comparison",
        url: "https://css-tricks.com/css-grid-vs-flexbox/",
        description: "When to use Grid and when Flexbox",
        author: "CSS-Tricks",
        date: "2024",
      },
      {
        title: "Introduction to CSS Transitions",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions",
        description: "Animate CSS property changes",
        author: "MDN",
        date: "2024",
      },
      {
        title: "CSS Animations Guide",
        url: "https://css-tricks.com/snippets/css/keyframe-animation-syntax/",
        description: "Creating animations with @keyframes",
        author: "CSS-Tricks",
        date: "2024",
      },
      {
        title: "Understanding the CSS Cascade",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade",
        description: "How CSS rules are applied and overridden",
        author: "MDN",
        date: "2024",
      },
      {
        title: "Writing Maintainable CSS",
        url: "https://css-tricks.com/methods-for-organizing-css/",
        description: "Organization methodologies for CSS code",
        author: "CSS-Tricks",
        date: "2024",
      },
      {
        title: "JavaScript Event Loop Explained",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop",
        description: "How the JS event loop works under the hood",
        author: "MDN",
        date: "2024",
      },
      {
        title: "Deep Dive into JavaScript Promises",
        url: "https://javascript.info/promise-basics",
        description: "Guide to working effectively with Promises",
        author: "JavaScript.info",
        date: "2024",
      },
      {
        title: "Async/await in JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await",
        description: "Writing cleaner asynchronous code",
        author: "MDN",
        date: "2024",
      },
      {
        title: "DOM Manipulation Best Practices",
        url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction",
        description: "Interacting with the DOM efficiently",
        author: "MDN",
        date: "2024",
      },
      {
        title: "JavaScript Memory Management",
        url: "https://www.freecodecamp.org/news/javascript-memory-management/",
        description: "Understanding garbage collection and memory leaks",
        author: "freeCodeCamp",
        date: "2024",
      },
      {
        title: "JavaScript Closures Explained",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures",
        description: "How closures work and why they're useful",
        author: "MDN",
        date: "2024",
      },
      {
        title: "Debounce and Throttle Explained",
        url: "https://css-tricks.com/debouncing-throttling-explained-examples/",
        description: "Performance techniques for event handlers",
        author: "CSS-Tricks",
        date: "2024",
      },
      {
        title: "Lazy Loading Images",
        url: "https://web.dev/lazy-loading-best-practices/",
        description: "Improve performance by lazy‑loading resources",
        author: "web.dev",
        date: "2024",
      },
      {
        title: "Image Optimization Techniques",
        url: "https://web.dev/fast/#optimize-your-images",
        description: "Best practices to serve high‑quality optimized images",
        author: "web.dev",
        date: "2024",
      },
      {
        title: "Critical Rendering Path",
        url: "https://developers.google.com/web/fundamentals/performance/critical-rendering-path",
        description: "How browsers render pages and how to optimize it",
        author: "web.dev",
        date: "2024",
      },
      {
        title: "Preloading and Prefetching Resources",
        url: "https://web.dev/uses-rel-preload/",
        description:
          "Optimize resource loading with rel='preload' and 'prefetch'",
        author: "web.dev",
        date: "2024",
      },
      {
        title: "Progressive Web App Basics",
        url: "https://web.dev/progressive-web-apps/",
        description: "Make your web app installable and offline-capable",
        author: "web.dev",
        date: "2024",
      },
      {
        title: "Service Workers in PWAs",
        url: "https://developers.google.com/web/fundamentals/primers/service-workers",
        description: "Using service workers for caching and offline support",
        author: "Google Developers",
        date: "2024",
      },
      {
        title: "React Official Cheatsheet",
        url: "https://react.dev/cheatsheet",
        description: "Quick reference for React APIs and concepts",
        author: "React Team",
        date: "2024",
      },
      {
        title: "React Rendering Patterns",
        url: "https://react.dev/learn/rendering-elements",
        description: "How rendering works in React and how to optimize",
        author: "React Team",
        date: "2024",
      },
      {
        title: "State Management with React Hooks",
        url: "https://react.dev/learn/state-a-components-state",
        description: "Manage state using useState and useReducer",
        author: "React Team",
        date: "2024",
      },
      {
        title: "React Context API",
        url: "https://react.dev/learn/passing-data-deeply-with-context",
        description: "Share state across components without props drilling",
        author: "React Team",
        date: "2024",
      },
      {
        title: "React Performance Optimization",
        url: "https://react.dev/learn/re-render-and-optimization",
        description: "Techniques to avoid unnecessary renders",
        author: "React Team",
        date: "2024",
      },
      {
        title: "CSS-in-JS Overview",
        url: "https://css-tricks.com/css-in-js/",
        description: "Pros and cons of CSS-in-JS styling methods",
        author: "CSS-Tricks",
        date: "2024",
      },
      {
        title: "Component Styling Techniques",
        url: "https://styled-components.com/docs/basics",
        description: "Using styled-components for React UI styling",
        author: "styled-components",
        date: "2024",
      },
      {
        title: "State Management with Redux",
        url: "https://redux.js.org/introduction/getting-started",
        description: "Redux fundamentals for predictable state",
        author: "Redux Team",
        date: "2024",
      },
      {
        title: "Testing React Components",
        url: "https://testing-library.com/docs/react-testing-library/intro/",
        description: "Best practices with React Testing Library",
        author: "Testing Library",
        date: "2024",
      },
      {
        title: "Accessibility in React",
        url: "https://react.dev/learn/accessibility",
        description: "Implement accessible components in React",
        author: "React Team",
        date: "2024",
      },
      {
        title: "Internationalization in React",
        url: "https://react.dev/learn/internationalization",
        description: "Support multiple languages in React apps",
        author: "React Team",
        date: "2024",
      },
      {
        title: "Front-End Build Tools Overview",
        url: "https://web.dev/ready/overview-tools/",
        description: "Understanding bundlers, linters, and task runners",
        author: "web.dev",
        date: "2024",
      },
      {
        title: "Setting Up Webpack",
        url: "https://webpack.js.org/concepts/",
        description: "Core concepts of module bundling with Webpack",
        author: "Webpack Team",
        date: "2024",
      },
      {
        title: "Vite as a Modern Bundler",
        url: "https://vitejs.dev/guide/",
        description: "Quick and efficient development workflow",
        author: "Vite Team",
        date: "2024",
      },
      {
        title: "Linting JavaScript with ESLint",
        url: "https://eslint.org/docs/latest/",
        description: "Automate code quality checks in JS",
        author: "ESLint Team",
        date: "2024",
      },
      {
        title: "Styling with PostCSS",
        url: "https://postcss.org/",
        description: "Transform CSS with JavaScript plugins",
        author: "PostCSS",
        date: "2024",
      },
    ];

    const projects: Project[] = [
      {
        title: "Portfolio Website",
        url: "https://github.com/example/portfolio-site",
        description: "Create a personal portfolio to showcase your projects",
        difficulty: "Beginner",
        tech: ["HTML", "CSS", "JavaScript"],
      },
      {
        title: "Blog Template",
        url: "https://github.com/example/blog-template",
        description: "Responsive blog layout with posts and sidebar",
        difficulty: "Beginner",
        tech: ["HTML", "CSS"],
      },
      {
        title: "Landing Page",
        url: "https://github.com/example/landing-page",
        description: "Design a beautiful marketing landing page",
        difficulty: "Beginner",
        tech: ["HTML", "CSS"],
      },
      {
        title: "Form Validation",
        url: "https://github.com/example/form-validation",
        description: "Create a form with custom input validation",
        difficulty: "Beginner",
        tech: ["HTML", "CSS", "JavaScript"],
      },
      {
        title: "Calculator App",
        url: "https://github.com/example/calculator",
        description: "Build a calculator with basic arithmetic operations",
        difficulty: "Beginner",
        tech: ["HTML", "CSS", "JavaScript"],
      },
      {
        title: "Countdown Timer",
        url: "https://github.com/example/countdown-timer",
        description: "Countdown to a specific date or event",
        difficulty: "Beginner",
        tech: ["HTML", "CSS", "JavaScript"],
      },
      {
        title: "Quiz App",
        url: "https://github.com/example/quiz-app",
        description: "Build a multiple-choice quiz app",
        difficulty: "Beginner",
        tech: ["HTML", "CSS", "JavaScript"],
      },
      {
        title: "Image Slider",
        url: "https://github.com/example/image-slider",
        description: "Create a simple carousel/slider for images",
        difficulty: "Beginner",
        tech: ["HTML", "CSS", "JavaScript"],
      },
      {
        title: "Tip Calculator",
        url: "https://github.com/example/tip-calculator",
        description: "Calculate tips and split bills",
        difficulty: "Beginner",
        tech: ["HTML", "CSS", "JavaScript"],
      },
      {
        title: "Accordion Component",
        url: "https://github.com/example/accordion-component",
        description: "Collapsible FAQ or content sections",
        difficulty: "Beginner",
        tech: ["HTML", "CSS", "JavaScript"],
      },
      {
        title: "Product Card UI",
        url: "https://github.com/example/product-card",
        description: "Design a responsive product card layout",
        difficulty: "Beginner",
        tech: ["HTML", "CSS"],
      },
      {
        title: "Modal Popup",
        url: "https://github.com/example/modal-popup",
        description: "Show and hide modals using JavaScript",
        difficulty: "Beginner",
        tech: ["HTML", "CSS", "JavaScript"],
      },
      {
        title: "Image Gallery",
        url: "https://github.com/example/image-gallery",
        description: "Create a lightbox image gallery",
        difficulty: "Intermediate",
        tech: ["HTML", "CSS", "JavaScript"],
      },
      {
        title: "Weather App",
        url: "https://github.com/example/weather-app",
        description: "Create a weather application with API integration",
        difficulty: "Intermediate",
        tech: ["React", "API", "CSS"],
      },
      {
        title: "Movie Search App",
        url: "https://github.com/example/movie-app",
        description: "Search movies using a public API",
        difficulty: "Intermediate",
        tech: ["React", "API", "CSS"],
      },
      {
        title: "GitHub Profile Finder",
        url: "https://github.com/example/github-profile-finder",
        description: "Search GitHub users and display details",
        difficulty: "Intermediate",
        tech: ["React", "API", "Tailwind CSS"],
      },
      {
        title: "Notes App",
        url: "https://github.com/example/notes-app",
        description: "Create, edit, and delete notes",
        difficulty: "Intermediate",
        tech: ["React", "JavaScript", "CSS"],
      },
      {
        title: "Currency Converter",
        url: "https://github.com/example/currency-converter",
        description: "Convert currency using a real-time API",
        difficulty: "Intermediate",
        tech: ["JavaScript", "API", "HTML", "CSS"],
      },
      {
        title: "Expense Tracker",
        url: "https://github.com/example/expense-tracker",
        description: "Track income and expenses visually",
        difficulty: "Intermediate",
        tech: ["React", "Chart.js", "CSS"],
      },
      {
        title: "Blog CMS (Frontend Only)",
        url: "https://github.com/example/blog-cms-ui",
        description: "Create a blog front-end with dummy content",
        difficulty: "Intermediate",
        tech: ["React", "CSS", "Markdown"],
      },
      {
        title: "Recipe Finder App",
        url: "https://github.com/example/recipe-app",
        description: "Search recipes using a food API",
        difficulty: "Intermediate",
        tech: ["React", "API", "CSS"],
      },
      {
        title: "Portfolio with Dark Mode",
        url: "https://github.com/example/darkmode-portfolio",
        description: "A personal portfolio with theme toggle",
        difficulty: "Intermediate",
        tech: ["React", "CSS", "JavaScript"],
      },
      {
        title: "Blog with Markdown Rendering",
        url: "https://github.com/example/markdown-blog",
        description: "Build a blog using markdown files",
        difficulty: "Intermediate",
        tech: ["React", "Markdown", "CSS"],
      },
      {
        title: "News Aggregator",
        url: "https://github.com/example/news-app",
        description: "Display latest news using a public API",
        difficulty: "Intermediate",
        tech: ["React", "API", "Bootstrap"],
      },
      {
        title: "Typing Speed Test",
        url: "https://github.com/example/typing-speed-test",
        description: "Test your typing speed with a timer",
        difficulty: "Intermediate",
        tech: ["JavaScript", "HTML", "CSS"],
      },
      {
        title: "Markdown Previewer",
        url: "https://github.com/example/markdown-previewer",
        description: "Convert markdown text to HTML",
        difficulty: "Intermediate",
        tech: ["React", "Markdown", "CSS"],
      },
      {
        title: "Clock App",
        url: "https://github.com/example/clock-app",
        description: "Digital and analog clock display",
        difficulty: "Intermediate",
        tech: ["JavaScript", "CSS", "HTML"],
      },
      {
        title: "To-Do List with Firebase",
        url: "https://github.com/example/todo-firebase",
        description: "Save tasks using Firebase as a backend",
        difficulty: "Advanced",
        tech: ["React", "Firebase", "CSS"],
      },
      {
        title: "Chat UI App",
        url: "https://github.com/example/chat-ui",
        description: "Responsive chat interface with message threads",
        difficulty: "Advanced",
        tech: ["React", "Tailwind CSS", "JavaScript"],
      },
      {
        title: "E-commerce Site",
        url: "https://github.com/example/ecommerce",
        description: "Full-stack e-commerce application",
        difficulty: "Advanced",
        tech: ["React", "Node.js", "MongoDB"],
      },
      {
        title: "Netflix Clone",
        url: "https://github.com/example/netflix-clone",
        description: "Clone Netflix UI with real movie data",
        difficulty: "Advanced",
        tech: ["React", "TMDB API", "Firebase"],
      },
      {
        title: "Music Player App",
        url: "https://github.com/example/music-player",
        description: "Play, pause and manage a list of songs",
        difficulty: "Advanced",
        tech: ["React", "HTML5 Audio", "CSS"],
      },
      {
        title: "Video Streaming UI",
        url: "https://github.com/example/video-stream-ui",
        description: "Frontend for a video streaming site",
        difficulty: "Advanced",
        tech: ["React", "CSS", "JavaScript"],
      },
      {
        title: "Weather Dashboard",
        url: "https://github.com/example/weather-dashboard",
        description: "Advanced weather app with charts and forecasts",
        difficulty: "Advanced",
        tech: ["React", "Chart.js", "API"],
      },
      {
        title: "Social Media Dashboard",
        url: "https://github.com/example/social-dashboard",
        description: "Track analytics across social platforms",
        difficulty: "Advanced",
        tech: ["React", "API", "Tailwind CSS"],
      },
      {
        title: "Task Manager",
        url: "https://github.com/example/task-manager",
        description: "Create and manage multiple task lists",
        difficulty: "Intermediate",
        tech: ["React", "Redux", "CSS"],
      },
      {
        title: "Real-time Chat App UI",
        url: "https://github.com/example/chat-app-ui",
        description: "Frontend for a real-time messaging app",
        difficulty: "Advanced",
        tech: ["React", "Socket.io", "Tailwind CSS"],
      },
      {
        title: "Instagram UI Clone",
        url: "https://github.com/example/instagram-ui",
        description: "Clone the Instagram interface",
        difficulty: "Advanced",
        tech: ["React", "CSS Modules", "Firebase"],
      },
      {
        title: "Travel Landing Page",
        url: "https://github.com/example/travel-page",
        description: "Create a beautiful landing page for a travel website",
        difficulty: "Beginner",
        tech: ["HTML", "CSS"],
      },
      {
        title: "FAQ Accordion",
        url: "https://github.com/example/faq-accordion",
        description: "Collapsible FAQs section",
        difficulty: "Beginner",
        tech: ["HTML", "CSS", "JavaScript"],
      },
    ];

    const githubRepos: GithubRepo[] = [
      {
        name: "30 Seconds of Code",
        url: "https://github.com/30-seconds/30-seconds-of-code",
        description: "Short JavaScript code snippets for all levels",
        stars: 120000,
        language: "JavaScript",
      },
      {
        name: "Front-End Checklist",
        url: "https://github.com/thedaviddias/Front-End-Checklist",
        description:
          "A list of all elements to consider for a frontend project",
        stars: 66000,
        language: "Markdown",
      },
      {
        name: "Frontend Developer Interview Questions",
        url: "https://github.com/thedaviddias/Front-end-Developer-Interview-Questions",
        description:
          "A list of helpful interview questions for frontend developers",
        stars: 60000,
        language: "Markdown",
      },
      {
        name: "Public APIs",
        url: "https://github.com/public-apis/public-apis",
        description: "A collective list of free APIs for development",
        stars: 270000,
        language: "Python",
      },
      {
        name: "You Don't Know JS",
        url: "https://github.com/getify/You-Dont-Know-JS",
        description: "Deep dive into JavaScript concepts",
        stars: 175000,
        language: "JavaScript",
      },
      {
        name: "JavaScript Algorithms",
        url: "https://github.com/trekhleb/javascript-algorithms",
        description: "Algorithms and data structures implemented in JavaScript",
        stars: 190000,
        language: "JavaScript",
      },
      {
        name: "Clean Code JavaScript",
        url: "https://github.com/ryanmcdermott/clean-code-javascript",
        description: "Adaptation of Clean Code for JavaScript",
        stars: 90000,
        language: "JavaScript",
      },
      {
        name: "Tech Interview Handbook",
        url: "https://github.com/yangshun/tech-interview-handbook",
        description: "Curated interview preparation materials",
        stars: 98000,
        language: "JavaScript",
      },
      {
        name: "System Design Primer",
        url: "https://github.com/donnemartin/system-design-primer",
        description: "Learn how to design large-scale systems",
        stars: 250000,
        language: "Python",
      },
      {
        name: "Awesome Design Systems",
        url: "https://github.com/alexpate/awesome-design-systems",
        description: "A collection of design systems and pattern libraries",
        stars: 16000,
        language: "Markdown",
      },
      {
        name: "Project-Based Learning",
        url: "https://github.com/practical-tutorials/project-based-learning",
        description: "A curated list of project-based tutorials",
        stars: 120000,
        language: "Markdown",
      },
      {
        name: "Build Your Own React",
        url: "https://github.com/pomber/didact",
        description: "A simplified version of React",
        stars: 6000,
        language: "JavaScript",
      },
      {
        name: "EbookFoundation/free-courses-en",
        url: "https://github.com/EbookFoundation/free-courses-en",
        description: "Free online programming courses",
        stars: 55000,
        language: "Markdown",
      },
      {
        name: "30 Days of JavaScript",
        url: "https://github.com/Asabeneh/30-Days-Of-JavaScript",
        description: "30 days challenge to learn JavaScript",
        stars: 40000,
        language: "JavaScript",
      },
      {
        name: "Design Resources for Developers",
        url: "https://github.com/bradtraversy/design-resources-for-developers",
        description: "Curated list of design and UI resources",
        stars: 55000,
        language: "Markdown",
      },
      {
        name: "Awesome React",
        url: "https://github.com/enaqx/awesome-react",
        description: "A collection of useful React resources",
        stars: 60000,
        language: "Markdown",
      },
      {
        name: "HTML5 Boilerplate",
        url: "https://github.com/h5bp/html5-boilerplate",
        description: "A professional front-end template",
        stars: 55000,
        language: "HTML",
      },
      {
        name: "React Cheatsheet",
        url: "https://github.com/LeCoupa/awesome-cheatsheets",
        description:
          "Cheatsheets for popular programming languages including React",
        stars: 35000,
        language: "Markdown",
      },
      {
        name: "React Native Express",
        url: "https://github.com/dabbott/react-native-express",
        description: "Interactive guide to React Native",
        stars: 16000,
        language: "JavaScript",
      },
      {
        name: "Airbnb JavaScript Style Guide",
        url: "https://github.com/airbnb/javascript",
        description: "JavaScript style guide by Airbnb",
        stars: 140000,
        language: "JavaScript",
      },
      {
        name: "Awesome CSS",
        url: "https://github.com/awesome-css-group/awesome-css",
        description: "A curated list of CSS frameworks and tools",
        stars: 7000,
        language: "Markdown",
      },
      {
        name: "Awesome Web Performance",
        url: "https://github.com/davidsonfellipe/awesome-wpo",
        description: "Web performance optimization resources",
        stars: 8000,
        language: "Markdown",
      },
      {
        name: "Node.js Best Practices",
        url: "https://github.com/goldbergyoni/nodebestpractices",
        description: "Best practices for Node.js developers",
        stars: 95000,
        language: "JavaScript",
      },
      {
        name: "Awesome VS Code",
        url: "https://github.com/viatsko/awesome-vscode",
        description: "List of amazing VS Code extensions and resources",
        stars: 25000,
        language: "Markdown",
      },
      {
        name: "JavaScript Questions",
        url: "https://github.com/lydiahallie/javascript-questions",
        description: "A long list of advanced JavaScript questions and answers",
        stars: 55000,
        language: "JavaScript",
      },
      {
        name: "CSS Protips",
        url: "https://github.com/AllThingsSmitty/css-protips",
        description: "Tips to improve your CSS skills",
        stars: 25000,
        language: "CSS",
      },
      {
        name: "Awesome Tailwind CSS",
        url: "https://github.com/aniftyco/awesome-tailwindcss",
        description: "Useful Tailwind CSS resources and plugins",
        stars: 14000,
        language: "Markdown",
      },
      {
        name: "RealWorld Example Apps",
        url: "https://github.com/gothinkster/realworld",
        description: "Fullstack Medium.com clone in different stacks",
        stars: 77000,
        language: "TypeScript",
      },
      {
        name: "JavaScript30",
        url: "https://github.com/wesbos/JavaScript30",
        description: "30-day vanilla JS coding challenge",
        stars: 22000,
        language: "JavaScript",
      },
      {
        name: "Developer Roadmap",
        url: "https://github.com/kamranahmedse/developer-roadmap",
        description: "Roadmaps to become a developer in 2025",
        stars: 300000,
        language: "TypeScript",
      },
      {
        name: "Node.js Design Patterns",
        url: "https://github.com/PacktPublishing/Node.js-Design-Patterns-Third-Edition",
        description: "Code from the Node.js Design Patterns book",
        stars: 2000,
        language: "JavaScript",
      },
      {
        name: "React TypeScript Cheatsheets",
        url: "https://github.com/typescript-cheatsheets/react",
        description: "Cheatsheets for React and TypeScript development",
        stars: 45000,
        language: "TypeScript",
      },
      {
        name: "Awesome PWAs",
        url: "https://github.com/hemanth/awesome-pwa",
        description: "Awesome list of Progressive Web Apps",
        stars: 4500,
        language: "Markdown",
      },
      {
        name: "React Redux RealWorld Example",
        url: "https://github.com/gothinkster/react-redux-realworld-example-app",
        description: "Real-world React + Redux application architecture",
        stars: 6000,
        language: "JavaScript",
      },
    ];

    const externalResources: ExternalResource[] = [
      {
        name: "freeCodeCamp",
        url: "https://www.freecodecamp.org/",
        description: "Learn to code for free with hands-on projects",
        category: "Learning",
      },
      {
        name: "Frontend Mentor",
        url: "https://www.frontendmentor.io/",
        description: "Practice real-world HTML, CSS, and JavaScript challenges",
        category: "Learning",
      },
      {
        name: "MDN Web Docs",
        url: "https://developer.mozilla.org/",
        description: "Comprehensive documentation for web developers",
        category: "Documentation",
      },
      {
        name: "W3Schools",
        url: "https://www.w3schools.com/",
        description: "Tutorials and references for HTML, CSS, JS, and more",
        category: "Learning",
      },
      {
        name: "CSS-Tricks",
        url: "https://css-tricks.com/",
        description:
          "Tips, tricks, and techniques on using CSS and front-end tools",
        category: "Documentation",
      },
      {
        name: "Scrimba",
        url: "https://scrimba.com/",
        description: "Interactive front-end development courses",
        category: "Learning",
      },
      {
        name: "The Odin Project",
        url: "https://www.theodinproject.com/",
        description:
          "Free full-stack curriculum with a strong front-end foundation",
        category: "Learning",
      },
      {
        name: "Coursera",
        url: "https://www.coursera.org/",
        description: "University-level courses including front-end development",
        category: "Learning",
      },
      {
        name: "Frontend Roadmap",
        url: "https://roadmap.sh/frontend",
        description: "Step-by-step guide to becoming a frontend developer",
        category: "Learning",
      },
      {
        name: "JavaScript.info",
        url: "https://javascript.info/",
        description: "Modern JavaScript tutorials from basics to advanced",
        category: "Documentation",
      },
      {
        name: "React Official Docs",
        url: "https://reactjs.org/docs/getting-started.html",
        description: "Official documentation for React",
        category: "Documentation",
      },
      {
        name: "CodePen",
        url: "https://codepen.io/",
        description: "Front-end code playground to experiment and share",
        category: "Tool",
      },
      {
        name: "JSFiddle",
        url: "https://jsfiddle.net/",
        description: "Online editor for HTML, CSS, and JavaScript",
        category: "Tool",
      },
      {
        name: "CodeSandbox",
        url: "https://codesandbox.io/",
        description: "Online editor tailored for modern web development",
        category: "Tool",
      },
      {
        name: "StackBlitz",
        url: "https://stackblitz.com/",
        description: "Instant web development environment",
        category: "Tool",
      },
      {
        name: "DevDocs",
        url: "https://devdocs.io/",
        description: "API documentation for frontend technologies in one place",
        category: "Documentation",
      },
      {
        name: "Can I use",
        url: "https://caniuse.com/",
        description: "Browser support tables for modern web technologies",
        category: "Tool",
      },
      {
        name: "CSS Battle",
        url: "https://cssbattle.dev/",
        description: "Gamified platform to improve your CSS skills",
        category: "Learning",
      },
      {
        name: "HTML5 UP",
        url: "https://html5up.net/",
        description: "Responsive HTML5 templates for learning and use",
        category: "Tool",
      },
      {
        name: "Dribbble",
        url: "https://dribbble.com/",
        description: "Inspiration for modern UI/UX design",
        category: "Design",
      },
      {
        name: "Behance",
        url: "https://www.behance.net/",
        description: "Creative portfolios and frontend design ideas",
        category: "Design",
      },
      {
        name: "UI Design Daily",
        url: "https://uidesigndaily.com/",
        description: "Daily UI designs for inspiration",
        category: "Design",
      },
      {
        name: "LottieFiles",
        url: "https://lottiefiles.com/",
        description: "Lightweight animation library for web and mobile",
        category: "Tool",
      },
      {
        name: "Animista",
        url: "https://animista.net/",
        description: "CSS animation library and playground",
        category: "Tool",
      },
      {
        name: "Heroicons",
        url: "https://heroicons.com/",
        description: "Free MIT-licensed high-quality SVG icons",
        category: "Tool",
      },
      {
        name: "Feather Icons",
        url: "https://feathericons.com/",
        description: "Beautiful open-source icons for web projects",
        category: "Tool",
      },
      {
        name: "Figma",
        url: "https://www.figma.com/",
        description: "Collaborative UI design tool for frontend planning",
        category: "Design",
      },
      {
        name: "UIverse",
        url: "https://uiverse.io/",
        description: "Community-driven UI components in HTML, CSS, JS",
        category: "Tool",
      },
      {
        name: "Tailwind CSS Docs",
        url: "https://tailwindcss.com/docs",
        description: "Utility-first CSS framework documentation",
        category: "Documentation",
      },
      {
        name: "ShadCN UI",
        url: "https://ui.shadcn.com/",
        description: "Beautifully designed components built with Tailwind CSS",
        category: "Tool",
      },
      {
        name: "Web.dev",
        url: "https://web.dev/",
        description: "Google's guide to build performant, modern websites",
        category: "Documentation",
      },
      {
        name: "Learn Web Development (MDN)",
        url: "https://developer.mozilla.org/en-US/docs/Learn",
        description: "MDN's complete beginner-friendly frontend guide",
        category: "Learning",
      },
      {
        name: "CSS Grid Garden",
        url: "https://cssgridgarden.com/",
        description: "Game to learn CSS Grid in a fun way",
        category: "Learning",
      },
      {
        name: "Flexbox Froggy",
        url: "https://flexboxfroggy.com/",
        description: "Game to practice CSS Flexbox concepts",
        category: "Learning",
      },
      {
        name: "PurgeCSS",
        url: "https://purgecss.com/",
        description: "Remove unused CSS to optimize performance",
        category: "Tool",
      },
      {
        name: "UI Gradient",
        url: "https://uigradients.com/",
        description: "Collection of beautiful gradient backgrounds",
        category: "Design",
      },
    ];

    const notes: Note[] = [
      {
        title: "JavaScript Fundamentals",
        content: "Variables, functions, objects, and arrays in JavaScript",
        tags: ["JavaScript", "Basics"],
        date: "2024-01-15",
      },
      {
        title: "React Hooks",
        content: "useState, useEffect, useContext, and custom hooks",
        tags: ["React", "Hooks"],
        date: "2024-01-20",
      },
      {
        title: "CSS Grid vs Flexbox",
        content: "When to use Grid vs Flexbox for layouts",
        tags: ["CSS", "Layout"],
        date: "2024-01-25",
      },
      {
        title: "Semantic HTML Tags",
        content: "Improve accessibility and SEO with semantic elements",
        tags: ["HTML", "Accessibility"],
        date: "2024-01-28",
      },
      {
        title: "Flexbox vs Grid",
        content: "Choosing the right layout technique",
        tags: ["CSS", "Layout"],
        date: "2024-01-30",
      },
      {
        title: "JavaScript Hoisting",
        content: "Understand variable and function hoisting",
        tags: ["JavaScript", "Concepts"],
        date: "2024-02-02",
      },
      {
        title: "DOM Manipulation Basics",
        content: "Access and modify the DOM with JavaScript",
        tags: ["JavaScript", "DOM"],
        date: "2024-02-05",
      },
      {
        title: "Mobile-First Design",
        content: "Why and how to prioritize mobile layouts",
        tags: ["CSS", "Responsive"],
        date: "2024-02-08",
      },
      {
        title: "React useState Hook",
        content: "Manage component state in functional components",
        tags: ["React", "Hooks"],
        date: "2024-02-11",
      },
      {
        title: "Forms and Validation",
        content: "Build and validate user forms",
        tags: ["HTML", "JavaScript"],
        date: "2024-02-14",
      },
      {
        title: "CSS Specificity Explained",
        content: "How browser chooses which style to apply",
        tags: ["CSS", "Selectors"],
        date: "2024-02-17",
      },
      {
        title: "Accessibility (a11y) Best Practices",
        content: "Make your site usable for everyone",
        tags: ["HTML", "Accessibility"],
        date: "2024-02-20",
      },
      {
        title: "Async vs Defer",
        content: "Control JavaScript loading behavior",
        tags: ["HTML", "Performance"],
        date: "2024-02-23",
      },
      {
        title: "JavaScript ES6 Features",
        content: "New syntax like arrow functions, let/const",
        tags: ["JavaScript", "ES6"],
        date: "2024-02-26",
      },
      {
        title: "React useEffect Hook",
        content: "Run side effects in functional components",
        tags: ["React", "Hooks"],
        date: "2024-02-29",
      },
      {
        title: "Git & GitHub Basics",
        content: "Track code and collaborate using Git",
        tags: ["Git", "Version Control"],
        date: "2024-03-03",
      },
      {
        title: "CSS Position Property",
        content: "How elements are positioned in the document",
        tags: ["CSS", "Layout"],
        date: "2024-03-06",
      },
      {
        title: "Image Optimization",
        content: "Best practices for web performance",
        tags: ["Performance", "Media"],
        date: "2024-03-09",
      },
      {
        title: "JavaScript Events",
        content: "Attach and manage browser events",
        tags: ["JavaScript", "DOM"],
        date: "2024-03-12",
      },
      {
        title: "React Component Props",
        content: "Pass data between components",
        tags: ["React", "Components"],
        date: "2024-03-15",
      },
      {
        title: "Responsive Units in CSS",
        content: "Use %, vw, vh, em, and rem effectively",
        tags: ["CSS", "Responsive"],
        date: "2024-03-18",
      },
      {
        title: "Debounce vs Throttle",
        content: "Improve input and scroll performance",
        tags: ["JavaScript", "Performance"],
        date: "2024-03-21",
      },
      {
        title: "HTML Meta Tags",
        content: "Enhance SEO and page information",
        tags: ["HTML", "SEO"],
        date: "2024-03-24",
      },
      {
        title: "React Conditional Rendering",
        content: "Show or hide elements based on logic",
        tags: ["React", "UI"],
        date: "2024-03-27",
      },
      {
        title: "Lighthouse for Audits",
        content: "Analyze performance and accessibility",
        tags: ["Performance", "Tools"],
        date: "2024-03-30",
      },
      {
        title: "JavaScript Array Methods",
        content: "map, filter, reduce and their use cases",
        tags: ["JavaScript", "Arrays"],
        date: "2024-04-02",
      },
      {
        title: "CSS Animations vs Transitions",
        content: "Animate UI elements efficiently",
        tags: ["CSS", "UI"],
        date: "2024-04-05",
      },
      {
        title: "React Key Prop",
        content: "Why and how to use keys in lists",
        tags: ["React", "Lists"],
        date: "2024-04-08",
      },
      {
        title: "Web Accessibility Tools",
        content: "Test and improve accessibility",
        tags: ["Accessibility", "Tools"],
        date: "2024-04-11",
      },
      {
        title: "JavaScript Closures",
        content: "How inner functions access outer scope",
        tags: ["JavaScript", "Advanced"],
        date: "2024-04-14",
      },
      {
        title: "Handling API Calls in React",
        content: "Fetch and display data in components",
        tags: ["React", "API"],
        date: "2024-04-17",
      },
      {
        title: "CSS Z-Index & Stacking",
        content: "Control layering of elements",
        tags: ["CSS", "Layout"],
        date: "2024-04-20",
      },
      {
        title: "Favicon and Web Manifest",
        content: "Improve branding and PWA setup",
        tags: ["HTML", "PWA"],
        date: "2024-04-23",
      },
    ];

    return {
      roadmaps,
      websites,
      youtubeChannels,
      ebooks,
      tools,
      articles,
      projects,
      githubRepos,
      externalResources,
      notes,
    };
  }, []);
};

const Resources: React.FC = () => {
  const [activeSection, setActiveSection] = useState("roadmaps");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState<"name" | "popularity" | "recent">(
    "name"
  );
  const [filterDifficulty, setFilterDifficulty] = useState<string>("all");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20; // Performance optimization: limit items per page

  // Memoize data arrays
  const data = useMemoizedData();

  const sections = useMemo(
    () => [
      { id: "roadmaps", label: "📚 Learning Roadmaps", icon: FaBook },
      { id: "websites", label: "🌐 Websites & Platforms", icon: FiGlobe },
      { id: "youtube", label: "📺 YouTube Channels", icon: FiYoutube },
      { id: "ebooks", label: "📘 E-Books & PDFs", icon: FiFileText },
      { id: "tools", label: "🛠️ Tools & Extensions", icon: FiTool },
      { id: "articles", label: "🧠 Articles & Blogs", icon: FiFileText },
      { id: "projects", label: "📦 Project Ideas", icon: FiCode },
      { id: "github", label: "🧰 GitHub Repos", icon: FaGithub },
      {
        id: "external",
        label: "🔗 External Resources",
        icon: FaExternalLinkAlt,
      },
      { id: "notes", label: "✍️ My Notes", icon: FiCode },
    ],
    []
  );

  // Add generic filtering/sorting function
  function getFilteredAndSortedResources<T extends object>(
    resources: T[],
    searchTerm: string,
    filterDifficulty: string,
    selectedTags: string[],
    sortBy: string
  ): T[] {
    let filtered = [...resources];

    // Filter by search term
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (resource: any) =>
          resource.name?.toLowerCase().includes(searchLower) ||
          resource.title?.toLowerCase().includes(searchLower) ||
          resource.description?.toLowerCase().includes(searchLower) ||
          resource.content?.toLowerCase().includes(searchLower)
      );
    }

    // Filter by difficulty
    if (filterDifficulty !== "all") {
      filtered = filtered.filter(
        (resource: any) =>
          resource.difficulty && resource.difficulty === filterDifficulty
      );
    }

    // Filter by tags
    if (selectedTags.length > 0) {
      const selectedTagsSet = new Set(selectedTags);
      filtered = filtered.filter((resource: any) =>
        resource.tags?.some((tag: string) => selectedTagsSet.has(tag))
      );
    }

    // Sort resources
    if (sortBy === "name") {
      filtered.sort((a: any, b: any) =>
        (a.name || a.title || "").localeCompare(b.name || b.title || "")
      );
    } else if (sortBy === "popularity") {
      filtered.sort(
        (a: any, b: any) => (b.popularity || 0) - (a.popularity || 0)
      );
    } else if (sortBy === "recent") {
      filtered.sort(
        (a: any, b: any) =>
          new Date(b.lastUpdated || 0).getTime() -
          new Date(a.lastUpdated || 0).getTime()
      );
    }

    return filtered;
  }

  // Performance optimization: Pagination
  const animationDelay = 0.05;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  let filtered: any[] = [];
  let paginated: any[] = [];
  let totalResources = 0;
  let totalPages = 1;

  switch (activeSection) {
    case "roadmaps": {
      filtered = getFilteredAndSortedResources<Roadmap>(
        data.roadmaps,
        searchTerm,
        filterDifficulty,
        selectedTags,
        sortBy
      );
      break;
    }
    case "websites": {
      filtered = getFilteredAndSortedResources<Website>(
        data.websites,
        searchTerm,
        filterDifficulty,
        selectedTags,
        sortBy
      );
      break;
    }
    case "youtube": {
      filtered = getFilteredAndSortedResources<YouTubeChannel>(
        data.youtubeChannels,
        searchTerm,
        filterDifficulty,
        selectedTags,
        sortBy
      );
      break;
    }
    case "ebooks": {
      filtered = getFilteredAndSortedResources<Ebook>(
        data.ebooks,
        searchTerm,
        filterDifficulty,
        selectedTags,
        sortBy
      );
      break;
    }
    case "tools": {
      filtered = getFilteredAndSortedResources<Tool>(
        data.tools,
        searchTerm,
        filterDifficulty,
        selectedTags,
        sortBy
      );
      break;
    }
    case "articles": {
      filtered = getFilteredAndSortedResources<Article>(
        data.articles,
        searchTerm,
        filterDifficulty,
        selectedTags,
        sortBy
      );
      break;
    }
    case "projects": {
      filtered = getFilteredAndSortedResources<Project>(
        data.projects,
        searchTerm,
        filterDifficulty,
        selectedTags,
        sortBy
      );
      break;
    }
    case "github": {
      filtered = getFilteredAndSortedResources<GithubRepo>(
        data.githubRepos,
        searchTerm,
        filterDifficulty,
        selectedTags,
        sortBy
      );
      break;
    }
    case "external": {
      filtered = getFilteredAndSortedResources<ExternalResource>(
        data.externalResources,
        searchTerm,
        filterDifficulty,
        selectedTags,
        sortBy
      );
      break;
    }
    case "notes": {
      filtered = getFilteredAndSortedResources<Note>(
        data.notes,
        searchTerm,
        filterDifficulty,
        selectedTags,
        sortBy
      );
      break;
    }
    default: {
      filtered = [];
    }
  }
  totalResources = filtered.length;
  totalPages = Math.max(1, Math.ceil(totalResources / itemsPerPage));
  paginated = filtered.slice(startIndex, endIndex);

  // Update stats (visited, favorite, bookmark counts)
  useEffect(() => {
    // setResourceStats((prev) => ({ ...prev, totalResources: filtered.length }));
  }, [
    activeSection,
    searchTerm,
    filterDifficulty,
    selectedTags,
    sortBy,
    filtered.length,
  ]);

  // Performance optimization: Optimized animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    hover: { y: -5 },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    hover: { x: 5 },
  };

  const renderContent = (paginated: any[]) => {
    // Loading/empty state and pagination controls
    if (paginated.length === 0) {
      return (
        <EmptyState>
          <h3>No resources found</h3>
          <p>Try adjusting your search criteria or filters</p>
        </EmptyState>
      );
    }

    // Render the correct section content and pagination controls
    switch (activeSection) {
      case "roadmaps": {
        return viewMode === "grid" ? (
          <ResourceGrid>
            {paginated.map((roadmap: Roadmap, index: number) => (
              <ResourceCard
                key={`roadmap-${index}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * animationDelay }}
                whileHover="hover"
                variants={cardVariants}
              >
                <CardHeader>
                  {renderIcon(roadmap.icon, 24)}
                  <h3>{roadmap.title}</h3>
                </CardHeader>
                <p>{roadmap.description}</p>
                <ResourceList>
                  {roadmap.resources.map((resource: Resource, idx: number) => (
                    <ResourceLink
                      key={`resource-${idx}`}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {resource.name} {renderIcon(FaExternalLinkAlt, 12)}
                    </ResourceLink>
                  ))}
                </ResourceList>
              </ResourceCard>
            ))}
          </ResourceGrid>
        ) : (
          <ResourceListView>
            {paginated.map((roadmap: Roadmap, index: number) => (
              <ResourceListItem
                key={`roadmap-list-${index}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * animationDelay }}
                whileHover="hover"
                variants={listItemVariants}
              >
                <ListItemHeader>
                  {renderIcon(roadmap.icon, 20)}
                  <h3>{roadmap.title}</h3>
                </ListItemHeader>
                <p>{roadmap.description}</p>
                <ResourceList>
                  {roadmap.resources.map((resource: Resource, idx: number) => (
                    <ResourceLink
                      key={`resource-list-${idx}`}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {resource.name} {renderIcon(FaExternalLinkAlt, 12)}
                    </ResourceLink>
                  ))}
                </ResourceList>
              </ResourceListItem>
            ))}
          </ResourceListView>
        );
      }
      case "websites": {
        return viewMode === "grid" ? (
          <ResourceGrid>
            {paginated.map((site: Website, index: number) => (
              <ResourceCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <CardHeader>
                  {renderIcon(FiGlobe, 24)}
                  <h3>{site.name}</h3>
                </CardHeader>
                <p>{site.description}</p>
                <ResourceLink
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site {renderIcon(FaExternalLinkAlt, 12)}
                </ResourceLink>
              </ResourceCard>
            ))}
          </ResourceGrid>
        ) : (
          <ResourceListView>
            {paginated.map((site: Website, index: number) => (
              <ResourceListItem
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <ListItemHeader>
                  {renderIcon(FiGlobe, 20)}
                  <h3>{site.name}</h3>
                </ListItemHeader>
                <p>{site.description}</p>
                <ResourceLink
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site {renderIcon(FaExternalLinkAlt, 12)}
                </ResourceLink>
              </ResourceListItem>
            ))}
          </ResourceListView>
        );
      }
      case "youtube": {
        return viewMode === "grid" ? (
          <ResourceGrid>
            {paginated.map((channel: YouTubeChannel, index: number) => (
              <ResourceCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <CardHeader>
                  {renderIcon(FiYoutube, 24)}
                  <h3>{channel.name}</h3>
                </CardHeader>
                <p>{channel.description}</p>
                <ResourceLink
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Channel {renderIcon(FaExternalLinkAlt, 12)}
                </ResourceLink>
              </ResourceCard>
            ))}
          </ResourceGrid>
        ) : (
          <ResourceListView>
            {paginated.map((channel: YouTubeChannel, index: number) => (
              <ResourceListItem
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <ListItemHeader>
                  {renderIcon(FiYoutube, 20)}
                  <h3>{channel.name}</h3>
                </ListItemHeader>
                <p>{channel.description}</p>
                <ResourceLink
                  href={channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Channel {renderIcon(FaExternalLinkAlt, 12)}
                </ResourceLink>
              </ResourceListItem>
            ))}
          </ResourceListView>
        );
      }
      case "ebooks": {
        return viewMode === "grid" ? (
          <ResourceGrid>
            {paginated.map((book: Ebook, index: number) => (
              <ResourceCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <CardHeader>
                  {renderIcon(FaFilePdf, 24)}
                  <h3>{book.title}</h3>
                </CardHeader>
                <p>{book.description}</p>
                <ResourceLink
                  href={book.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download PDF {renderIcon(FaArrowRight, 12)}
                </ResourceLink>
              </ResourceCard>
            ))}
          </ResourceGrid>
        ) : (
          <ResourceListView>
            {paginated.map((book: Ebook, index: number) => (
              <ResourceListItem
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 5 }}
              >
                <ListItemHeader>
                  {renderIcon(FaFilePdf, 20)}
                  <h3>{book.title}</h3>
                </ListItemHeader>
                <p>{book.description}</p>
                <ResourceLink
                  href={book.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download PDF {renderIcon(FaArrowRight, 12)}
                </ResourceLink>
              </ResourceListItem>
            ))}
          </ResourceListView>
        );
      }
      case "tools": {
        return (
          <ResourceGrid>
            {paginated.map((tool: Tool, index: number) => (
              <ResourceCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <CardHeader>
                  {renderIcon(FiTool, 24)}
                  <h3>{tool.name}</h3>
                </CardHeader>
                <p>{tool.description}</p>
              </ResourceCard>
            ))}
          </ResourceGrid>
        );
      }
      case "articles": {
        return (
          <ResourceGrid>
            {paginated.map((article: Article, index: number) => (
              <ResourceCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <CardHeader>
                  {renderIcon(FiFileText, 24)}
                  <h3>{article.title}</h3>
                </CardHeader>
                <p>{article.description}</p>
                <ResourceLink
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read Article {renderIcon(FaArrowRight, 12)}
                </ResourceLink>
              </ResourceCard>
            ))}
          </ResourceGrid>
        );
      }
      case "projects": {
        return (
          <ResourceGrid>
            {paginated.map((project: Project, index: number) => (
              <ResourceCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <CardHeader>
                  {renderIcon(FiCode, 24)}
                  <h3>{project.title}</h3>
                </CardHeader>
                <p>{project.description}</p>
                <ProjectTech>
                  {project.tech?.map((tech: string, idx: number) => (
                    <TechTag key={idx}>{tech}</TechTag>
                  ))}
                </ProjectTech>
                <DifficultyBadge difficulty={project.difficulty || ""}>
                  {project.difficulty}
                </DifficultyBadge>
              </ResourceCard>
            ))}
          </ResourceGrid>
        );
      }
      case "github": {
        return (
          <ResourceGrid>
            {paginated.map((repo: GithubRepo, index: number) => (
              <ResourceCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <CardHeader>
                  {renderIcon(FaGithub, 24)}
                  <h3>{repo.name}</h3>
                </CardHeader>
                <p>{repo.description}</p>
                <ResourceLink
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Repository {renderIcon(FaExternalLinkAlt, 12)}
                </ResourceLink>
              </ResourceCard>
            ))}
          </ResourceGrid>
        );
      }
      case "external": {
        return (
          <ResourceGrid>
            {paginated.map((resource: ExternalResource, index: number) => (
              <ResourceCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <CardHeader>
                  {renderIcon(FaExternalLinkAlt, 24)}
                  <h3>{resource.name}</h3>
                </CardHeader>
                <p>{resource.description}</p>
                <ResourceLink
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Resource {renderIcon(FaExternalLinkAlt, 12)}
                </ResourceLink>
              </ResourceCard>
            ))}
          </ResourceGrid>
        );
      }
      case "notes": {
        return (
          <NotesGrid>
            {paginated.map((note: Note, index: number) => (
              <NoteCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <NoteHeader>
                  {renderIcon(FiCode, 20)}
                  <h3>{note.title}</h3>
                </NoteHeader>
                <NoteContent>{note.content}</NoteContent>
              </NoteCard>
            ))}
          </NotesGrid>
        );
      }
      default:
        return null;
    }
  };

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SectionTitle
        title="Resources"
        subtitle="Curated learning resources, tools, and valuable content for web development"
      />

      {/* Advanced Search and Filter Bar */}
      <AdvancedSearchBar>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchIcon>{renderIcon(FaSearch, 16)}</SearchIcon>
        </SearchContainer>

        <FilterControls>
          <FilterButton
            onClick={() => setShowFilters(!showFilters)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {renderIcon(FiSettings, 16)}
            Filters
          </FilterButton>

          <SortDropdown
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
          >
            <option value="name">Sort by Name</option>
            <option value="popularity">Sort by Popularity</option>
            <option value="recent">Sort by Recent</option>
          </SortDropdown>

          <ViewToggle>
            <ViewButton
              active={viewMode === "grid"}
              onClick={() => setViewMode("grid")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {renderIcon(FiGrid, 16)}
            </ViewButton>
            <ViewButton
              active={viewMode === "list"}
              onClick={() => setViewMode("list")}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {renderIcon(FiList, 16)}
            </ViewButton>
          </ViewToggle>
        </FilterControls>
      </AdvancedSearchBar>

      {/* Advanced Filters Panel */}
      <AnimatePresence>
        {showFilters && (
          <FiltersPanel
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <FilterSection>
              <FilterLabel>Difficulty Level:</FilterLabel>
              <DifficultyFilter>
                {["all", "Beginner", "Intermediate", "Advanced"].map(
                  (level) => (
                    <DifficultyChip
                      key={level}
                      active={filterDifficulty === level}
                      onClick={() => setFilterDifficulty(level)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {level === "all" ? "All Levels" : level}
                    </DifficultyChip>
                  )
                )}
              </DifficultyFilter>
            </FilterSection>

            <FilterSection>
              <FilterLabel>Popular Tags:</FilterLabel>
              <TagFilter>
                {[
                  "React",
                  "JavaScript",
                  "CSS",
                  "Node.js",
                  "Python",
                  "TypeScript",
                  "DevOps",
                  "AWS",
                ].map((tag) => (
                  <TagChip
                    key={tag}
                    active={selectedTags.includes(tag)}
                    onClick={() => {
                      setSelectedTags((prev) =>
                        prev.includes(tag)
                          ? prev.filter((t) => t !== tag)
                          : [...prev, tag]
                      );
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tag}
                  </TagChip>
                ))}
              </TagFilter>
            </FilterSection>
          </FiltersPanel>
        )}
      </AnimatePresence>

      {/* Quick Actions */}
      <QuickActions>
        <QuickActionButton
          onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {renderIcon(FaSearch, 16)}
          Advanced Search
        </QuickActionButton>
        <QuickActionButton
          onClick={() => {
            /* Export functionality */
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {renderIcon(FaDownload, 16)}
          Export List
        </QuickActionButton>
        <QuickActionButton
          onClick={() => {
            /* Share functionality */
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {renderIcon(FiShare, 16)}
          Share Resources
        </QuickActionButton>
      </QuickActions>

      <NavigationTabs>
        {sections.map((section) => (
          <TabButton
            key={section.id}
            active={activeSection === section.id}
            onClick={() => setActiveSection(section.id)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {renderIcon(section.icon, 16)}
            {section.label}
          </TabButton>
        ))}
      </NavigationTabs>

      <ContentSection>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {renderContent(paginated)}

            {/* Performance optimization: Pagination controls */}
            {totalPages > 1 && (
              <PaginationContainer>
                <PaginationButton
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  ←
                </PaginationButton>

                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  const pageNum = i + 1;
                  return (
                    <PaginationButton
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={currentPage === pageNum ? "active" : ""}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {pageNum}
                    </PaginationButton>
                  );
                })}

                <PaginationButton
                  onClick={() =>
                    setCurrentPage(Math.min(totalPages, currentPage + 1))
                  }
                  disabled={currentPage === totalPages}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  →
                </PaginationButton>
              </PaginationContainer>
            )}
          </motion.div>
        </AnimatePresence>
      </ContentSection>
    </Container>
  );
};

const Container = styled(motion.div)`
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 20px;
`;

const NavigationTabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TabButton = styled(motion.button)<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 25px;
  background: ${({ theme, active }) =>
    active ? theme.primary : theme.cardBackground};
  color: ${({ theme, active }) => (active ? "white" : theme.text)};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${({ theme }) => theme.shadowColor} 0 2px 8px;

  &:hover {
    background: ${({ theme, active }) =>
      active ? theme.secondary : theme.backgroundHover};
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 300px;
    justify-content: center;
  }
`;

const ContentSection = styled.div`
  min-height: 400px;
`;

const ResourceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ResourceCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadowColor} 0 4px 12px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadowColor} 0 8px 24px;
    transform: translateY(-2px);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${({ theme }) => theme.gradient.primary};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

const ResourceCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const ResourceCardActions = styled.div`
  display: flex;
  gap: 0.5rem;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ResourceCard}:hover & {
    opacity: 1;
  }
`;

const ActionButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 6px;
  background: ${({ theme }) => theme.backgroundHover};
  color: ${({ theme }) => theme.textSecondary};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: white;
  }
`;

const ResourceBadge = styled.span<{
  type: "popular" | "new" | "trending" | "featured";
}>`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  color: white;
  background: ${({ type, theme }) => {
    switch (type) {
      case "popular":
        return theme.success;
      case "new":
        return theme.info;
      case "trending":
        return theme.warning;
      case "featured":
        return theme.primary;
      default:
        return theme.primary;
    }
  }};
`;

const ResourceMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.borderColor};
  font-size: 0.85rem;
  color: ${({ theme }) => theme.textSecondary};
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const ResourceRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  margin-top: 0.5rem;
`;

const StarIcon = styled.div<{ filled: boolean }>`
  color: ${({ filled, theme }) =>
    filled ? theme.warning : theme.textSecondary};
  font-size: 0.85rem;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primary};

  h3 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
  }
`;

const ResourceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const ResourceLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.secondary};
    gap: 0.75rem;
  }
`;

const ToolList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const ToolItem = styled.li`
  padding: 0.5rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};

  &:last-child {
    border-bottom: none;
  }
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
`;

const TechTag = styled.span`
  background: ${({ theme }) => theme.backgroundHover};
  color: ${({ theme }) => theme.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const DifficultyBadge = styled.span<{ difficulty: string }>`
  background: ${({ difficulty, theme }) => {
    switch (difficulty) {
      case "Beginner":
        return theme.success;
      case "Intermediate":
        return theme.warning;
      case "Advanced":
        return theme.error;
      default:
        return theme.info;
    }
  }};
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  display: inline-block;
  margin-top: 0.5rem;
`;

const NotesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const NoteCard = styled(motion.div)`
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadowColor} 0 4px 12px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadowColor} 0 8px 24px;
  }
`;

const NoteHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primary};

  h3 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
  }
`;

const NoteContent = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.6;
  margin: 0;
`;

// Advanced UI Components
const AdvancedSearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadowColor} 0 2px 8px;
  border: 1px solid ${({ theme }) => theme.borderColor};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const SearchContainer = styled.div`
  position: relative;
  flex: 1;
  max-width: 400px;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 8px;
  font-size: 1rem;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.primary}20;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.textSecondary};
`;

const FilterControls = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const FilterButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 8px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.backgroundHover};
  }
`;

const SortDropdown = styled.select`
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 8px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }
`;

const ViewToggle = styled.div`
  display: flex;
  gap: 0.25rem;
  padding: 0.25rem;
  background: ${({ theme }) => theme.backgroundSecondary};
  border-radius: 8px;
`;

const ViewButton = styled(motion.button)<{ active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border: none;
  border-radius: 6px;
  background: ${({ theme, active }) =>
    active ? theme.primary : "transparent"};
  color: ${({ theme, active }) => (active ? "white" : theme.text)};
  cursor: pointer;
  transition: all 0.3s ease;
`;

const FiltersPanel = styled(motion.div)`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadowColor} 0 2px 8px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  overflow: hidden;
`;

const FilterSection = styled.div`
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const FilterLabel = styled.h4`
  margin: 0 0 1rem 0;
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

const DifficultyFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const DifficultyChip = styled(motion.button)<{ active: boolean }>`
  padding: 0.5rem 1rem;
  border: 1px solid
    ${({ theme, active }) => (active ? theme.primary : theme.borderColor)};
  border-radius: 20px;
  background: ${({ theme, active }) =>
    active ? theme.primary : theme.background};
  color: ${({ theme, active }) => (active ? "white" : theme.text)};
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const TagFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TagChip = styled(motion.button)<{ active: boolean }>`
  padding: 0.5rem 1rem;
  border: 1px solid
    ${({ theme, active }) => (active ? theme.primary : theme.borderColor)};
  border-radius: 20px;
  background: ${({ theme, active }) =>
    active ? theme.primary : theme.background};
  color: ${({ theme, active }) => (active ? "white" : theme.text)};
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const StatsBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem;
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadowColor} 0 2px 8px;
  border: 1px solid ${({ theme }) => theme.borderColor};

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.textSecondary};
`;

const StatIcon = styled.div`
  color: ${({ theme }) => theme.primary};
`;

const StatText = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
`;

const QuickActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const QuickActionButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 8px;
  background: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.text};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.backgroundHover};
    border-color: ${({ theme }) => theme.primary};
  }
`;

const ResourceListView = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ResourceListItem = styled(motion.div)`
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadowColor} 0 4px 12px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadowColor} 0 8px 24px;
  }
`;

const ListItemHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.primary};

  h3 {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
  }
`;

// Performance optimization: Pagination controls
const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  padding: 1rem;
`;

const PaginationButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 8px;
  background: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.text};
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.backgroundHover};
    border-color: ${({ theme }) => theme.primary};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &.active {
    background: ${({ theme }) => theme.primary};
    color: white;
    border-color: ${({ theme }) => theme.primary};
  }
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  color: ${({ theme }) => theme.primary};
  font-size: 1.2rem;
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  text-align: center;
  color: ${({ theme }) => theme.textSecondary};

  h3 {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.text};
  }
`;

export default Resources;
