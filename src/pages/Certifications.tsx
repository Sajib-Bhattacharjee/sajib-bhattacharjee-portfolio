import React, { useState, useEffect, useMemo, useRef } from "react";
import styled, { css } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaFilePdf } from "react-icons/fa";
import { HiFilter, HiShare } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { renderIcon } from "../utils/iconHelpers";
import SectionTitle from "../components/SectionTitle";
import GradientDivider from "../components/GradientDivider";

// Global CSS Variables for both light and dark mode
const darkModeStyles = css`
  /* Dark mode specific styles */
  --dark-text: #222;
  --light-text: #f0f0f0;
  --card-text: var(--dark-text);
  --badge-bg: rgba(255, 255, 255, 0.85);
  --badge-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  --card-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  --card-hover-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  --card-active-shadow: 0 10px 35px rgba(0, 0, 0, 0.25);
`;

// Styled Components with responsive design
const Container = styled(motion.div)`
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const FiltersContainer = styled.div`
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const FilterToggle = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 0.7rem 1.2rem;
  border-radius: var(--border-radius);
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 1rem;

  svg {
    font-size: 0.9rem;
  }
`;

interface FilterOptionsProps {
  isOpen: boolean;
}

const FilterOptions = styled.div<FilterOptionsProps>`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  background-color: var(--card-background);
  border-radius: var(--border-radius);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const FilterSection = styled.div`
  margin-bottom: 1.2rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const FilterLabel = styled.div`
  font-weight: 500;
  margin-bottom: 0.8rem;
  color: var(--text-color);
`;

const FilterButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

interface FilterButtonProps {
  isActive: boolean;
}

const FilterButton = styled(motion.button)<FilterButtonProps>`
  background-color: ${(props) =>
    props.isActive ? "var(--primary-color)" : "var(--light-background)"};
  color: ${(props) => (props.isActive ? "white" : "var(--text-color)")};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  cursor: pointer;
  font-size: 0.9rem;

  &:hover {
    background-color: ${(props) =>
      props.isActive ? "var(--primary-color)" : "var(--border-color)"};
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: 3rem 0;
  color: var(--text-color);
  font-size: 1.1rem;
`;

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
`;

// Update the getIssuerGradient function to respect dark mode
const getIssuerGradient = (issuer: string) => {
  switch (issuer) {
    case "freeCodeCamp":
      return "linear-gradient(135deg, #0a0a23, #1b1b32)";
    case "Udemy":
      return "linear-gradient(135deg, #ec5252, #6e1a52)";
    case "Sololearn":
      return "linear-gradient(135deg, #16a9df, #0d3852)";
    default:
      return "linear-gradient(135deg, #f3f4f6, #e5e7eb)";
  }
};

// Get unique gradient color for each certificate card based on ID and theme
const getCertificateGradient = (id: number) => {
  // Collection of beautiful gradients that work in both light and dark modes
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
    "linear-gradient(135deg, #FF6CAB, #7366FF)",
    "linear-gradient(135deg, #F6D365, #FDA085)",
    "linear-gradient(135deg, #00B4DB, #0083B0)",
    "linear-gradient(135deg, #F46B45, #EEA849)",
    "linear-gradient(135deg, #6A11CB, #2575FC)",
    "linear-gradient(135deg, #536976, #BBD2C5)",
    "linear-gradient(135deg, #9796F0, #FBC7D4)",
    "linear-gradient(135deg, #3EECAC, #EE74E1)",
  ];

  // Create a more unique distribution
  return gradients[(id * 7) % gradients.length];
};

// Update CertificateCard to use only gradient styling and no background color
const CertificateCard = styled(motion.div)<{ certId: number }>`
  background: ${(props) => getCertificateGradient(props.certId)};
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--card-shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }

  &:hover {
    box-shadow: var(--card-hover-shadow);
    transform: translateY(-5px);
  }
`;

// Update CertificateImage to respect dark mode and fix image display
const CertificateImage = styled.div<{ issuer: string }>`
  position: relative;
  height: 180px;
  overflow: hidden;
  background: ${(props) => getIssuerGradient(props.issuer)};
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: attr(data-issuer);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 1.5rem;
    font-weight: 600;
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
    letter-spacing: 1px;
    z-index: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    transition: transform 0.5s ease;
    position: relative;
    z-index: 1;

    &.loading-failed {
      display: none;
    }
  }

  @media (max-width: 768px) {
    height: 160px;
  }

  ${CertificateCard}:hover & img:not(.loading-failed) {
    transform: scale(1.05);
  }
`;

