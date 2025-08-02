import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaArrowRight,
  FaLaptopCode,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { renderIcon } from "../utils/iconHelpers";
import Button from "../components/Button";
import TestimonialsSection from "../components/TestimonialsSection";
import ResumeButton from "../components/ResumeButton";

const HomePage: React.FC = () => {
  return (
    <>
      <HomeContainer>
        <HeroSection>
          <HeroContent>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Greeting>Hello, I'm</Greeting>
              <NameHeading>Sajib Bhattacharjee</NameHeading>
              <Title>Frontend Web Developer</Title>
              <Description>
                I build exceptional and accessible digital experiences for the
                web. Focused on creating clean, user-friendly interfaces with
                modern technologies.
              </Description>

              <ButtonGroup>
                <Button
                  style={{ color: "white" }}
                  to="/contact"
                  variant="primary"
                  size="large"
                  icon={renderIcon(FaArrowRight)}
                  iconPosition="right"
                >
                  Contact Me
                </Button>
                <Button to="/projects" variant="outline" size="large">
                  View Projects
                </Button>
              </ButtonGroup>

              <SocialLinks>
                <SocialLink
                  href="https://github.com/Sajib-Bhattacharjee"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {renderIcon(FaGithub)}
                </SocialLink>
                <SocialLink
                  href="https://www.linkedin.com/in/sajib-bhattacharjee-42682a178/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {renderIcon(FaLinkedinIn)}
                </SocialLink>
                <SocialLink
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {renderIcon(FaTwitter)}
                </SocialLink>
              </SocialLinks>
            </motion.div>
          </HeroContent>

          <HeroImageWrapper
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <HeroImageContainer>
              <HeroImage
                src="https://avatars.githubusercontent.com/u/86997775?v=4"
                alt="Sajib Bhattacharjee"
              />
              <HeroGradientOverlay />
              <HeroPatternOverlay />
            </HeroImageContainer>
            <HeroFloatingElement
              animate={{
                y: ["-5px", "5px", "-5px"],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
            >
              <FloatingCard>
                <FloatingIcon>{renderIcon(FaLaptopCode)}</FloatingIcon>
                <FloatingText>Web Developer</FloatingText>
              </FloatingCard>
            </HeroFloatingElement>
            <HeroFloatingElement
              style={{ top: "10%", right: "-20px" }}
              animate={{
                y: ["5px", "-5px", "5px"],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              <ExperienceCard>
                <ExperienceYears>2+</ExperienceYears>
                <ExperienceText>Years Experience</ExperienceText>
              </ExperienceCard>
            </HeroFloatingElement>
            <StyledResumeButton />
          </HeroImageWrapper>
        </HeroSection>
      </HomeContainer>

      <FeaturedSection>
        <HomeContainer>
          <SectionHeading>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Featured Projects
            </motion.h2>
            <motion.div
              className="underline"
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
            <SectionDescription>
              A selection of my recent work. Check out my complete portfolio for
              more.
            </SectionDescription>
          </SectionHeading>

          <FeaturedProjectsGrid>
            <FeaturedProject
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <ProjectImage
                src="/images/projects/react-ecommerce-website.png"
                alt="Featured Project"
              />
              <ProjectContent>
                <ProjectTitle>E-Commerce Platform</ProjectTitle>
                <ProjectDescription>
                  A full-featured online store with product listings, cart
                  functionality, payment processing, and user authentication.
                </ProjectDescription>
                <ProjectTags>
                  <Tag>React</Tag>
                  <Tag>Redux</Tag>
                  <Tag>Typescript</Tag>
                </ProjectTags>
                <Link
                  to="/projects/react-ecommerce-website"
                  className="project-link"
                >
                  View Details
                </Link>
              </ProjectContent>
            </FeaturedProject>

            <FeaturedProject
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <ProjectImage
                src="/images/projects/blog-website.png"
                alt="Featured Project"
              />
              <ProjectContent>
                <ProjectTitle>SBC's Blog</ProjectTitle>
                <ProjectDescription>
                  A modern, responsive blog platform featuring articles, project
                  highlights, developer skills, and a contact section
                </ProjectDescription>
                <ProjectTags>
                  <Tag>React</Tag>
                  <Tag>React-Bootstrap</Tag>
                  <Tag>TypeScript</Tag>
                  <Tag>Styled Components</Tag>
                </ProjectTags>
                <Link to="/projects/sbc-blog" className="project-link">
                  View Details
                </Link>
              </ProjectContent>
            </FeaturedProject>
          </FeaturedProjectsGrid>

          <ViewAllButtonWrapper>
            <Button
              style={{ color: "white" }}
              to="/projects"
              variant="primary"
              size="large"
              icon={renderIcon(FaArrowRight)}
              iconPosition="right"
            >
              View All Projects
            </Button>
          </ViewAllButtonWrapper>
        </HomeContainer>
      </FeaturedSection>

      <TestimonialsSection />

      {/* Certifications Highlight Section */}
      <CertificationsSection>
        <HomeContainer>
          <SectionHeading>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span role="img" aria-label="award">
                🏅
              </span>{" "}
              Certifications
            </motion.h2>
            <motion.div
              className="underline"
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
            <SectionDescription>
              <span
                style={{
                  fontSize: "1.05rem",
                  color: "#0070f3",
                  fontWeight: 600,
                }}
              >
                Recent Achievements & Recognitions
              </span>
              <br />
              <span style={{ fontSize: "0.95rem" }}>
                Explore all my certificates for more details.
              </span>
            </SectionDescription>
          </SectionHeading>
          <CertificationsGrid>
            {/* 1st Certification */}
            <CertificationCard gradient="linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)">
              <CertImageWrapper>
                <CertImage
                  src="/images/certificates/freecodecamp-responsive.png"
                  alt="Responsive Web Design"
                />
                <IssuerBadge style={{ background: "#006400" }}>
                  <span role="img" aria-label="freeCodeCamp">
                    🌱
                  </span>
                </IssuerBadge>
              </CertImageWrapper>
              <CertContent>
                <CertTitle>Responsive Web Design</CertTitle>
                <CertIssuer>freeCodeCamp &middot; 2023</CertIssuer>
                <CertDesc>
                  Comprehensive curriculum covering HTML5, CSS3, responsive
                  design principles, and accessibility best practices.
                </CertDesc>
                <CertLink
                  href="https://www.freecodecamp.org/certification/sajib-bhattacharjee/responsive-web-design"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </CertLink>
              </CertContent>
            </CertificationCard>
            {/* 2nd Certification */}
            <CertificationCard gradient="linear-gradient(135deg, #f7971e 0%, #ffd200 100%)">
              <CertImageWrapper>
                <CertImage
                  src="/images/certificates/freecodecamp-frontend.png"
                  alt="Front End Development Libraries"
                />
                <IssuerBadge style={{ background: "#ffb300" }}>
                  <span role="img" aria-label="frontend">
                    ⚛️
                  </span>
                </IssuerBadge>
              </CertImageWrapper>
              <CertContent>
                <CertTitle>Front End Development Libraries</CertTitle>
                <CertIssuer>freeCodeCamp &middot; 2023</CertIssuer>
                <CertDesc>
                  Advanced front-end development with Bootstrap, jQuery, Sass,
                  React, and Redux.
                </CertDesc>
                <CertLink
                  href="https://www.freecodecamp.org/certification/sajib-bhattacharjee/front-end-development-libraries"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </CertLink>
              </CertContent>
            </CertificationCard>
            {/* 3rd Certification */}
            <CertificationCard gradient="linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)">
              <CertImageWrapper>
                <CertImage
                  src="/images/certificates/udemy-web.png"
                  alt="Master HTML and CSS by building real world projects"
                />
                <IssuerBadge style={{ background: "#a435f0" }}>
                  <span role="img" aria-label="udemy">
                    🎓
                  </span>
                </IssuerBadge>
              </CertImageWrapper>
              <CertContent>
                <CertTitle>
                  Master HTML and CSS by building real world projects
                </CertTitle>
                <CertIssuer>Udemy &middot; 2023</CertIssuer>
                <CertDesc>
                  Web development fundamentals and best practices.
                </CertDesc>
                <CertLink
                  href="https://www.udemy.com/certificate/UC-f067895a-ff59-408e-a91a-e5ecb5032163/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </CertLink>
              </CertContent>
            </CertificationCard>
          </CertificationsGrid>
          <ViewAllButtonWrapper>
            <Button
              style={{ color: "white" }}
              to="/certifications"
              variant="primary"
              size="large"
              iconPosition="right"
            >
              View All Certifications
            </Button>
          </ViewAllButtonWrapper>
        </HomeContainer>
      </CertificationsSection>

      {/* Featured Resource Section */}
      <FeaturedResourceSection>
        <HomeContainer>
          <SectionHeading>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span role="img" aria-label="books">
                📚
              </span>{" "}
              Featured Resource
            </motion.h2>
            <motion.div
              className="underline"
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
            <SectionDescription>
              <span
                style={{
                  fontSize: "1.05rem",
                  color: "#43e97b",
                  fontWeight: 600,
                }}
              >
                Front-End Development Roadmap
              </span>
              <br />
              <span style={{ fontSize: "0.95rem" }}>
                Explore my favorite learning roadmap for front-end development,
                including top resources for HTML, CSS, JavaScript, React, and
                more.
              </span>
            </SectionDescription>
          </SectionHeading>
          <AnimatedResourceCard
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ResourceTitle>
              <span role="img" aria-label="frontend">
                💻
              </span>{" "}
              Front-End Development
            </ResourceTitle>
            <ResourceDesc>HTML, CSS, JavaScript, React, Vue.js</ResourceDesc>
            <ResourceLinks>
              <AnimatedResourceLink
                href="https://developer.mozilla.org/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.08,
                  background: "#0070f3",
                  color: "#fff",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                MDN Web Docs
              </AnimatedResourceLink>
              <AnimatedResourceLink
                href="https://www.freecodecamp.org/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.08,
                  background: "#43e97b",
                  color: "#fff",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                freeCodeCamp
              </AnimatedResourceLink>
              <AnimatedResourceLink
                href="https://www.theodinproject.com/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.08,
                  background: "#f7971e",
                  color: "#fff",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                The Odin Project
              </AnimatedResourceLink>
              <AnimatedResourceLink
                href="https://frontendmasters.com/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.08,
                  background: "#a435f0",
                  color: "#fff",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Frontend Masters
              </AnimatedResourceLink>
              <AnimatedResourceLink
                href="https://css-tricks.com/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.08,
                  background: "#38f9d7",
                  color: "#fff",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                CSS-Tricks
              </AnimatedResourceLink>
            </ResourceLinks>
            <ViewAllButtonWrapper>
              <Button
                style={{ color: "white" }}
                to="/resources"
                variant="primary"
                size="large"
                iconPosition="right"
              >
                See All Resources
              </Button>
            </ViewAllButtonWrapper>
          </AnimatedResourceCard>
        </HomeContainer>
      </FeaturedResourceSection>

      <ServicesSection>
        <HomeContainer>
          <SectionHeading>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Services I Offer
            </motion.h2>
            <motion.div
              className="underline"
              initial={{ width: 0 }}
              whileInView={{ width: "80px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
          </SectionHeading>
          <ServicesGrid>
            <ServiceCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <ServiceIcon>💻</ServiceIcon>
              <ServiceTitle>Front-End Web Development</ServiceTitle>
              <ServiceDescription>
                Crafting responsive, high-performance websites using HTML, CSS,
                JavaScript, Bootstrap, and React.js.
                {"\n"}🔹 ✓ Responsive design
                {"\n"}🔹 ✓ Clean codebase & reusability
                {"\n"}🔹 ✓ Cross-browser compatibility
              </ServiceDescription>
            </ServiceCard>

            <ServiceCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -10 }}
            >
              <ServiceIcon>🎨</ServiceIcon>
              <ServiceTitle>Pixel-Perfect UI Implementation</ServiceTitle>
              <ServiceDescription>
                Converting Figma or design files into stunning, accessible UIs.
                {"\n"}🔹 ✓ Mobile-first layout
                {"\n"}🔹 ✓ Pixel-perfect design
                {"\n"}🔹 ✓ Accessibility-focused
              </ServiceDescription>
            </ServiceCard>

            <ServiceCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <ServiceIcon>⚙️</ServiceIcon>
              <ServiceTitle>API Integration & Dynamic UI</ServiceTitle>
              <ServiceDescription>
                Integrating REST APIs and creating reactive user interfaces.
                {"\n"}🔹 ✓ API connection with Axios/Fetch
                {"\n"}🔹 ✓ Dynamic UI rendering
                {"\n"}🔹 ✓ Error & loading state handling
              </ServiceDescription>
            </ServiceCard>

            <ServiceCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -10 }}
            >
              <ServiceIcon>⚡</ServiceIcon>
              <ServiceTitle>Website Performance Optimization</ServiceTitle>
              <ServiceDescription>
                Boosting performance using best practices and web vitals.
                {"\n"}🔹 ✓ Core Web Vitals optimized
                {"\n"}🔹 ✓ Lazy loading & caching
                {"\n"}🔹 ✓ SEO & Lighthouse improvements
              </ServiceDescription>
            </ServiceCard>
            <ServiceCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -10 }}
            >
              <ServiceIcon>🧠</ServiceIcon>
              <ServiceTitle>State Management & React Architecture</ServiceTitle>
              <ServiceDescription>
                Building scalable and maintainable frontend structure using
                state tools.
                {"\n"}🔹 ✓ React Context, Redux, Zustand
                {"\n"}🔹 ✓ Modular file architecture
                {"\n"}🔹 ✓ Scalable & maintainable components
              </ServiceDescription>
            </ServiceCard>

            <ServiceCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <ServiceIcon>🧪</ServiceIcon>
              <ServiceTitle>Component Testing & Debugging</ServiceTitle>
              <ServiceDescription>
                Ensuring robust UI with testing and debugging tools.
                {"\n"}🔹 ✓ React Testing Library / Jest
                {"\n"}🔹 ✓ Debugging with DevTools & error boundaries
                {"\n"}🔹 ✓ Unit & integration testing
              </ServiceDescription>
            </ServiceCard>
          </ServicesGrid>
        </HomeContainer>
      </ServicesSection>
    </>
  );
};

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const HeroSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  min-height: calc(100vh - 80px);
  padding: 2rem 0;
  align-items: center;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 991px) {
    text-align: center;
    order: 2;
  }
