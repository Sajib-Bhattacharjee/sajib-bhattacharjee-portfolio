import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaSearch, FaGithub, FaBook } from "react-icons/fa";
import { renderIcon } from "../utils/iconHelpers";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import GradientDivider from "../components/GradientDivider";

// Documentation data
const documentationsData = [
  {
    id: 1,
    title: "CSS Master Documentation",
    description:
      "📘 CSS Master Documentation 2025 – A complete, beginner-to-advanced guide covering every CSS property, concept, and layout technique. 🚀 Includes Flexbox, Grid, Variables, Animations, Responsive Design, and more. 📚 Stay updated with the latest CSS standards! 🎯💻✨",
    image: "/images/docs/css-master.jpg",
    tags: ["CSS", "Style", "Frontend"],
    github:
      "https://github.com/Sajib-Bhattacharjee/css-master-documentation-2025",
    demo: "https://github.com/Sajib-Bhattacharjee/css-master-documentation-2025",
  },

  {
    id: 2,
    title: "HTML5 Complete Documentation",
    description:
      "📘📘 A complete HTML documentation covering every HTML tag, input type, and best practices, fully updated for 2025. Perfect for beginners to pros. 🚀 Clean structure, semantic tags, accessibility, examples & more! Authored by Sajib Bhattacharjee (SBC) 👨‍💻",
    image: "/images/docs/html-master.jpg",
    tags: ["HTML", "Structure", "Frontend"],
    github:
      "https://github.com/Sajib-Bhattacharjee/html-master-documentation-2025",
    demo: "https://github.com/Sajib-Bhattacharjee/html-master-documentation-2025",
  },

  {
    id: 3,
    title: "Quick Introduction to HTTP (2025 Edition)",
    description:
      "🚀 The ultimate HTTP guide for 2025! 🌐 Learn protocols, methods, status codes, security, APIs & more—all in one place. 📖 Beginner-friendly, visual, and up-to-date. Perfect for devs, students & pros! 🛡️✨",
    image: "/images/docs/http-master.jpg",
    tags: ["HTTP", "Web", "Protocols"],
    github: "https://github.com/Sajib-Bhattacharjee/modern-http-guide-2025",
    demo: "https://github.com/Sajib-Bhattacharjee/modern-http-guide-2025",
  },

  {
    id: 4,
    title: "EJS Documentation",
    description:
      "📘 Complete EJS Documentation from Beginner to Advanced! Learn EJS syntax, loops, conditionals, partials, layouts, forms, and more with real examples. 🧩 Built by Sajib Bhattacharjee – MERN Stack Specialist 🚀 Perfect for Node.js + Express developers. #EJS #WebDev 🛠️✨",
    image: "/images/docs/ejs-master.jpg",
    tags: ["EJS", "Web", "Frontend"],
    github: "https://github.com/Sajib-Bhattacharjee/ejs-documentation-2025",
    demo: "https://github.com/Sajib-Bhattacharjee/ejs-documentation-2025",
  },

  {
    id: 5,
    title: "Node.js + Express.js Mastery Guide 2025",
    description:
      "🚀 Your definitive Node.js & Express.js mastery guide for 2025! Learn web servers, REST APIs, databases (MongoDB, SQL), real-time comms, security, & deployment. A complete handbook for modern backend development. ✨",
    image: "/images/docs/node-express.jpg",
    tags: ["Node.js", "Express,js", "Backend"],
    github:
      "https://github.com/Sajib-Bhattacharjee/node-express-mastery-guide-2025",
    demo: "https://github.com/Sajib-Bhattacharjee/node-express-mastery-guide-2025",
  },

  {
    id: 6,
    title: "Complete Guide to Git & GitHub",
    description:
      "🚀 Your complete 2025 guide to mastering Git & GitHub! 📚 Go from beginner to advanced with topics covering core commands, branching, pull requests, GitHub Actions, and pro workflows. The ultimate, up-to-date resource for developers. ✨",
    image: "/images/docs/git-github.jpg",
    tags: ["Git", "GitHub", "Version Control"],
    github:
      "https://github.com/Sajib-Bhattacharjee/ultimate-git-github-guide-2025",
    demo: "https://github.com/Sajib-Bhattacharjee/ultimate-git-github-guide-2025",
  },

  {
    id: 7,
    title: "CSS Flexbox : The Ultimate Guide",
    description:
      "🚀 The Ultimate CSS Flexbox Guide for 2025! ✨ Packed with visual diagrams, live code editors, FAQs & pro tips. 🧩 Master Flexbox with ease—perfect for beginners & experts. 🌟 The most interactive and beautifully crafted Flexbox documentation on the web!",
    image: "/images/docs/git-github.jpg",
    tags: ["CSS", "Style", "Frontend"],
    github:
      "https://github.com/Sajib-Bhattacharjee/flexbox-ultimate-guide-2025",
    demo: "https://github.com/Sajib-Bhattacharjee/flexbox-ultimate-guide-2025",
  },

  {
    id: 8,
    title: "The Ultimate MERN Stack Guide 2025",
    description:
      "🚀 Your ultimate roadmap to becoming a high-salary remote MERN Stack Full-Stack Developer in 2025! Master MongoDB, Express, React, Node.js, plus Next.js, Docker 🐳, advanced testing, & job acquisition strategies. Build robust apps, stand out, and land top-tier opportunities. ⭐",
    image: "/images/docs/git-github.jpg",
    tags: ["MERN", "Frontend", "Backend", "Full Stack"],
    github: "https://github.com/Sajib-Bhattacharjee/mern-stack-roadmap-2025",
    demo: "https://github.com/Sajib-Bhattacharjee/mern-stack-roadmap-2025",
  },

  {
    id: 9,
    title: "Web Technology Fundamentals",
    description:
      "🌐✨ The ultimate 2025 guide to modern web development! Covers HTML5, CSS3, JS (ES2025+), TypeScript, React, Node.js, Express, MongoDB, APIs, security, testing & DevOps. 🚀 Master the MERN stack with best practices & real-world examples! 👨‍💻",
    image: "/images/docs/git-github.jpg",
    tags: ["Web Development", "Frontend", "Backend"],
    github:
      "https://github.com/Sajib-Bhattacharjee/web-technology-fundamentals-2025",
    demo: "https://github.com/Sajib-Bhattacharjee/web-technology-fundamentals-2025",
  },

  //   // /

  {
    id: 10,
    title: "Web Accessibility",
    description:
      "A comprehensive guide to making websites accessible to all users, including those with disabilities.",
    image: "/images/docs/accessibility.jpg",
    tags: ["Accessibility", "WCAG", "Frontend"],
    github:
      "https://github.com/Sajib-Bhattacharjee/web-accessibility-documentation",
    demo: "https://github.com/Sajib-Bhattacharjee/web-accessibility-documentation",
  },

  {
    id: 11,
    title: "VSCode Documentation",
    description:
      "Complete guide to using Visual Studio Code effectively, including shortcuts, extensions, and configurations.",
    image: "/images/docs/vscode.jpg",
    tags: ["VSCode", "IDE", "Tools"],
    github: "https://github.com/Sajib-Bhattacharjee/vscode-documentation",
    demo: "https://github.com/Sajib-Bhattacharjee/vscode-documentation",
  },

  {
    id: 12,
    title: "BEM Methodology",
    description:
      "Guide to implementing Block Element Modifier methodology for writing clean, maintainable CSS code.",
    image: "/images/docs/bem.jpg",
    tags: ["CSS", "BEM", "Methodology"],
    github:
      "https://github.com/Sajib-Bhattacharjee/bem-methodology-documentation",
    demo: "https://github.com/Sajib-Bhattacharjee/bem-methodology-documentation",
  },

  {
    id: 13,
    title: "JSDoc Documentation",
    description:
      "Guide to documenting JavaScript code with JSDoc comments for better code maintainability.",
    image: "/images/docs/jsdoc.jpg",
    tags: ["JavaScript", "Documentation", "JSDoc"],
    github: "https://github.com/Sajib-Bhattacharjee/jsdoc-documentation",
    demo: "https://github.com/Sajib-Bhattacharjee/jsdoc-documentation",
  },
  {
    id: 14,
    title: "Markdown Documentation",
    description:
      "Learn how to write clean and effective documentation using Markdown syntax.",
    image: "/images/docs/markdown.jpg",
    tags: ["Markdown", "Documentation", "GitHub"],
    github: "https://github.com/Sajib-Bhattacharjee/markdown-documentation",
    demo: "https://github.com/Sajib-Bhattacharjee/markdown-documentation",
  },
  {
    id: 15,
    title: "TypeScript Documentation",
    description:
      "Comprehensive guide to TypeScript, including types, interfaces, generics, and best practices.",
    image: "/images/docs/typescript.jpg",
    tags: ["TypeScript", "JavaScript", "Types"],
    github: "https://github.com/Sajib-Bhattacharjee/typescript-documentation",
    demo: "https://github.com/Sajib-Bhattacharjee/typescript-documentation",
  },
  {
    id: 16,
    title: "ESLint Documentation",
    description:
      "Guide to setting up and using ESLint for maintaining consistent code quality in JavaScript projects.",
    image: "/images/docs/eslint.jpg",
    tags: ["ESLint", "JavaScript", "Code Quality"],
    github: "https://github.com/Sajib-Bhattacharjee/eslint-documentation",
    demo: "https://github.com/Sajib-Bhattacharjee/eslint-documentation",
  },
  {
    id: 17,
    title: "NPM Documentation",
    description:
      "Detailed guide to using NPM (Node Package Manager) for JavaScript package management.",
    image: "/images/docs/npm.jpg",
    tags: ["NPM", "Node.js", "Package Management"],
    github: "https://github.com/Sajib-Bhattacharjee/npm-documentation",
    demo: "https://github.com/Sajib-Bhattacharjee/npm-documentation",
  },
  {
    id: 18,
    title: "JavaScript Documentation",
    description:
      "Comprehensive guide to JavaScript programming language, from basics to advanced concepts.",
    image: "/images/docs/javascript.jpg",
    tags: ["JavaScript", "Programming", "Frontend"],
    github: "https://github.com/Sajib-Bhattacharjee/javascript-documentation",
    demo: "https://github.com/Sajib-Bhattacharjee/javascript-documentation",
  },
  {
    id: 19,
    title: "JSON Documentation",
    description:
      "Guide to working with JSON (JavaScript Object Notation) for data interchange in web applications.",
    image: "/images/docs/json.jpg",
    tags: ["JSON", "Data", "Web"],
    github: "https://github.com/Sajib-Bhattacharjee/json-documentation",
    demo: "https://github.com/Sajib-Bhattacharjee/json-documentation",
  },
  {
    id: 20,
    title: "CSS Grid Documentation",
    description:
      "Learn how to create complex web layouts easily using CSS Grid with practical examples.",
    image: "/images/docs/cssgrid.jpg",
    tags: ["CSS", "Grid", "Layout"],
    github: "https://github.com/Sajib-Bhattacharjee/css-grid-documentation",
    demo: "https://github.com/Sajib-Bhattacharjee/css-grid-documentation",
  },
  {
    id: 21,
    title: "Formspree Form Submission Guide",
    description:
      "Step-by-step guide to implement contact forms with Formspree for simple form submissions without a backend.",
    image: "/images/docs/formspree.jpg",
    tags: ["Forms", "Formspree", "Frontend"],
    github:
      "https://github.com/Sajib-Bhattacharjee/formspree-from-submission-guide",
    demo: "https://github.com/Sajib-Bhattacharjee/formspree-from-submission-guide",
  },

  {
    id: 22,
    title: "VsCode Webdev Essentials",
    description:
      "🚀 Boost your productivity with this all-in-one VS Code guide! Includes essential shortcuts, must-have extensions, and stunning themes. Perfect for both beginners & pros to code smarter and customize their editor like a pro. 🎨💻 #VSCode #WebDev #Productivity",
    image: "/images/docs/vscode-webdev.jpg",
    tags: ["VsCode", "WebDev", "Productivity"],
    github: "https://github.com/Sajib-Bhattacharjee/vscode-webdev-essentials",
    demo: "https://github.com/Sajib-Bhattacharjee/vscode-webdev-essentials",
  },
];