// Modify the CategoryBadge and IssuerBadge to use the new variables
const CategoryBadge = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: var(--badge-bg, rgba(255, 255, 255, 0.85));
  color: var(--dark-text, #222);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  z-index: 2;
  box-shadow: var(--badge-shadow, 0 2px 4px rgba(0, 0, 0, 0.15));

  @media (max-width: 480px) {
    font-size: 0.7rem;
    padding: 0.25rem 0.7rem;
  }
`;

const IssuerBadge = styled.span`
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: var(--badge-bg, rgba(255, 255, 255, 0.85));
  color: var(--dark-text, #222);
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  z-index: 2;
  box-shadow: var(--badge-shadow, 0 2px 4px rgba(0, 0, 0, 0.15));

  @media (max-width: 480px) {
    font-size: 0.7rem;
    padding: 0.25rem 0.7rem;
  }
`;

// Update CertificateContent to have a transparent background
const CertificateContent = styled.div`
  padding: 1.5rem;
  background: ${({ theme }) =>
    `${theme.cardBackground}E6`}; /* Semi-transparent background */
  backdrop-filter: blur(5px);
  border-top: 1px solid ${({ theme }) => theme.borderColor};
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    padding: 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

// Update CertificateTitle to ensure visibility against gradient backgrounds
const CertificateTitle = styled.h3`
  margin: 0 0 0.5rem;
  color: ${({ theme }) => theme.heading};
  font-size: 1.25rem;
  font-weight: 600;
  position: relative;
  display: inline-block;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 2.5rem;
    height: 2px;
    background: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const CertificateDate = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.9rem;
  margin: 0 0 0.8rem;
`;

const CertificateDescription = styled.p`
  color: ${({ theme }) => theme.text};
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0 0 1.5rem;
  height: 4.5rem; /* Exactly 3 lines of text (1.5 line-height × 3) */
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 1.2rem;
    height: 4.05rem; /* 0.9rem font-size × 1.5 line-height × 3 lines */
  }
`;

const CertificateActions = styled.div`
  display: flex;
  gap: 0.8rem;

  @media (max-width: 480px) {
    justify-content: space-between;
  }
`;

const CertificateLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  padding: 0.6rem 1.2rem;
  border-radius: var(--border-radius);
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &.download {
    background-color: ${({ theme }) => theme.cardBackgroundAlt};
    color: ${({ theme }) => theme.text};
    border: 1px solid ${({ theme }) => theme.borderColor};
  }

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    background-color: ${({ theme }) => theme.secondary};
    color: white;

    &.download {
      background-color: ${({ theme }) => theme.backgroundHover};
    }
  }

  svg {
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    flex: 1;
    justify-content: center;
  }
`;

// Certification data
interface CertificationType {
  id: number;
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  certificateUrl: string;
  pdfUrl?: string;
  category: string;
}

const certificationsData: CertificationType[] = [
  {
    id: 1,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2023",
    description:
      "Comprehensive curriculum covering HTML5, CSS3, responsive design principles, and accessibility best practices.",
    image: "/images/certificates/freecodecamp-responsive.png",
    certificateUrl:
      "https://www.freecodecamp.org/certification/sajib-bhattacharjee/responsive-web-design",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Front End Development Libraries",
    issuer: "freeCodeCamp",
    date: "2023",
    description:
      "Advanced front-end development with Bootstrap, jQuery, Sass, React, and Redux.",
    image: "/images/certificates/freecodecamp-frontend.png",
    certificateUrl:
      "https://www.freecodecamp.org/certification/sajib-bhattacharjee/front-end-development-libraries",
    category: "Web Development",
  },
  {
    id: 3,
    title: "Master HTML and CSS by building real world projects",
    issuer: "Udemy",
    date: "2023",
    description: "Web development fundamentals and best practices.",
    image: "/images/certificates/udemy-web.png",
    certificateUrl:
      "https://www.udemy.com/certificate/UC-f067895a-ff59-408e-a91a-e5ecb5032163/",
    category: "Web Development",
  },
  {
    id: 4,
    title: "VSCode Shortcuts & Extensions for Web Developers",
    issuer: "Udemy",
    date: "2023",
    description:
      "Productivity optimization for web developers using Visual Studio Code.",
    image: "/images/certificates/udemy-vscode.png",
    certificateUrl:
      "https://www.udemy.com/certificate/UC-4b70d9dd-f9c8-4959-a993-fd28660edcc8/",
    category: "Developer Tools",
  },
  {
    id: 5,
    title: "Master Git and GitHub – Beginner to Expert",
    issuer: "Udemy",
    date: "2023",
    description:
      "Version control fundamentals and advanced GitHub workflows for collaborative development.",
    image: "/images/certificates/udemy-git.png",
    certificateUrl:
      "https://www.udemy.com/certificate/UC-1b4e69e3-8f12-443b-b061-ba7136203989/",
    category: "Developer Tools",
  },
  {
    id: 6,
    title: "CSS and JavaScript Complete Course for Beginners",
    issuer: "Udemy",
    date: "2023",
    description:
      "Fundamentals of CSS styling and JavaScript programming for web development.",
    image: "/images/certificates/udemy-css-js.png",
    certificateUrl:
      "https://www.udemy.com/certificate/UC-4164f987-c366-4cb3-9caa-ba315286c9fd/",
    category: "Web Development",
  },
  {
    id: 7,
    title: "Internet and Web Development Fundamentals",
    issuer: "Udemy",
    date: "2023",
    description:
      "Core concepts of internet architecture and web development foundations.",
    image: "/images/certificates/udemy-webdev.png",
    certificateUrl:
      "https://www.udemy.com/certificate/UC-4d4753f1-4a54-4dab-9e7a-3d24c6568dd5/",
    category: "Web Development",
  },
  {
    id: 8,
    title: "Complete Guide Webservices API Testing with Postman",
    issuer: "Udemy",
    date: "2023",
    description:
      "Comprehensive training on testing RESTful APIs and web services using Postman.",
    image: "/images/certificates/udemy-postman.png",
    certificateUrl:
      "https://www.udemy.com/certificate/UC-4b24f380-634d-4289-a4f0-1097343f8e99/",
    category: "API & Testing",
  },
  {
    id: 9,
    title: "Introduction to JavaScript",
    issuer: "Sololearn",
    date: "2023",
    description:
      "JavaScript basics for beginners, including syntax, functions, and DOM manipulation.",
    image: "/images/certificates/sololearn-js-intro.png",
    certificateUrl: "https://www.sololearn.com/certificates/CC-5LALBQBK",
    category: "Programming",
  },
  {
    id: 10,
    title: "Introduction to C++",
    issuer: "Sololearn",
    date: "2023",
    description:
      "Fundamentals of C++ programming language, syntax, and object-oriented concepts.",
    image: "/images/certificates/sololearn-cpp-intro.png",
    certificateUrl: "https://www.sololearn.com/certificates/CC-8X9WRX6I",
    category: "Programming",
  },
  {
    id: 11,
    title: "Introduction to Java",
    issuer: "Sololearn",
    date: "2023",
    description:
      "Core Java programming concepts, object-oriented principles, and Java syntax.",
    image: "/images/certificates/sololearn-java-intro.png",
    certificateUrl: "https://www.sololearn.com/certificates/CC-KVJ3XE0Z",
    category: "Programming",
  },
  {
    id: 12,
    title: "Introduction to C#",
    issuer: "Sololearn",
    date: "2023",
    description:
      "Fundamentals of C# programming with focus on .NET platform capabilities.",
    image: "/images/certificates/sololearn-csharp-intro.png",
    certificateUrl: "https://www.sololearn.com/certificates/CC-62YC1W0Y",
    category: "Programming",
  },
  {
    id: 13,
    title: "C Intermediate",
    issuer: "Sololearn",
    date: "2023",
    description:
      "Advanced C programming concepts, memory management, and data structures.",
    image: "/images/certificates/sololearn-c-inter.png",
    certificateUrl: "https://www.sololearn.com/certificates/CC-WFAP8R5O",
    category: "Programming",
  },
  {
    id: 14,
    title: "JavaScript",
    issuer: "Sololearn",
    date: "2023",
    description:
      "Comprehensive JavaScript programming from basics to advanced concepts.",
    image: "/images/certificates/sololearn-js.png",
    certificateUrl: "https://www.sololearn.com/certificates/CC-UI1MUTRG",
    category: "Web Development",
  },
  {
    id: 15,
    title: "C++ Intermediate",
    issuer: "Sololearn",
    date: "2023",
    description:
      "Advanced C++ topics including STL, templates, and modern C++ features.",
    image: "/images/certificates/sololearn-cpp-inter.png",
    certificateUrl: "https://www.sololearn.com/certificates/CC-ADQZDD7Y",
    category: "Programming",
  },
  {
    id: 16,
    title: "Introduction to C",
    issuer: "Sololearn",
    date: "2023",
    description:
      "Fundamental concepts of C programming language and imperative programming.",
    image: "/images/certificates/sololearn-c-intro.png",
    certificateUrl: "https://www.sololearn.com/certificates/CC-QT6ADPHL",
    category: "Programming",
  },
  {
    id: 17,
    title: "Intermediate SQL",
    issuer: "Sololearn",
    date: "2023",
    description:
      "Advanced SQL techniques for database querying, management, and optimization.",
    image: "/images/certificates/sololearn-sql-inter.png",
    certificateUrl: "https://www.sololearn.com/certificates/CC-AZKREWUE",
    category: "Database",
  },
  {
    id: 18,
    title: "JavaScript Intermediate",
    issuer: "Sololearn",
    date: "2023",
    description:
      "Advanced JavaScript concepts including asynchronous programming, closures, and ES6+ features.",
    image: "/images/certificates/sololearn-js-inter.png",
    certificateUrl: "https://www.sololearn.com/certificates/CC-RRGSR1OX",
    category: "Web Development",
  },
  {
    id: 19,
    title: "Tech for Everyone",
    issuer: "Sololearn",
    date: "2023",
    description:
      "Overview of key technology concepts and digital literacy for all backgrounds.",
    image: "/images/certificates/sololearn-tech.png",
    certificateUrl: "https://www.sololearn.com/certificates/CC-BW8T5KKN",
    category: "General Technology",
  },
  {
    id: 20,
    title: "Web Development",
    issuer: "Sololearn",
    date: "2023",
    description:
      "Full-stack web development including HTML, CSS, JavaScript, and responsive design.",
    image: "/images/certificates/sololearn-webdev.png",
    certificateUrl: "https://www.sololearn.com/certificates/CC-LCY7JKRN",
    category: "Web Development",
  },
  {
    id: 21,
    title: "Introduction to CSS",
    issuer: "Sololearn",
    date: "2023",
    description:
      "CSS fundamentals for styling web pages with modern design techniques.",
    image: "/images/certificates/sololearn-css-intro.png",
    certificateUrl: "https://www.sololearn.com/certificates/CC-Y3LWDDOZ",
    category: "Web Development",
  },
];

// Get unique issuers and categories for filters
const getUniqueIssuers = () => {
  const issuers = certificationsData.map((cert) => cert.issuer);
  return ["All", ...Array.from(new Set(issuers))];
};

const getUniqueCategories = () => {
  const categories = certificationsData.map((cert) => cert.category);
  return ["All", ...Array.from(new Set(categories))];
};

// New component for search functionality
const SearchContainer = styled.div`
  position: relative;
  margin-bottom: 1.5rem;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem 0.8rem 2.8rem;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  background-color: var(--input-background);
  color: var(--text-color);
  font-size: 0.95rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.2);
  }

  @media (max-width: 480px) {
    padding: 0.7rem 1rem 0.7rem 2.6rem;
    font-size: 0.9rem;
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--secondary-text-color);
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 1.1rem;
  }