`;

const Greeting = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 1rem;
`;

const NameHeading = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textSecondary};
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.text};
  margin-bottom: 2rem;
  max-width: 600px;

  @media (max-width: 991px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 991px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 991px) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.text};
  border-radius: 50%;
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: white;
  }
`;

const HeroImageWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 991px) {
    order: 1;
    height: 380px;
  }
`;

const HeroImageContainer = styled.div`
  position: relative;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);

  @media (max-width: 991px) {
    width: 280px;
    height: 280px;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 10%;
`;

const HeroGradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    rgba(0, 112, 243, 0.5),
    rgba(77, 171, 247, 0.3)
  );
  mix-blend-mode: overlay;
`;

const HeroPatternOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(
    circle at 25px 25px,
    rgba(255, 255, 255, 0.2) 2%,
    transparent 0%
  );
  background-size: 50px 50px;
`;

const HeroFloatingElement = styled(motion.div)`
  position: absolute;
  bottom: 30px;
  left: -30px;
  z-index: 10;

  @media (max-width: 576px) {
    display: none;
  }
`;

const FloatingCard = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background-color: ${({ theme }) => theme.cardBackground};
  padding: 0.75rem 1.25rem;
  border-radius: 50px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.borderColor};
`;

const FloatingIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 50%;
  font-size: 1rem;
`;

