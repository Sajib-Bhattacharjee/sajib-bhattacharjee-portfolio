import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";

// Real project data with unique gradients for each project
export const projectsData = [
  {
    id: "react-ecommerce-website",
    title: "React Ecommerce Website",
    description:
      "A fully responsive ecommerce website with product catalog, cart functionality, and checkout process.",
    longDescription: `This full-featured ecommerce platform was built to provide small businesses with a professional online presence. The website includes a responsive product catalog with filtering capabilities, shopping cart functionality with persistent storage, and a streamlined checkout process.

Key features include:
• Responsive design that works across all devices
• Product categorization and search functionality
• Cart management with local storage
• User authentication system
• Order tracking and history
• Admin dashboard for inventory management`,
    challenges:
      "The main challenge was creating a seamless shopping experience while ensuring the website performed well on all devices. Implementing the cart functionality with persistent storage required careful state management.",
    solution:
      "I utilized local storage for cart persistence and implemented responsive design patterns to ensure a consistent experience across all screen sizes. The product filtering system was optimized for quick searches and category browsing.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Redux",
      "LocalStorage API",
    ],
    image: "/images/projects/react-ecommerce-website.png",
    imageAlt: "Screenshot of Ecommerce Website showing product catalog",
    additionalImages: [
      "/images/projects/react-ecommerce-website-detail1.png",
      "/images/projects/react-ecommerce-website-detail2.png",
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    category: "web",
    githubUrl: "https://github.com/Sajib-Bhattacharjee/ecommerce-frontend",
    liveUrl: "https://sbc-express.netlify.app/",
    gradient: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
  },

  {
    id: "sbc-blog",
    title: "SBC's Blog Website",
    description:
      "A blog platform built with React featuring article categorization, commenting system, and responsive design.",
    longDescription: `SBC's Blog Website is a modern blogging platform designed to offer a seamless writing and reading experience. Built using React and Bootstrap, it allows users to explore categorized blog posts, engage in discussions through comments, and enjoy a responsive layout optimized for all devices.

Key features include:
• Categorized blog articles with search functionality
• Individual blog pages with full content and comments
• Commenting system for user engagement
• Clean and modern UI with responsive design
• Easily extensible structure for future enhancements`,
    challenges:
      "Implementing the comment system with dynamic rendering and maintaining state consistency across blog posts required careful planning. Ensuring responsiveness across various screen sizes was also a key challenge.",
    solution:
      "I used React state management and component structure to handle dynamic data rendering, and Bootstrap’s responsive grid system to ensure a smooth experience across all device types.",
    technologies: ["React.js", "Redux", "React-Typescript", "React-Bootstrap"],
    image: "/images/projects/blog-website.png",
    imageAlt: "SBC's Blog homepage with featured articles",
    additionalImages: [
      "/images/projects/blog-website-detail1.png",
      "/images/projects/blog-website-detail2.png",
    ],
    tags: ["React.js", "Typescript", "Redux"],
    category: "web",
    githubUrl: "https://github.com/Sajib-Bhattacharjee/blog-website-2025",
    liveUrl: "https://sbcblog.netlify.app/",
    gradient: "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)",
  },
  {
    id: "e-learning-platform",
    title: "E-Learning Platform",
    description:
      "A platform for online education with courses, lessons, and interactive learning materials.",
    longDescription: `This e-learning platform was designed to provide an engaging educational experience with a focus on interactive learning. The platform includes a course catalog, lesson tracking, and progress monitoring.

Key features include:
• Course categorization and search
• Video lesson playback with progress tracking
• Interactive quizzes and assessments
• Student dashboard for tracking course completion
• Instructor tools for creating and managing courses
• Certificate generation for completed courses`,
    challenges:
      "Creating an intuitive user interface that worked well for both students and instructors was challenging. Additionally, implementing the video player with progress tracking required careful state management.",
    solution:
      "I developed a dual-interface system with role-based access control, allowing different features for students and instructors. The video player implementation uses browser storage to track progress and resume playback.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    image: "/images/projects/e-learning-platform.png",
    imageAlt: "E-Learning Platform interface showing course categories",
    additionalImages: [
      "/images/projects/e-learning-platform-detail1.png",
      "/images/projects/e-learning-platform-detail2.png",
    ],
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    category: "web",
    githubUrl: "https://github.com/Sajib-Bhattacharjee/e-learning-platform",
    liveUrl: "https://developerzone2025.netlify.app/",
    gradient: "linear-gradient(135deg, #f83600 0%, #f9d423 100%)",
  },

  {
    id: "ecommerce-website",
    title: "Static Ecommerce Frontend Website",
    description:
      "A fully responsive ecommerce front-end interface showcasing a modern product catalog and intuitive UI design.",
    longDescription: `This static ecommerce frontend project was built to simulate a real-world online store experience using only HTML, CSS, Bootstrap, and JavaScript. The website features a responsive layout, interactive UI components, and mock cart functionality using browser storage.

Key features include:
• Modern product catalog with category filtering
• Clean homepage with featured sections and call-to-action
• Responsive layout compatible with all screen sizes
• Static cart system using JavaScript and local storage
• Navigation, product details, and UI transitions using vanilla JS
• Bootstrap integration for a mobile-first design`,
    challenges:
      "Building cart-like functionality without backend logic required careful JavaScript manipulation and state emulation using local storage. Ensuring cross-device responsiveness while keeping the UI clean and simple was another key focus.",
    solution:
      "I utilized vanilla JavaScript to simulate cart behavior and used Bootstrap’s grid system to achieve a responsive layout. Each section was modularized for clarity and future backend integration.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    image: "/images/projects/ecommerce.png",
    imageAlt:
      "Screenshot of Static Ecommerce Frontend Website showing product catalog",
    additionalImages: [
      "/images/projects/ecommerce-detail1.png",
      "/images/projects/ecommerce-detail2.png",
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    category: "web",
    githubUrl: "https://github.com/Sajib-Bhattacharjee/ecommerce-frontend",
    liveUrl: "https://sbc-express.netlify.app/",
    gradient: "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
  },
  {
    id: "smartedu-education",
    title: "SmartEdu - Online Education",
    description:
      "A modern online education website designed to offer responsive course listings, interactive UI, and seamless navigation.",
    longDescription: `SmartEdu is a fully responsive front-end education website built using HTML, CSS, Bootstrap, JavaScript, and React. It was developed to serve as a user-friendly platform for online learners and institutions alike, with a clean design and modern UI.

Key features include:
• Course listing with filtering and categorization
• Clean homepage with hero section and call-to-action
• About, Courses, Testimonials, and Contact sections
• Interactive and responsive UI across devices
• Modular and reusable components in React`,
    challenges:
      "Integrating Bootstrap components into React while maintaining consistent UI and responsive behavior posed a challenge. Structuring the layout to work seamlessly across mobile and desktop was also complex.",
    solution:
      "I modularized each UI section into React components and applied Bootstrap classes effectively for consistent styling. JavaScript was used to add interactivity like sliders and navigation toggles, while ensuring responsive behavior across breakpoints.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "React"],
    image: "/images/projects/smartedu-website.png",
    imageAlt:
      "SmartEdu homepage featuring online courses and educational content",
    additionalImages: [
      "/images/projects/smartedu-detail1.png",
      "/images/projects/smartedu-detail2.png",
    ],
    tags: ["Bootstrap", "JavaScript", "React"],
    category: "web",
    githubUrl: "https://github.com/Sajib-Bhattacharjee/smartedu-ai-powered",
    liveUrl: "https://smartedu2025.netlify.app/",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  },
  {
    id: "crypto-currency",
    title: "Crypto Currency Website",
    description:
      "A website for monitoring cryptocurrency prices and trends with real-time data visualization.",
    image: "/images/projects/crypto-currency.png",
    imageAlt: "Cryptocurrency dashboard with price charts and metrics",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    category: "web",
    githubUrl:
      "https://github.com/Sajib-Bhattacharjee/1.Crypto-Currency-Website-Project-1",
    liveUrl: "https://xyz-crypto2025.netlify.app/",
    gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
  },

  {
    id: "ecommerce-product-landing",
    title: "Product Landing Page",
    description:
      "A modern product landing page showcasing ecommerce products with detailed information and calls to action.",
    image: "/images/projects/product-landing-page.png",
    imageAlt: "Product landing page with featured product showcase",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "web",
    githubUrl:
      "https://github.com/Sajib-Bhattacharjee/e-commerce-product-landing-page",
    liveUrl: "https://ecommerceproductlandingpage.netlify.app/",
    gradient: "linear-gradient(135deg, #00c6fb 0%, #005bea 100%)",
  },

  {
    id: "react-portfolio",
    title: "React JS Portfolio",
    description:
      "A personal portfolio website built with React showcasing projects, skills, and experience.",
    image: "/images/projects/react-portfolio.png",
    imageAlt: "React portfolio website homepage",
    tags: ["HTML", "CSS", "React.js"],
    category: "portfolio",
    githubUrl: "https://github.com/Sajib-Bhattacharjee/portfolio",
    liveUrl: "https://sajib-bhattacharjee2025.netlify.app/",
    gradient: "linear-gradient(135deg, #6a11cb 0%, #fc466b 100%)",
  },
  {
    id: "react-pollmaster",
    title: "React PollMaster",
    description:
      "An AI-powered polling application for creating and managing polls with real-time results.",
    image: "/images/projects/poll-master.png",
    imageAlt: "PollMaster app showing active poll and voting interface",
    tags: ["React.js", "AI"],
    category: "tools",
    githubUrl:
      "https://github.com/Sajib-Bhattacharjee/ai-powered-polling-app-react-project-3",
    liveUrl: "https://pollmasterapp.netlify.app/",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  },

  {
    id: "currency-converter",
    title: "Currency Converter",
    description:
      "A tool for converting between different currencies with up-to-date exchange rates.",
    image: "/images/projects/currency-converter.png",
    imageAlt: "Currency converter tool with exchange rate calculations",
    tags: ["HTML", "CSS", "Bootstrap"],
    category: "tools",
    githubUrl:
      "https://github.com/Sajib-Bhattacharjee/bootstrap-currency-converter-website",
    liveUrl: "https://curreccy-converter.netlify.app/",
    gradient: "linear-gradient(135deg, #ff0844 0%, #ffb199 100%)",
  },
  {
    id: "typing-speed-test",
    title: "Typing Speed Test",
    description:
      "An interactive application to test and improve typing speed with analytics and performance tracking.",
    image: "/images/projects/typing-test.png",
    imageAlt: "Typing speed test app showing text input area and speed metrics",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    category: "tools",
    githubUrl:
      "https://github.com/Sajib-Bhattacharjee/ai-powered-typing-speed-testing-app-react-project-2",
    liveUrl: "https://typingspeedtest2025.netlify.app/",
    gradient: "linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)",
  },
  {
    id: "photo-gallery",
    title: "Photo Gallery",
    description:
      "An AI-powered photo gallery with filtering, search, and image optimization capabilities.",
    image: "/images/projects/photo-gallery.png",
    imageAlt: "Photo gallery with grid layout of image thumbnails",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "media",
    githubUrl:
      "https://github.com/Sajib-Bhattacharjee/ai-powered-photo-gallery",
    liveUrl: "https://photogellery2025.netlify.app/",
    gradient: "linear-gradient(135deg, #48c6ef 0%, #6f86d6 100%)",
  },
  {
    id: "music-player",
    title: "Music Player",
    description:
      "An AI-powered music player with playlist management, audio visualization, and customizable themes.",
    image: "/images/projects/music-player.png",
    imageAlt: "Music player interface with playlist and audio controls",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "media",
    githubUrl:
      "https://github.com/Sajib-Bhattacharjee/ai-powered-music-player-javascript-project-2",
    liveUrl: "https://musicplayer2025.netlify.app/",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    id: "static-blog",
    title: "Blog Website (Static)",
    description:
      "A static blog website with clean design, article categories, and responsive layout.",
    image: "/images/projects/static-blog.png",
    imageAlt: "Static blog layout with article previews",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "web",
    githubUrl: "https://github.com/Sajib-Bhattacharjee/my-blog-website",
    liveUrl: "https://sajib-bhattacharjee.github.io/my-blog-website/",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
  {
    id: "bootstrap-portfolio",
    title: "Bootstrap Portfolio",
    description:
      "A personal portfolio website built with Bootstrap featuring projects, skills, and contact information.",
    image: "/images/projects/bootstrap-portfolio.png",
    imageAlt: "Bootstrap portfolio website with skills section",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    category: "portfolio",
    githubUrl:
      "https://github.com/Sajib-Bhattacharjee/using-bootstrap-personal-portfolio-for-zahan",
    liveUrl:
      "https://sajib-bhattacharjee.github.io/using-bootstrap-personal-portfolio-for-zahan/",
    gradient: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)",
  },
  {
    id: "landing-page",
    title: "Landing Page",
    description:
      "An AI-powered landing page with modern design, animations, and call-to-action sections.",
    image: "/images/projects/landing-page.png",
    imageAlt: "Modern landing page with hero section and CTA buttons",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "web",
    githubUrl: "https://github.com/Sajib-Bhattacharjee/ai-powered-landing-page",
    liveUrl: "https://landingpage2025.netlify.app/",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  },

  {
    id: "js-task-manager",
    title: "JS Task Manager (Trello Clone)",
    description:
      "An AI-powered task management application similar to Trello with drag-and-drop functionality and task categorization.",
    image: "/images/projects/task-manager.png",
    imageAlt: "Task manager with Kanban board layout showing task cards",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "tools",
    githubUrl:
      "https://github.com/Sajib-Bhattacharjee/ai-powered-trello-task-manager-javascript-project-3",
    liveUrl: "https://jstaskmanager2025.netlify.app/",
    gradient: "linear-gradient(135deg, #f83600 0%, #fe8c00 100%)",
  },
  {
    id: "js-portfolio-2024",
    title: "JavaScript Portfolio (2024)",
    description:
      "A 2024 portfolio website built with vanilla JavaScript featuring interactive elements and smooth animations.",
    image: "/images/projects/js-portfolio.png",
    imageAlt: "JavaScript portfolio website with animated interface elements",
    tags: ["HTML", "CSS", "JavaScript"],
    category: "portfolio",
    githubUrl: "https://github.com/Sajib-Bhattacharjee/my-portfolio-2024",
    liveUrl: "https://sajib-bhattacharjee2024.netlify.app/",
    gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
  },
];

// Get all unique categories from projects
const allCategories = [
  "all",
  ...Array.from(new Set(projectsData.map((project) => project.category))),
];

const Projects: React.FC = () => {
  const [projects, setProjects] = useState(projectsData);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter projects based on category and search term
  useEffect(() => {
    let filteredProjects = projectsData;

    // Filter by category
    if (activeCategory !== "all") {
      filteredProjects = filteredProjects.filter(
        (project) => project.category === activeCategory
      );
    }

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filteredProjects = filteredProjects.filter(
        (project) =>
          project.title.toLowerCase().includes(term) ||
          project.description.toLowerCase().includes(term) ||
          project.tags.some((tag) => tag.toLowerCase().includes(term))
      );
    }

    setProjects(filteredProjects);
  }, [activeCategory, searchTerm]);

  return (
    <ProjectsContainer>
      <SectionTitle title="My Projects" subtitle="Recent Work" />

      <FiltersContainer>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchContainer>

        <CategoriesContainer>
          {allCategories.map((category, index) => (
            <CategoryButton
              key={index}
              active={category === activeCategory}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </CategoryButton>
          ))}
        </CategoriesContainer>
      </FiltersContainer>

      <ProjectsGrid>
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard
                {...project}
                category={project.category || "Project"}
                index={index}
              />
            </motion.div>
          ))
        ) : (
          <NoResults>
            <h3>No projects found</h3>
            <p>Try changing your search criteria</p>
          </NoResults>
        )}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const FiltersContainer = styled.div`
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const SearchContainer = styled.div`
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
    width: 300px;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  background-color: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.text};
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.textSecondary};
  }
`;

const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

interface CategoryButtonProps {
  active: boolean;
}

const CategoryButton = styled.button<CategoryButtonProps>`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: 1px solid
    ${({ theme, active }) => (active ? theme.primary : theme.borderColor)};
  background-color: ${({ theme, active }) =>
    active ? theme.primary : "transparent"};
  color: ${({ theme, active }) => (active ? "white" : theme.text)};
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme, active }) =>
      active ? theme.primary : theme.backgroundSecondary};
    border-color: ${({ theme }) => theme.primary};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const NoResults = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  padding: 3rem;
  color: ${({ theme }) => theme.textSecondary};

  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
  }
`;

export default Projects;