`;

// Custom hook for filtering certificates with localStorage persistence
const useCertificationsFilter = (certificates: CertificationType[]) => {
  // Try to load saved preferences from localStorage
  const getSavedPreference = (key: string, defaultValue: string) => {
    try {
      const saved = localStorage.getItem(`cert-filter-${key}`);
      return saved !== null ? saved : defaultValue;
    } catch (error) {
      console.error("Error accessing localStorage:", error);
      return defaultValue;
    }
  };

  const [activeIssuer, setActiveIssuer] = useState(
    getSavedPreference("issuer", "All")
  );
  const [activeCategory, setActiveCategory] = useState(
    getSavedPreference("category", "All")
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Save filter preferences to localStorage when they change
  useEffect(() => {
    try {
      localStorage.setItem("cert-filter-issuer", activeIssuer);
      localStorage.setItem("cert-filter-category", activeCategory);
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [activeIssuer, activeCategory]);

  // Use useMemo to optimize performance by only recalculating when dependencies change
  const filteredCertifications = useMemo(() => {
    return certificates.filter((cert) => {
      const matchesIssuer =
        activeIssuer === "All" || cert.issuer === activeIssuer;
      const matchesCategory =
        activeCategory === "All" || cert.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cert.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesIssuer && matchesCategory && matchesSearch;
    });
  }, [certificates, activeIssuer, activeCategory, searchQuery]);

  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Function to reset all filters
  const resetFilters = () => {
    setActiveIssuer("All");
    setActiveCategory("All");
    setSearchQuery("");
  };

  return {
    activeIssuer,
    setActiveIssuer,
    activeCategory,
    setActiveCategory,
    searchQuery,
    setSearchQuery,
    isFilterOpen,
    toggleFilter,
    filteredCertifications,
    handleSearch,
    resetFilters,
  };
};

const ResetButton = styled(motion.button)`
  background-color: var(--light-background);
  color: var(--text-color);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  font-size: 0.9rem;
  cursor: pointer;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--border-color);
  }