const FloatingText = styled.span`
  font-weight: 600;
  font-size: 0.85rem;
  color: ${({ theme }) => theme.text};
`;

const ExperienceCard = styled.div`
  background-color: ${({ theme }) => theme.cardBackground};
  padding: 0.75rem 1rem;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border: 1px solid ${({ theme }) => theme.borderColor};
  text-align: center;
`;

const ExperienceYears = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
`;

const ExperienceText = styled.div`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.textSecondary};
`;

const StyledResumeButton = styled(ResumeButton)`
  position: absolute;
  bottom: 20px;
  right: 0;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.85rem;
  background-color: ${({ theme }) => theme.cardBackground};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.borderColor};

  &:hover {
    background-color: ${({ theme }) => theme.backgroundHover};
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 576px) {
    right: 50%;
    transform: translateX(50%);
  }
`;

const FeaturedSection = styled.section`
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.backgroundSecondary};
`;

const ServicesSection = styled.section`
  padding: 5rem 0;
  background-color: ${({ theme }) => theme.background};
`;

const SectionHeading = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    color: ${({ theme }) => theme.text};
    margin-bottom: 1rem;
  }

  .underline {
    height: 4px;
    background: ${({ theme }) =>
      `linear-gradient(to right, ${theme.primary}, ${theme.secondary})`};
    margin: 0 auto;
    border-radius: 2px;
  }
`;