// Define image mappings
const docImageMappings: Record<string, string> = {
  "CSS Master Documentation":
    "https://raw.githubusercontent.com/Sajib-Bhattacharjee/css-master-documentation-2025/main/images/css__banner.png",
  "HTML5 Complete Documentation":
    "https://raw.githubusercontent.com/Sajib-Bhattacharjee/html-master-documentation-2025/main/images/html__logo.png",

  "Quick Introduction to HTTP (2025 Edition)":
    "https://raw.githubusercontent.com/Sajib-Bhattacharjee/modern-http-guide-2025/main/images/logo-img.jpg",

  "EJS Documentation":
    "https://raw.githubusercontent.com/Sajib-Bhattacharjee/ejs-documentation-2025/main/images/ejs__img.png",

  "Node.js + Express.js Mastery Guide 2025":
    "https://raw.githubusercontent.com/Sajib-Bhattacharjee/node-express-mastery-guide-2025/main/images/logo__img.png",

  "Git & GitHub Mastery Guide 2025":
    "https://raw.githubusercontent.com/Sajib-Bhattacharjee/ultimate-git-github-guide-2025/main/images/git_logo.png",

  "CSS Flexbox : The Ultimate Guide":
    "https://raw.githubusercontent.com/Sajib-Bhattacharjee/flexbox-ultimate-guide-2025/main/images/flexbox.png",

  "The Ultimate MERN Stack Guide 2025":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQme460A8deQthW4dbbbPxRK2jkT4tz3y7fcA&s",

  "Web Technology Fundamentals":
    "https://raw.githubusercontent.com/Sajib-Bhattacharjee/web-technology-fundamentals-2025/main/images/logo.jpg",

  "Web Accessibility":
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLeY_-VM2eQB7ieNVs3UU_PwH7gAg2kFV2Hw&s",

  "VSCode Documentation":
    "data:image/jpeg;base64,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",

  "BEM Methodology":
    "data:image/jpeg;base64,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",

  "JSDoc Documentation":
    "data:image/jpeg;base64,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iICIiAiIgIiICIiAiIgIiICIiAiIgIiIPrxERc1EREBERAREQEREBERAREQEREBUKqiDW7Rpg9paQCCCCDoQRYheY1f+GFKCcJqGjsGNpA9wJaT4leuubdQPpgVVeOn/AA2g9af6meVU/DaD1p/qZ5V690IcE6COCXkeQ/htB60/1M8qfhtB60/1M8q9e6COCdBHBLyPIfw2g9af6meVPw2g9af6meVevdBHBOgjgl5HkP4bQetP9TPKn4bQetP9TPKvXugjgnQRwS8jyH8NoPWn+pnlT8NoPWn+pnlXr3QRwToI4JeR5D+G0HrT/Uzyp+G0HrT/AFM8q9e6COCdBHBLyPIfw2g9af6meVPw2g9af6meVevdBHBOgjgl5HkP4bQetP8AUzyp+G0HrT/Uzyr17oI4J0EcEvI8h/DaD1p/qZ5U/DaD1p/qZ5V690EcE6COCXkeQ/htB60/1M8qfhtB60/1M8q9e6COCdBHBLyPIfw2g9af6meVPw2g9af6meVevdBHBOgjgl5HkP4bQetP9TPKn4bQetP9TPKvXugjgnQRwS8jPREUQREQEREBERAREQEREBERAREQEREBUREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH/9k=",

  "Markdown Documentation":
    "data:image/jpeg;base64,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",

  "TypeScript Documentation":
    "data:image/png;base64,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",

  "ESLint Documentation":
    "data:image/jpeg;base64,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",

  "NPM Documentation":
    "data:image/jpeg;base64,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",

  "JavaScript Documentation":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAA0lBMVEX",

  "JSON Documentation":
    "data:image/jpeg;base64,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",

  "CSS Grid Documentation":
    "data:image/png;base64,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",

  "Formspree Form Submission Guide":
    "data:image/jpeg;base64,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",

  "VsCode Web Dev Essentials":
    "https://raw.githubusercontent.com/Sajib-Bhattacharjee/vscode-webdev-essentials/main/images/introduction.png",
};