`;

// Update the ShareTooltip component to be more visible and have better positioning
const ShareTooltip = styled(motion.div)<{ status: "success" | "error" }>`
  position: absolute;
  top: -40px;
  left: 0;
  background-color: ${(props) =>
    props.status === "success"
      ? "var(--success-color, #28a745)"
      : "var(--error-color, #dc3545)"};
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: var(--border-radius);
  font-size: 0.8rem;
  white-space: nowrap;
  z-index: 3;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  font-weight: 500;

  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 10px;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid
      ${(props) =>
        props.status === "success"
          ? "var(--success-color, #28a745)"
          : "var(--error-color, #dc3545)"};
  }
`;

// Update the share functionality to ensure it works properly
const useShareCertificate = () => {
  const [shareSuccess, setShareSuccess] = useState<number | null>(null);
  const [shareError, setShareError] = useState<number | null>(null);

  const shareCertificate = (certId: number, certUrl: string) => {
    try {
      // Either use the direct certificate URL or create a URL with our cert ID parameter
      const shareUrl =
        certUrl ||
        `${window.location.origin}${window.location.pathname}?cert=${certId}`;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard
          .writeText(shareUrl)
          .then(() => {
            setShareSuccess(certId);
            setTimeout(() => setShareSuccess(null), 2000);
          })
          .catch((err) => {
            console.error("Failed to copy:", err);
            setShareError(certId);
            setTimeout(() => setShareError(null), 2000);
          });
      } else {
        // Fallback for browsers without clipboard API
        const textArea = document.createElement("textarea");
        textArea.value = shareUrl;

        // Make the textarea out of viewport
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
          const successful = document.execCommand("copy");
          if (successful) {
            setShareSuccess(certId);
          } else {
            setShareError(certId);
          }
        } catch (err) {
          console.error("Fallback: Couldn't copy text", err);
          setShareError(certId);
        }

        document.body.removeChild(textArea);
        setTimeout(() => {
          setShareSuccess(null);
          setShareError(null);
        }, 2000);
      }
    } catch (error) {
      console.error("Share failed:", error);
      setShareError(certId);
      setTimeout(() => setShareError(null), 2000);
    }
  };

  return { shareCertificate, shareSuccess, shareError };
};

const CertificateShareLink = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 10px;
  left: 10px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  color: #333;
  cursor: pointer;
  z-index: 2;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease;

  &:hover {
    background-color: white;
    color: ${({ theme }) => theme.primary};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    width: 28px;
    height: 28px;
  }
`;