const SectionDescription = styled.p`
  max-width: 600px;
  margin: 1.5rem auto 0;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.textSecondary};
`;

export const ServicesGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ServiceCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 12px;
  box-shadow: 0 4px 20px ${({ theme }) => theme.shadowColor};
  transition: all 0.3s ease;
  border: 1px solid ${({ theme }) => theme.borderColor};
  text-align: center;

  &:hover {
    transform: translateY(-10px);
  }
`;

export const ServiceIcon = styled.div`
  font-size: 2.5rem;
  margin: 0 auto;
`;

export const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
  color: ${({ theme }) => theme.text};
`;

export const ServiceDescription = styled.p`
  font-size: 1rem;
  text-align: left;
  color: #555;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.6;
  white-space: pre-line;
`;

const FeaturedProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FeaturedProject = styled(motion.div)`
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px ${({ theme }) => theme.shadowColor};
  border: 1px solid ${({ theme }) => theme.borderColor};

  .project-link {
    display: inline-block;
    color: ${({ theme }) => theme.primary};
    font-weight: 500;
    font-size: 0.95rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.text};
`;

const ProjectDescription = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.textSecondary};
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
`;

const Tag = styled.span`
  background-color: ${({ theme }) => theme.backgroundHover};
  color: ${({ theme }) => theme.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
`;

const ViewAllButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const CertificationsSection = styled.section`
  padding: 5rem 0 3rem 0;
  background-color: ${({ theme }) => theme.backgroundSecondary};
  position: relative;
  z-index: 1;
  overflow: hidden;
`;

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2.5rem;
  margin-bottom: 2rem;
`;

const CertificationCard = styled(motion.div)<{ gradient: string }>`
  background: ${({ gradient }) => gradient};
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  border: 2px solid rgba(255, 255, 255, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.25rem 1.5rem 1.5rem 1.5rem;
  text-align: center;
  position: relative;
  transition: transform 0.25s cubic-bezier(0.4, 2, 0.6, 1), box-shadow 0.25s;
  &:hover {
    transform: translateY(-8px) scale(1.03) rotate(-1deg);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.18);
  }
`;

const CertImageWrapper = styled.div`
  position: relative;
  margin-bottom: 1.25rem;
`;

const CertImage = styled.img`
  width: 90px;
  height: 90px;
  object-fit: contain;
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
`;

const IssuerBadge = styled.div`
  position: absolute;
  bottom: -10px;
  right: -10px;
  background: #0070f3;
  color: #fff;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  border: 2px solid #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const CertContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CertTitle = styled.h4`
  font-size: 1.18rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.25rem;
  letter-spacing: 0.01em;
`;

const CertIssuer = styled.div`
  font-size: 1rem;
  color: #f0f0f0;
  margin-bottom: 0.5rem;
`;

const CertDesc = styled.p`
  font-size: 1rem;
  color: #f7f7f7;
  margin-bottom: 0.85rem;
`;

const CertLink = styled.a`
  color: #fff;
  background: rgba(0, 0, 0, 0.18);
  font-size: 0.98rem;
  text-decoration: none;
  font-weight: 600;
  padding: 0.4rem 1.2rem;
  border-radius: 20px;
  margin-top: 0.25rem;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #fff;
    color: #0070f3;
  }