// Function to get a unique gradient for each card
const getDocGradient = (id: number) => {
  const gradients = [
    "linear-gradient(135deg, #4158D0, #C850C0)",
    "linear-gradient(135deg, #0093E9, #80D0C7)",
    "linear-gradient(135deg, #8EC5FC, #E0C3FC)",
    "linear-gradient(135deg, #FF9A8B, #FF6A88)",
    "linear-gradient(135deg, #FBAB7E, #F7CE68)",
    "linear-gradient(135deg, #85FFBD, #FFFB7D)",
    "linear-gradient(135deg, #FA8BFF, #2BD2FF)",
    "linear-gradient(135deg, #FFDEE9, #B5FFFC)",
    "linear-gradient(135deg, #08AEEA, #2AF598)",
    "linear-gradient(135deg, #FFE53B, #FF2525)",
    "linear-gradient(135deg, #21D4FD, #B721FF)",
    "linear-gradient(135deg, #FEE140, #FA709A)",
    "linear-gradient(135deg, #3EECAC, #EE74E1)",
    "linear-gradient(135deg, #FF6CAB, #7366FF)",
    "linear-gradient(135deg, #F6D365, #FDA085)",
    "linear-gradient(135deg, #00B4DB, #0083B0)",
    "linear-gradient(135deg, #F46B45, #EEA849)",
    "linear-gradient(135deg, #6A11CB, #2575FC)",
    "linear-gradient(135deg, #536976, #BBD2C5)",
    "linear-gradient(135deg, #9796F0, #FBC7D4)",
  ];
  return gradients[(id * 7) % gradients.length];
};

