import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FiCode,
  FiLayers,
  FiCpu,
  FiDatabase,
  FiUser,
  FiBook,
  FiAward,
  FiBriefcase,
} from "react-icons/fi";
import SectionTitle from "../components/SectionTitle";
import SkillBar from "../components/SkillBar";
import { renderIcon } from "../utils/iconHelpers";
import ResumeButton from "../components/ResumeButton";
import GradientDivider from "../components/GradientDivider";

// Placeholder for profile image (will be replaced with user's actual image)
const placeholderImage = "./assets/about-img.png";

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header>
        <SectionTitle title="About Me" subtitle="Get to know me better" />
      </Header>

      <Content>
        <ImageSection>
          <ProfileImageContainer>
            <ProfileImage
              src={placeholderImage}
              alt="Sajib Bhattacharjee"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <ImageBadge>
              <BadgeValue>2+</BadgeValue>
              <BadgeLabel>Years of Experience</BadgeLabel>
            </ImageBadge>
          </ProfileImageContainer>

          <ContactInfoContainer>
            <ContactInfoItem>
              <ContactInfoLabel>Email:</ContactInfoLabel>
              <ContactInfoValue>
                sajibbhattacharjee2000@gmail.com
              </ContactInfoValue>
            </ContactInfoItem>
            <ContactInfoItem>
              <ContactInfoLabel>Phone:</ContactInfoLabel>
              <ContactInfoValue>+8801708009080</ContactInfoValue>
            </ContactInfoItem>
            <ContactInfoItem>
              <ContactInfoLabel>Location:</ContactInfoLabel>
              <ContactInfoValue>Khulna, Bangladesh</ContactInfoValue>
            </ContactInfoItem>
          </ContactInfoContainer>

          <ResumeButton />
        </ImageSection>

        <InfoSection>
          <TabsContainer>
            <TabButton
              isActive={activeTab === "about"}
              onClick={() => setActiveTab("about")}
            >
              {renderIcon(FiUser)} About
            </TabButton>
            <TabButton
              isActive={activeTab === "education"}
              onClick={() => setActiveTab("education")}
            >
              {renderIcon(FiBook)} Education
            </TabButton>
            <TabButton
              isActive={activeTab === "skills"}
              onClick={() => setActiveTab("skills")}
            >
              {renderIcon(FiAward)} Skills
            </TabButton>
            <TabButton
              isActive={activeTab === "experience"}
              onClick={() => setActiveTab("experience")}
            >
              {renderIcon(FiBriefcase)} Experience
            </TabButton>
          </TabsContainer>

          <TabContent>
            {activeTab === "about" && (
              <AboutTabContent>
                <AboutText>
                  <p>
                    Hi there! I’m <strong>Sajib Bhattacharjee</strong>, a
                    dedicated and creative Front-End Web Developer with a
                    passion for building interactive, accessible, and
                    high-performance web experiences. I specialize in crafting
                    responsive UIs using modern technologies like{" "}
                    <strong>HTML, CSS, JavaScript, React.js.</strong>
                    {/* and{" "}
                    <strong>Next.js</strong>. */}
                  </p>
                  <p>
                    My journey began during my university years, where I
                    discovered the power of code to transform ideas into
                    seamless digital experiences. Since then, I’ve committed
                    myself to continuous learning and building clean, scalable,
                    and maintainable front-end architectures that align with
                    industry best practices.
                  </p>
                  <p>
                    I’m driven by a user-first mindset—developing intuitive,
                    pixel-perfect interfaces that not only look stunning but
                    also perform flawlessly across devices. Whether it’s
                    optimizing performance, enhancing accessibility, or
                    integrating the latest front-end innovations, I take pride
                    in delivering solutions that truly make an impact.
                  </p>
                  <p>
                    Outside of coding, I’m passionate about exploring emerging
                    web technologies, contributing to open-source projects, and
                    empowering others through tutorials and blog posts. In my
                    downtime, you’ll often find me hiking, reading, or
                    sharpening my strategy skills on the chessboard.
                  </p>
                </AboutText>
              </AboutTabContent>
            )}

            {activeTab === "education" && (
              <EducationTabContent>
                <EducationList>
                  <EducationItem
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <EducationDate>2020 – 2024</EducationDate>
                    <EducationDetails>
                      <EducationDegree>
                        Bachelor of Science in Computer Science and Engineering
                        (CSE)
                      </EducationDegree>
                      <EducationSchool>
                        North Western University, Khulna, Bangladesh
                      </EducationSchool>
                      <EducationDescription>
                        Graduated with Honors, CGPA:{" "}
                        <strong>3.24 out of 4.00</strong>. Specialized in Web
                        Development and Software Engineering. Gained strong
                        proficiency in Data Structures, Algorithms, and
                        Full-Stack Development. Actively participated in
                        national coding competitions and university-level
                        hackathons, contributing to several team-based software
                        projects.
                      </EducationDescription>
                    </EducationDetails>
                  </EducationItem>

                  <GradientDivider
                    width="90%"
                    height="2px"
                    gradientStart="#ff9966"
                    gradientEnd="#ff5e62"
                  />

                  <EducationItem
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <EducationDate>2017 – 2019</EducationDate>
                    <EducationDetails>
                      <EducationDegree>
                        Higher Secondary Certificate (HSC) – Science
                      </EducationDegree>
                      <EducationSchool>
                        Lohagora Ideal Government College, Narail, Bangladesh
                      </EducationSchool>
                      <EducationDescription>
                        Focused on Physics, Chemistry, Mathematics, and ICT.
                        Achieved excellent academic results and built a strong
                        foundation in logical reasoning and problem-solving.
                      </EducationDescription>
                    </EducationDetails>
                  </EducationItem>

                  <GradientDivider
                    width="90%"
                    height="2px"
                    gradientStart="#ff9966"
                    gradientEnd="#ff5e62"
                  />

                  <EducationItem
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <EducationDate>2023</EducationDate>
                    <EducationDetails>
                      <EducationDegree>
                        Responsive Web Design & Front-End Libraries
                        Certifications
                      </EducationDegree>
                      <EducationSchool>freeCodeCamp.org</EducationSchool>
                      <EducationDescription>
                        Completed over <strong>700+ hours</strong> of hands-on
                        coding exercises and projects. Gained deep understanding
                        in HTML5, CSS3, Flexbox, Grid, JavaScript, React,
                        Bootstrap, and jQuery. Built several responsive,
                        mobile-friendly web applications and contributed to
                        open-source projects.
                      </EducationDescription>
                    </EducationDetails>
                  </EducationItem>
                </EducationList>
              </EducationTabContent>
            )}

            {activeTab === "skills" && (
              <SkillsTabContent>
                <SkillsSection>
                  <SkillsTitle>Technical Skills</SkillsTitle>
                  <SkillBarsContainer>
                    <SkillBarWrapper>
                      <SkillBar
                        name="HTML & CSS"
                        percentage={95}
                        gradientStart="#FF6B6B"
                        gradientEnd="#FF8E53"
                      />
                      <SkillBar
                        name="JavaScript"
                        percentage={90}
                        gradientStart="#4A00E0"
                        gradientEnd="#8E2DE2"
                      />
                      <SkillBar
                        name="TypeScript"
                        percentage={85}
                        gradientStart="#2193b0"
                        gradientEnd="#6dd5ed"
                      />
                      <SkillBar
                        name="React & Redux"
                        percentage={92}
                        gradientStart="#00c6ff"
                        gradientEnd="#0072ff"
                      />
                      <SkillBar
                        name="Bootstrap"
                        percentage={90}
                        gradientStart="#834d9b"
                        gradientEnd="#d04ed6"
                      />
                    </SkillBarWrapper>

                    <SkillBarWrapper>
                      <SkillBar
                        name="Sass"
                        percentage={90}
                        gradientStart="#fc466b"
                        gradientEnd="#3f5efb"
                      />
                      <SkillBar
                        name="EJS"
                        percentage={90}
                        gradientStart="#11998e"
                        gradientEnd="#38ef7d"
                      />
                      <SkillBar
                        name="Node.js & Express.js"
                        percentage={80}
                        gradientStart="#56ab2f"
                        gradientEnd="#a8e063"
                      />
                      <SkillBar
                        name="MongoDB"
                        percentage={85}
                        gradientStart="#396afc"
                        gradientEnd="#2948ff"
                      />
                      <SkillBar
                        name="Git & GitHub"
                        percentage={88}
                        gradientStart="#f12711"
                        gradientEnd="#f5af19"
                      />
                    </SkillBarWrapper>
                  </SkillBarsContainer>
                </SkillsSection>

                <GradientDivider
                  gradientStart="#6a11cb"
                  gradientEnd="#2575fc"
                />

                <SkillsContainer>
                  <SkillsTitle>Expertise Areas</SkillsTitle>
                  <SkillsGrid>
                    <SkillCard
                      whileHover={{ y: -10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <SkillIcon>{renderIcon(FiCode)}</SkillIcon>
                      <SkillTitle>Frontend</SkillTitle>
                      <SkillsList>
                        <li>HTML5 & CSS3</li>
                        <li>JavaScript (ES6+)</li>
                        <li>React.js</li>
                        <li>Bootstrap</li>
                        <li>Sass</li>
                      </SkillsList>
                    </SkillCard>

                    <SkillCard
                      whileHover={{ y: -10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <SkillIcon>{renderIcon(FiLayers)}</SkillIcon>
                      <SkillTitle>UI/UX</SkillTitle>
                      <SkillsList>
                        <li>Figma</li>
                        <li>Responsive Design</li>
                        <li>Material UI</li>
                        <li>Styled Components</li>
                        <li>CSS Animations</li>
                      </SkillsList>
                    </SkillCard>

                    <SkillCard
                      whileHover={{ y: -10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <SkillIcon>{renderIcon(FiCpu)}</SkillIcon>
                      <SkillTitle>Tools</SkillTitle>
                      <SkillsList>
                        <li>Git & GitHub</li>
                        <li>VS Code</li>
                        <li>npm/yarn</li>
                        <li>Webpack</li>
                        <li>Terminal</li>
                      </SkillsList>
                    </SkillCard>

                    <SkillCard
                      whileHover={{ y: -10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <SkillIcon>{renderIcon(FiDatabase)}</SkillIcon>
                      <SkillTitle>Backend</SkillTitle>
                      <SkillsList>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>EJS</li>
                        <li>MongoDB</li>
                        <li>MySql</li>
                      </SkillsList>
                    </SkillCard>
                  </SkillsGrid>
                </SkillsContainer>
              </SkillsTabContent>
            )}

            {activeTab === "experience" && (
              <ExperienceTabContent>
                <ExperienceList>
                  {/* Experience: Freelance Developer */}
                  <ExperienceItem
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ExperienceDate>2023 – Present</ExperienceDate>
                    <ExperienceDetails>
                      <ExperienceTitle>
                        Freelance Front-End Web Developer
                      </ExperienceTitle>
                      <ExperienceCompany>
                        Remote · Self-Directed
                      </ExperienceCompany>
                      <ExperienceDescription>
                        <ul>
                          <li>
                            Designed and developed multiple real-world projects
                            using React.js, TypeScript, Bootstrap 5.
                          </li>
                          <li>
                            Built accessible, responsive UIs including blog
                            platforms, e-commerce apps, and drag-and-drop quiz
                            tools.
                          </li>
                          <li>
                            Focused on reusable components, performance
                            optimization, and cross-browser compatibility.
                          </li>
                          <li>
                            Integrated APIs, dark mode toggles, animations, and
                            interactive features using React hooks and state
                            management.
                          </li>
                        </ul>
                      </ExperienceDescription>
                    </ExperienceDetails>
                  </ExperienceItem>

                  <GradientDivider
                    width="90%"
                    height="2px"
                    gradientStart="#07a3b2"
                    gradientEnd="#d9ecc7"
                  />

                  {/* Experience: FreeCodeCamp */}
                  <ExperienceItem
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <ExperienceDate>Jul 2023 – Dec 2023</ExperienceDate>
                    <ExperienceDetails>
                      <ExperienceTitle>
                        Front-End Developer (Self-Learning Program)
                      </ExperienceTitle>
                      <ExperienceCompany>freeCodeCamp.org</ExperienceCompany>
                      <ExperienceDescription>
                        <ul>
                          <li>
                            Completed certifications in{" "}
                            <strong>Responsive Web Design</strong> and{" "}
                            <strong>Front-End Libraries</strong>.
                          </li>
                          <li>
                            Built hands-on projects using{" "}
                            <strong>
                              HTML5, CSS3, JavaScript, Bootstrap, and React
                            </strong>
                            .
                          </li>
                          <li>
                            Practiced component-based development and applied
                            industry-standard coding principles.
                          </li>
                          <li>
                            Gained real-world experience through extensive
                            hands-on coding (700+ hours).
                          </li>
                        </ul>
                      </ExperienceDescription>
                    </ExperienceDetails>
                  </ExperienceItem>

                  <GradientDivider
                    width="90%"
                    height="2px"
                    gradientStart="#07a3b2"
                    gradientEnd="#d9ecc7"
                  />

                  {/* Experience: Personal Projects */}
                  <ExperienceItem
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <ExperienceDate>2022 – 2024</ExperienceDate>
                    <ExperienceDetails>
                      <ExperienceTitle>
                        Front-End Project Developer
                      </ExperienceTitle>
                      <ExperienceCompany>
                        GitHub Portfolio · Netlify/Vercel Deployment
                      </ExperienceCompany>
                      <ExperienceDescription>
                        <ul>
                          <li>
                            Developed and deployed 10+ full-stack and front-end
                            projects focused on UI/UX and performance.
                          </li>
                          <li>
                            Implemented SEO-friendly structures, optimized load
                            speed, and improved web accessibility.
                          </li>
                          <li>
                            Built E-learning platforms, blog websites, and
                            interactive sentence builders using real-world
                            scenarios.
                          </li>
                          <li>
                            Deployed live demos using Netlify and Vercel;
                            documented code clearly on GitHub.
                          </li>
                        </ul>
                      </ExperienceDescription>
                    </ExperienceDetails>
                  </ExperienceItem>
                </ExperienceList>
              </ExperienceTabContent>
            )}
          </TabContent>
        </InfoSection>
      </Content>
    </Container>
  );
};

const Container = styled(motion.div)`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const Header = styled.header`
  margin-bottom: 3rem;

  @media (max-width: 576px) {
    margin-bottom: 2rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 3rem;
  }
`;

const ImageSection = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 992px) {
    margin: 0;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

const ProfileImageContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;

  @media (max-width: 992px) {
    margin: 0 auto;
    max-width: 400px;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;

const ProfileImage = styled(motion.img)`
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 8px 30px ${({ theme }) => theme.shadowColor};
`;

const ImageBadge = styled.div`
  position: absolute;
  bottom: -15px;
  right: -15px;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  padding: 10px 15px;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 576px) {
    padding: 8px 12px;
    bottom: -12px;
    right: 0;
  }

  @media (max-width: 480px) {
    padding: 7px 10px;
    bottom: -10px;
    font-size: 0.9rem;
  }
`;

const BadgeValue = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1;

  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`;

const BadgeLabel = styled.div`
  font-size: 0.8rem;
  opacity: 0.9;

  @media (max-width: 576px) {
    font-size: 0.7rem;
  }
`;

const ContactInfoContainer = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px ${({ theme }) => theme.shadowColor};
  border: 1px solid ${({ theme }) => theme.borderColor};

  @media (max-width: 480px) {
    padding: 1.25rem;
  }
`;

const ContactInfoItem = styled.div`
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 480px) {
    margin-bottom: 0.75rem;
  }
`;

const ContactInfoLabel = styled.div`
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: ${({ theme }) => theme.text};

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const ContactInfoValue = styled.div`
  color: ${({ theme }) => theme.textSecondary};

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const InfoSection = styled.div``;

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  margin-bottom: 2rem;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

interface TabButtonProps {
  isActive: boolean;
}

const TabButton = styled.button<TabButtonProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  background-color: transparent;
  color: ${({ theme, isActive }) => (isActive ? theme.primary : theme.text)};
  font-weight: ${({ isActive }) => (isActive ? "600" : "400")};
  border: none;
  border-bottom: 2px solid
    ${({ theme, isActive }) => (isActive ? theme.primary : "transparent")};
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.75rem;
    font-size: 0.85rem;
  }
`;

const TabContent = styled.div`
  min-height: 300px;
  width: 100%;

  @media (max-width: 480px) {
    min-height: auto;
    padding-bottom: 2rem;
  }
`;

const AboutTabContent = styled.div``;

const AboutText = styled.div`
  p {
    margin-bottom: 1rem;
    line-height: 1.7;
    color: ${({ theme }) => theme.textSecondary};
    overflow-wrap: break-word;
    word-wrap: break-word;

    strong {
      color: ${({ theme }) => theme.text};
      font-weight: 600;
    }

    @media (max-width: 480px) {
      font-size: 0.95rem;
      line-height: 1.6;
      margin-bottom: 0.75rem;
    }
  }
`;

const EducationTabContent = styled.div``;

const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const EducationItem = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  width: 100%;
  overflow-wrap: break-word;
  word-wrap: break-word;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const EducationDate = styled.div`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.text};
  border-radius: 8px;
  font-weight: 500;
  height: fit-content;
  text-align: center;

  @media (max-width: 768px) {
    width: fit-content;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 480px) {
    padding: 0.4rem 0.75rem;
    font-size: 0.9rem;
  }
`;

const EducationDetails = styled.div`
  border-left: 2px solid ${({ theme }) => theme.borderColor};
  padding-left: 1.5rem;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    left: -8px;
    top: 0;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    border-left: none;
    padding-left: 0;

    &:before {
      display: none;
    }
  }

  @media (max-width: 480px) {
    margin-top: 0.5rem;
  }
`;

const EducationDegree = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
  color: ${({ theme }) => theme.text};
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const EducationSchool = styled.h4`
  font-size: 1rem;
  margin-bottom: 0.7rem;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const EducationDescription = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    line-height: 1.5;
  }
`;

const SkillsTabContent = styled.div``;

const SkillsSection = styled.section`
  margin-bottom: 2rem;
`;

const SkillsTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const SkillBarsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }

  @media (max-width: 375px) {
    gap: 0.75rem;
  }
`;

const SkillBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 480px) {
    gap: 1.25rem;
  }
`;

const SkillsContainer = styled.div``;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.25rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const SkillCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 12px;
  box-shadow: 0 4px 20px ${({ theme }) => theme.shadowColor};
  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  height: 100%;
  width: 100%;
  overflow-wrap: break-word;
  word-wrap: break-word;

  @media (max-width: 768px) {
    padding: 1.35rem;
  }

  @media (max-width: 480px) {
    padding: 1.2rem;
  }
`;

const SkillIcon = styled.div`
  background-color: ${({ theme }) => theme.primary};
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
    font-size: 0.9rem;
    margin-bottom: 0.75rem;
  }
`;

const SkillTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.75rem;
  }
`;

const SkillsList = styled.ul`
  list-style: none;
  padding-left: 0;

  li {
    padding: 0.4rem 0;
    color: ${({ theme }) => theme.textSecondary};
    position: relative;
    padding-left: 1.2rem;

    &:before {
      content: "•";
      color: ${({ theme }) => theme.primary};
      font-weight: bold;
      font-size: 1.2rem;
      position: absolute;
      left: 0;
      top: 0.2rem;
    }

    @media (max-width: 768px) {
      padding: 0.35rem 0;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
      padding: 0.3rem 0;

      &:before {
        font-size: 1.1rem;
        top: 0.1rem;
      }
    }

    @media (max-width: 375px) {
      font-size: 0.85rem;
      padding: 0.25rem 0;
      padding-left: 1rem;

      &:before {
        font-size: 1rem;
        top: 0.1rem;
        left: 0;
      }
    }
  }
`;

const ExperienceTabContent = styled.div``;

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ExperienceItem = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  width: 100%;
  overflow-wrap: break-word;
  word-wrap: break-word;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const ExperienceDate = styled.div`
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.text};
  border-radius: 8px;
  font-weight: 500;
  height: fit-content;
  text-align: center;

  @media (max-width: 768px) {
    width: fit-content;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 480px) {
    padding: 0.4rem 0.75rem;
    font-size: 0.9rem;
  }
`;

const ExperienceDetails = styled.div`
  border-left: 2px solid ${({ theme }) => theme.borderColor};
  padding-left: 1.5rem;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    left: -8px;
    top: 0;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    border-left: none;
    padding-left: 0;

    &:before {
      display: none;
    }
  }

  @media (max-width: 480px) {
    margin-top: 0.5rem;
  }
`;

const ExperienceTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.3rem;
  color: ${({ theme }) => theme.text};
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ExperienceCompany = styled.h4`
  font-size: 1rem;
  margin-bottom: 0.7rem;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const ExperienceDescription = styled.div`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.6;

  ul {
    margin: 0;
    padding-left: 1.2rem;

    li {
      margin-bottom: 0.5rem;
    }
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;

    ul {
      padding-left: 1rem;

      li {
        margin-bottom: 0.3rem;
      }
    }
  }
`;

export default About;