`;

const FeaturedResourceSection = styled.section`
  padding: 5rem 0 3rem 0;
  background-color: ${({ theme }) => theme.background};
  position: relative;
  z-index: 1;
  overflow: hidden;
`;

const AnimatedResourceCard = styled(motion.div)`
  background: linear-gradient(120deg, #fff 60%, #e0f7fa 100%);
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 2px solid #43e97b;
  padding: 2.5rem 2rem 2rem 2rem;
  text-align: center;
  margin: 0 auto 2rem auto;
  max-width: 650px;
  position: relative;
  overflow: hidden;
`;

const ResourceTitle = styled.h4`
  font-size: 1.35rem;
  font-weight: 700;
  color: #0070f3;
  margin-bottom: 0.5rem;
  letter-spacing: 0.01em;
`;

const ResourceDesc = styled.p`
  font-size: 1.08rem;
  color: #333;
  margin-bottom: 1.1rem;
`;

const ResourceLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  justify-content: center;
  margin-bottom: 1.7rem;
`;

const AnimatedResourceLink = styled(motion.a)`
  background: #f6d365;
  color: #0070f3;
  padding: 0.5rem 1.2rem;
  border-radius: 20px;
  font-size: 1.02rem;
  text-decoration: none;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(67, 233, 123, 0.1);
  transition: background 0.2s, color 0.2s;
  cursor: pointer;
  &:hover {
    background: #0070f3;
    color: #fff;
  }
`;

export default HomePage;