// Function to generate gradient borders
const getBorderGradient = (id: number) => {
  // Slightly different gradients for borders
  const borderGradients = [
    "linear-gradient(to right, #4158D0, #C850C0)",
    "linear-gradient(to right, #0093E9, #80D0C7)",
    "linear-gradient(to right, #8EC5FC, #E0C3FC)",
    "linear-gradient(to right, #FF9A8B, #FF6A88)",
    "linear-gradient(to right, #FBAB7E, #F7CE68)",
    "linear-gradient(to right, #85FFBD, #FFFB7D)",
    "linear-gradient(to right, #FA8BFF, #2BD2FF)",
    "linear-gradient(to right, #FFDEE9, #B5FFFC)",
    "linear-gradient(to right, #08AEEA, #2AF598)",
    "linear-gradient(to right, #FFE53B, #FF2525)",
    "linear-gradient(to right, #21D4FD, #B721FF)",
    "linear-gradient(to right, #FEE140, #FA709A)",
  ];
  return borderGradients[(id * 5) % borderGradients.length];
};

// Function to get topic-specific image URLs
const getTopicImage = (title: string) => {
  return (
    docImageMappings[title] ||
    `https://via.placeholder.com/800x450?text=${encodeURIComponent(title)}`
  );
};

// Update existing documentation array instead of redefining it
documentationsData.forEach((doc) => {
  doc.image = getTopicImage(doc.title);
});