const Certifications: React.FC = () => {
  const {
    activeIssuer,
    setActiveIssuer,
    activeCategory,
    setActiveCategory,
    searchQuery,
    isFilterOpen,
    toggleFilter,
    filteredCertifications,
    handleSearch,
    resetFilters,
  } = useCertificationsFilter(certificationsData);

  const [activeIndex, setActiveIndex] = useState(-1);
  const { shareCertificate, shareSuccess, shareError } = useShareCertificate();
  const gridRef = useRef<HTMLDivElement>(null);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle if we have certificates
      if (filteredCertifications.length === 0) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setActiveIndex((prev) =>
            prev < filteredCertifications.length - 1 ? prev + 1 : prev
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
          break;
        case "Enter":
          if (activeIndex >= 0 && activeIndex < filteredCertifications.length) {
            // Navigate to certificate URL
            const cert = filteredCertifications[activeIndex];
            window.open(cert.certificateUrl, "_blank");
          }
          break;
        case "Escape":
          setActiveIndex(-1);
          if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [filteredCertifications, activeIndex]);

  // Reset active index when filters change
  useEffect(() => {
    setActiveIndex(-1);
  }, [activeIssuer, activeCategory, searchQuery]);

  // Get certificate counts
  const certificationCounts = useMemo(() => {
    const issuerCounts: Record<string, number> = {};
    const categoryCounts: Record<string, number> = {};

    certificationsData.forEach((cert) => {
      issuerCounts[cert.issuer] = (issuerCounts[cert.issuer] || 0) + 1;
      categoryCounts[cert.category] = (categoryCounts[cert.category] || 0) + 1;
    });

    return { issuerCounts, categoryCounts };
  }, []);

  // Handle URL params for direct certificate link
  useEffect(() => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const certId = urlParams.get("cert");

      if (certId) {
        const id = parseInt(certId, 10);
        const certIndex = certificationsData.findIndex(
          (cert) => cert.id === id
        );

        if (certIndex !== -1 && gridRef.current) {
          // Wait for render then scroll to certificate
          setTimeout(() => {
            const certElement = document.getElementById(`certificate-${id}`);
            if (certElement) {
              certElement.scrollIntoView({
                behavior: "smooth",
                block: "center",
              });
              setActiveIndex(certIndex);
            }
          }, 500);
        }
      }
    } catch (error) {
      console.error("Error handling URL params:", error);
    }
  }, []);

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SectionTitle
        title="Certifications"
        subtitle="My educational qualifications and certifications"
      />

      <GradientDivider
        width="100%"
        height="3px"
        margin="1.5rem auto 2rem"
        gradientStart="#6a11cb"
        gradientEnd="#2575fc"
      />

      <SearchContainer>
        <SearchIcon>{renderIcon(BiSearch)}</SearchIcon>
        <SearchInput
          type="text"
          placeholder="Search certifications..."
          value={searchQuery}
          onChange={handleSearch}
          aria-label="Search certifications"
        />
      </SearchContainer>

      <FiltersContainer>
        <FilterToggle
          onClick={toggleFilter}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {renderIcon(HiFilter)} Filters
        </FilterToggle>

        <FilterOptions isOpen={isFilterOpen}>
          <FilterSection>
            <FilterLabel>Filter by Issuer:</FilterLabel>
            <FilterButtonGroup>
              {getUniqueIssuers().map((issuer) => (
                <FilterButton
                  key={issuer}
                  isActive={activeIssuer === issuer}
                  onClick={() => setActiveIssuer(issuer)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {issuer}
                  {issuer !== "All" && (
                    <FilterCount>
                      {certificationCounts.issuerCounts[issuer] || 0}
                    </FilterCount>
                  )}
                </FilterButton>
              ))}
            </FilterButtonGroup>
          </FilterSection>

          <FilterSection>
            <FilterLabel>Filter by Category:</FilterLabel>
            <FilterButtonGroup>
              {getUniqueCategories().map((category) => (
                <FilterButton
                  key={category}
                  isActive={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                  {category !== "All" && (
                    <FilterCount>
                      {certificationCounts.categoryCounts[category] || 0}
                    </FilterCount>
                  )}
                </FilterButton>
              ))}
            </FilterButtonGroup>
          </FilterSection>

          <ResetButton
            onClick={resetFilters}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reset Filters
          </ResetButton>
        </FilterOptions>
      </FiltersContainer>

      <GradientDivider
        width="100%"
        height="3px"
        margin="1.5rem auto 2rem"
        gradientStart="#6a11cb"
        gradientEnd="#2575fc"
      />

      {filteredCertifications.length === 0 ? (
        <NoResults>No certifications found matching your filters.</NoResults>
      ) : (
        <>
          <ResultCount>
            Showing {filteredCertifications.length} of{" "}
            {certificationsData.length} certifications
          </ResultCount>
          <CertificationsGrid ref={gridRef}>
            <AnimatePresence>
              {activeIssuer === "All" && !searchQuery ? (
                // Display with issuer grouping when no specific filtering
                <>
                  {/* freeCodeCamp section */}
                  <IssuerHeading>freeCodeCamp</IssuerHeading>
                  {filteredCertifications
                    .filter((cert) => cert.issuer === "freeCodeCamp")
                    .map((cert, index) => (
                      <CertificateCard
                        key={cert.id}
                        certId={cert.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          scale: cert.id === activeIndex ? 1.02 : 1,
                          boxShadow:
                            cert.id === activeIndex
                              ? "var(--card-active-shadow)"
                              : "var(--card-shadow)",
                        }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        whileHover={{
                          y: -10,
                          boxShadow: "var(--card-hover-shadow)",
                        }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        tabIndex={0}
                        onFocus={() => setActiveIndex(cert.id)}
                        onBlur={() => setActiveIndex(-1)}
                        id={`certificate-${cert.id}`}
                      >
                        <CertificateImage
                          issuer="freeCodeCamp"
                          data-issuer="freeCodeCamp"
                        >
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className=""
                            onError={(e) => {
                              // First try to load a default image for the issuer
                              const target = e.currentTarget;
                              const fallbackSrc = `/images/certificates/${cert.issuer.toLowerCase()}-default.png`;

                              // Only try the fallback if the current source isn't already the fallback
                              if (
                                target.src !==
                                new URL(fallbackSrc, window.location.origin)
                                  .href
                              ) {
                                target.src = fallbackSrc;
                              } else {
                                // If fallback also fails, add class instead of changing display property
                                target.className = "loading-failed";
                              }
                            }}
                          />
                          <CategoryBadge>{cert.category}</CategoryBadge>
                          <IssuerBadge>{cert.issuer}</IssuerBadge>
                          <CertificateShareLink
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              shareCertificate(cert.id, cert.certificateUrl);
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label={`Share ${cert.title} certificate`}
                          >
                            {renderIcon(HiShare)}
                            {shareSuccess === cert.id && (
                              <ShareTooltip
                                status="success"
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                              >
                                Copied link!
                              </ShareTooltip>
                            )}
                            {shareError === cert.id && (
                              <ShareTooltip
                                status="error"
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                              >
                                Failed to copy
                              </ShareTooltip>
                            )}
                          </CertificateShareLink>
                        </CertificateImage>

                        <CertificateContent>
                          <CertificateTitle>{cert.title}</CertificateTitle>
                          <CertificateDate>{cert.date}</CertificateDate>
                          <CertificateDescription>
                            {cert.description}
                          </CertificateDescription>

                          <CertificateActions>
                            <CertificateLink
                              href={cert.certificateUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ y: -3 }}
                              whileTap={{ scale: 0.95 }}
                              aria-label={`View certificate for ${cert.title}`}
                            >
                              {renderIcon(FaExternalLinkAlt)} View
                            </CertificateLink>
                            {cert.pdfUrl && (
                              <CertificateLink
                                className="download"
                                href={cert.pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={`Download PDF for ${cert.title}`}
                              >
                                {renderIcon(FaFilePdf)} PDF
                              </CertificateLink>
                            )}
                          </CertificateActions>
                        </CertificateContent>
                      </CertificateCard>
                    ))}

                  {/* Divider between freeCodeCamp and Udemy */}
                  <IssuerDivider>
                    <GradientDivider
                      width="100%"
                      height="3px"
                      margin="2rem auto"
                      gradientStart="#ff9966"
                      gradientEnd="#ff5e62"
                    />
                  </IssuerDivider>

                  {/* Udemy section */}
                  <IssuerHeading>Udemy</IssuerHeading>
                  {filteredCertifications
                    .filter((cert) => cert.issuer === "Udemy")
                    .map((cert, index) => (
                      <CertificateCard
                        key={cert.id}
                        certId={cert.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          scale: cert.id === activeIndex ? 1.02 : 1,
                          boxShadow:
                            cert.id === activeIndex
                              ? "var(--card-active-shadow)"
                              : "var(--card-shadow)",
                        }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        whileHover={{
                          y: -10,
                          boxShadow: "var(--card-hover-shadow)",
                        }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        tabIndex={0}
                        onFocus={() => setActiveIndex(cert.id)}
                        onBlur={() => setActiveIndex(-1)}
                        id={`certificate-${cert.id}`}
                      >
                        <CertificateImage issuer="Udemy" data-issuer="Udemy">
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className=""
                            onError={(e) => {
                              // First try to load a default image for the issuer
                              const target = e.currentTarget;
                              const fallbackSrc = `/images/certificates/${cert.issuer.toLowerCase()}-default.png`;

                              // Only try the fallback if the current source isn't already the fallback
                              if (
                                target.src !==
                                new URL(fallbackSrc, window.location.origin)
                                  .href
                              ) {
                                target.src = fallbackSrc;
                              } else {
                                // If fallback also fails, add class instead of changing display property
                                target.className = "loading-failed";
                              }
                            }}
                          />
                          <CategoryBadge>{cert.category}</CategoryBadge>
                          <IssuerBadge>{cert.issuer}</IssuerBadge>
                          <CertificateShareLink
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              shareCertificate(cert.id, cert.certificateUrl);
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label={`Share ${cert.title} certificate`}
                          >
                            {renderIcon(HiShare)}
                            {shareSuccess === cert.id && (
                              <ShareTooltip
                                status="success"
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                              >
                                Copied link!
                              </ShareTooltip>
                            )}
                            {shareError === cert.id && (
                              <ShareTooltip
                                status="error"
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                              >
                                Failed to copy
                              </ShareTooltip>
                            )}
                          </CertificateShareLink>
                        </CertificateImage>

                        <CertificateContent>
                          <CertificateTitle>{cert.title}</CertificateTitle>
                          <CertificateDate>{cert.date}</CertificateDate>
                          <CertificateDescription>
                            {cert.description}
                          </CertificateDescription>

                          <CertificateActions>
                            <CertificateLink
                              href={cert.certificateUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ y: -3 }}
                              whileTap={{ scale: 0.95 }}
                              aria-label={`View certificate for ${cert.title}`}
                            >
                              {renderIcon(FaExternalLinkAlt)} View
                            </CertificateLink>
                            {cert.pdfUrl && (
                              <CertificateLink
                                className="download"
                                href={cert.pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={`Download PDF for ${cert.title}`}
                              >
                                {renderIcon(FaFilePdf)} PDF
                              </CertificateLink>
                            )}
                          </CertificateActions>
                        </CertificateContent>
                      </CertificateCard>
                    ))}

                  {/* Divider between Udemy and Sololearn */}
                  <IssuerDivider>
                    <GradientDivider
                      width="100%"
                      height="3px"
                      margin="2rem auto"
                      gradientStart="#00c6ff"
                      gradientEnd="#0072ff"
                    />
                  </IssuerDivider>

                  {/* Sololearn section */}
                  <IssuerHeading>Sololearn</IssuerHeading>
                  {filteredCertifications
                    .filter((cert) => cert.issuer === "Sololearn")
                    .map((cert, index) => (
                      <CertificateCard
                        key={cert.id}
                        certId={cert.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          scale: cert.id === activeIndex ? 1.02 : 1,
                          boxShadow:
                            cert.id === activeIndex
                              ? "var(--card-active-shadow)"
                              : "var(--card-shadow)",
                        }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        whileHover={{
                          y: -10,
                          boxShadow: "var(--card-hover-shadow)",
                        }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        tabIndex={0}
                        onFocus={() => setActiveIndex(cert.id)}
                        onBlur={() => setActiveIndex(-1)}
                        id={`certificate-${cert.id}`}
                      >
                        <CertificateImage
                          issuer="Sololearn"
                          data-issuer="Sololearn"
                        >
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className=""
                            onError={(e) => {
                              // First try to load a default image for the issuer
                              const target = e.currentTarget;
                              const fallbackSrc = `/images/certificates/${cert.issuer.toLowerCase()}-default.png`;

                              // Only try the fallback if the current source isn't already the fallback
                              if (
                                target.src !==
                                new URL(fallbackSrc, window.location.origin)
                                  .href
                              ) {
                                target.src = fallbackSrc;
                              } else {
                                // If fallback also fails, add class instead of changing display property
                                target.className = "loading-failed";
                              }
                            }}
                          />
                          <CategoryBadge>{cert.category}</CategoryBadge>
                          <IssuerBadge>{cert.issuer}</IssuerBadge>
                          <CertificateShareLink
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              shareCertificate(cert.id, cert.certificateUrl);
                            }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label={`Share ${cert.title} certificate`}
                          >
                            {renderIcon(HiShare)}
                            {shareSuccess === cert.id && (
                              <ShareTooltip
                                status="success"
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                              >
                                Copied link!
                              </ShareTooltip>
                            )}
                            {shareError === cert.id && (
                              <ShareTooltip
                                status="error"
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                              >
                                Failed to copy
                              </ShareTooltip>
                            )}
                          </CertificateShareLink>
                        </CertificateImage>

                        <CertificateContent>
                          <CertificateTitle>{cert.title}</CertificateTitle>
                          <CertificateDate>{cert.date}</CertificateDate>
                          <CertificateDescription>
                            {cert.description}
                          </CertificateDescription>

                          <CertificateActions>
                            <CertificateLink
                              href={cert.certificateUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ y: -3 }}
                              whileTap={{ scale: 0.95 }}
                              aria-label={`View certificate for ${cert.title}`}
                            >
                              {renderIcon(FaExternalLinkAlt)} View
                            </CertificateLink>
                            {cert.pdfUrl && (
                              <CertificateLink
                                className="download"
                                href={cert.pdfUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ y: -3 }}
                                whileTap={{ scale: 0.95 }}
                                aria-label={`Download PDF for ${cert.title}`}
                              >
                                {renderIcon(FaFilePdf)} PDF
                              </CertificateLink>
                            )}
                          </CertificateActions>
                        </CertificateContent>
                      </CertificateCard>
                    ))}
                </>
              ) : (
                // Regular listing when filtered
                filteredCertifications.map((cert, index) => (
                  <CertificateCard
                    key={cert.id}
                    certId={cert.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: cert.id === activeIndex ? 1.02 : 1,
                      boxShadow:
                        cert.id === activeIndex
                          ? "var(--card-active-shadow)"
                          : "var(--card-shadow)",
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    whileHover={{
                      y: -10,
                      boxShadow: "var(--card-hover-shadow)",
                    }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    tabIndex={0}
                    onFocus={() => setActiveIndex(cert.id)}
                    onBlur={() => setActiveIndex(-1)}
                    id={`certificate-${cert.id}`}
                  >
                    <CertificateImage
                      issuer={cert.issuer}
                      data-issuer={cert.issuer}
                    >
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className=""
                        onError={(e) => {
                          // First try to load a default image for the issuer
                          const target = e.currentTarget;
                          const fallbackSrc = `/images/certificates/${cert.issuer.toLowerCase()}-default.png`;

                          // Only try the fallback if the current source isn't already the fallback
                          if (
                            target.src !==
                            new URL(fallbackSrc, window.location.origin).href
                          ) {
                            target.src = fallbackSrc;
                          } else {
                            // If fallback also fails, add class instead of changing display property
                            target.className = "loading-failed";
                          }
                        }}
                      />
                      <CategoryBadge>{cert.category}</CategoryBadge>
                      <IssuerBadge>{cert.issuer}</IssuerBadge>
                      <CertificateShareLink
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          shareCertificate(cert.id, cert.certificateUrl);
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        aria-label={`Share ${cert.title} certificate`}
                      >
                        {renderIcon(HiShare)}
                        {shareSuccess === cert.id && (
                          <ShareTooltip
                            status="success"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                          >
                            Copied link!
                          </ShareTooltip>
                        )}
                        {shareError === cert.id && (
                          <ShareTooltip
                            status="error"
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                          >
                            Failed to copy
                          </ShareTooltip>
                        )}
                      </CertificateShareLink>
                    </CertificateImage>

                    <CertificateContent>
                      <CertificateTitle>{cert.title}</CertificateTitle>
                      <CertificateDate>{cert.date}</CertificateDate>
                      <CertificateDescription>
                        {cert.description}
                      </CertificateDescription>

                      <CertificateActions>
                        <CertificateLink
                          href={cert.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ y: -3 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label={`View certificate for ${cert.title}`}
                        >
                          {renderIcon(FaExternalLinkAlt)} View
                        </CertificateLink>
                        {cert.pdfUrl && (
                          <CertificateLink
                            className="download"
                            href={cert.pdfUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label={`Download PDF for ${cert.title}`}
                          >
                            {renderIcon(FaFilePdf)} PDF
                          </CertificateLink>
                        )}
                      </CertificateActions>
                    </CertificateContent>
                  </CertificateCard>
                ))
              )}
            </AnimatePresence>
          </CertificationsGrid>
        </>
      )}
    </Container>
  );
};

const FilterCount = styled.span`
  background-color: rgba(0, 0, 0, 0.1);
  color: inherit;
  font-size: 0.75rem;
  padding: 0.1rem 0.4rem;
  border-radius: 10px;
  margin-left: 0.5rem;
`;

const ResultCount = styled.div`
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: var(--secondary-text-color);
  text-align: right;

  @media (max-width: 480px) {
    text-align: left;
    margin-bottom: 0.8rem;
  }
`;

const IssuerHeading = styled.h2`
  grid-column: 1 / -1;
  margin: 1.5rem 0 1rem;
  color: var(--heading-color);
  font-size: 1.5rem;
  font-weight: 600;
  position: relative;
  padding-left: 1rem;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 70%;
    background-color: var(--primary-color);
    border-radius: 2px;
  }
`;

const IssuerDivider = styled.div`
  grid-column: 1 / -1;
  width: 100%;
`;

export default Certifications;