// Update the order of declarations - move DocCard before DocImage
const DocCard = styled(motion.div)<{ docId: number }>`
  background: ${(props) => getDocGradient(props.docId)};
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  height: auto; /* Allow natural height */

  &:before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: var(--border-radius);
    padding: 2px; /* Control the border thickness */
    background: ${(props) => getBorderGradient(props.docId)};
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    -webkit-mask-composite: xor;
    pointer-events: none;
    z-index: 1;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);

    @media (max-width: 480px) {
      transform: translateY(-5px);
    }
  }
`;

// Update DocImage for better handling of missing images
const DocImage = styled.div`
  height: 180px;
  overflow: hidden;
  position: relative;
  background: ${({ theme }) =>
    theme.cardBackgroundAlt}; /* Fallback background */

  @media (max-width: 768px) {
    height: 160px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    transition: transform 0.3s ease;

    &.missing-image {
      opacity: 0.5;
      object-fit: contain;
      padding: 1rem;
    }
  }

  ${DocCard}:hover & img {
    transform: scale(1.05);
  }
`;

// Update the image error handling function
const handleImageError = (
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  title: string
) => {
  const target = e.currentTarget;
  target.src = `https://via.placeholder.com/800x450?text=${encodeURIComponent(
    title
  )}`;
  target.className = "missing-image";
  target.onerror = null; // Prevent infinite fallback loop
};

// Move styled components before they're used
const Container = styled(motion.div)`
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 20px;
`;

const SearchSection = styled.div`
  margin-bottom: 3rem;
  width: 100%;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.borderColor};
  transition: all 0.3s ease;

  &:focus-within {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.primary}80;
    border-color: ${({ theme }) => theme.primary};
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 1rem;
  border: none;
  outline: none;
  font-size: 1rem;
  background-color: transparent;
  color: ${({ theme }) => theme.text};

  &::placeholder {
    color: ${({ theme }) => theme.textSecondary};
  }
`;

const SearchIcon = styled.div`
  padding: 0 1rem;
  color: ${({ theme }) => theme.textSecondary};
`;

const DocsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2.5rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const DocContent = styled.div`
  padding: 1.5rem;
  background: ${({ theme }) => `${theme.cardBackground}E6`};
  backdrop-filter: blur(5px);
  color: ${({ theme }) => theme.text};
  position: relative;
  z-index: 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 260px; /* Set minimum height to ensure equal heights */
`;

const DocTitle = styled.h3`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.heading};
  font-weight: 600;
  position: relative;
  display: inline-block;
  font-size: 1.2rem;
  line-height: 1.4;
  min-height: 2.8rem; /* Ensure consistent height for the title area */

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 3rem;
    height: 2px;
    background: ${({ theme }) => theme.primary};
    border-radius: 1px;
  }
`;

const DocDescription = styled.p`
  color: ${({ theme }) => theme.text};
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 0.95rem;
  line-height: 1.6;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  flex-grow: 1;
  min-height: 4.8rem; /* Ensure consistent height for description (3 lines) */
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  min-height: 2rem; /* Ensure consistent height */
`;

const Tag = styled.span`
  background-color: ${({ theme }) => `${theme.cardBackgroundAlt}CC`};
  color: ${({ theme }) => theme.text};
  padding: 0.3rem 0.6rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 500;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
    background-color: ${({ theme }) => theme.primary}25;
    border-color: ${({ theme }) => theme.primary}50;
  }
`;

const DocActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto; /* Push actions to the bottom of flex container */
  width: 100%;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const DocLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.text};
  border-radius: var(--border-radius);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;
  border: 1px solid ${({ theme }) => theme.borderColor};
  min-width: 110px; /* Ensure consistent button width */
  flex: 1;
  text-align: center;

  &:hover {
    background-color: ${({ theme }) => theme.backgroundHover};
    color: ${({ theme }) => theme.heading};
    border-color: ${({ theme }) => theme.primary};
    transform: translateY(-3px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const ReadDocLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.primary};
  color: white; /* Always white for contrast */
  border-radius: var(--border-radius);
  text-decoration: none;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s ease;
  min-width: 110px; /* Ensure consistent button width */
  flex: 1;
  text-align: center;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
    color: white; /* Ensure text stays white on hover */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-3px);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: 3rem 0;
  grid-column: 1 / -1;

  h3 {
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.heading};
    font-size: 1.25rem;
  }

  p {
    color: ${({ theme }) => theme.textSecondary};
    max-width: 500px;
    margin: 0 auto;
    line-height: 1.5;
  }
`;

const Documentations: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDocs = documentationsData.filter(
    (doc) =>
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SectionTitle
        title="Documentations"
        subtitle="Guides, tutorials, and resources I've created"
      />

      <GradientDivider
        width="70%"
        height="3px"
        margin="1.5rem auto 2rem"
        gradientStart="#6a11cb"
        gradientEnd="#2575fc"
      />

      <SearchSection>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search documentations..."
            value={searchTerm}
            onChange={handleSearch}
          />
          <SearchIcon>{renderIcon(FaSearch)}</SearchIcon>
        </SearchContainer>
      </SearchSection>

      <DocsGrid>
        {filteredDocs.length > 0 ? (
          filteredDocs.map((doc) => (
            <DocCard
              key={doc.id}
              docId={doc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <DocImage>
                <img
                  src={doc.image}
                  alt={doc.title}
                  onError={(e) => {
                    handleImageError(e, doc.title);
                  }}
                />
              </DocImage>

              <DocContent>
                <DocTitle>{doc.title}</DocTitle>
                <DocDescription>{doc.description}</DocDescription>

                <TagsContainer>
                  {doc.tags.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                  ))}
                </TagsContainer>

                <DocActions>
                  <DocLink
                    href={doc.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {renderIcon(FaGithub)} View Repo
                  </DocLink>
                  <ReadDocLink
                    href={doc.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {renderIcon(FaBook)} Read Doc
                  </ReadDocLink>
                </DocActions>
              </DocContent>
            </DocCard>
          ))
        ) : (
          <NoResults>
            <h3>No documentation found</h3>
            <p>
              Try adjusting your search term to find what you're looking for.
            </p>
          </NoResults>
        )}
      </DocsGrid>
    </Container>
  );
};

export default Documentations;
