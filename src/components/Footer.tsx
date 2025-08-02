import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiTwitter,
  FiInstagram,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Type assertion for icons
type IconComponent = React.ComponentType<{ size?: number }>;

interface SocialLink {
  name: string;
  url: string;
  icon: IconComponent;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  // Cast the icon components to fix TypeScript errors
  const GithubIcon = FiGithub as IconComponent;
  const LinkedinIcon = FiLinkedin as IconComponent;
  const TwitterIcon = FiTwitter as IconComponent;
  const InstagramIcon = FiInstagram as IconComponent;
  const MailIcon = FiMail as IconComponent;
  const MapPinIcon = FiMapPin as IconComponent;
  const PhoneIcon = FiPhone as IconComponent;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter a valid email address", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      return;
    }

    // Here you would typically send the email to your newsletter service
    // For demo purposes, we're just showing a success toast
    toast.success("Thank you for subscribing to our newsletter!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });

    // Clear the input
    setEmail("");
  };

  const socialLinks: SocialLink[] = [
    {
      name: "GitHub",
      url: "https://github.com/Sajib-Bhattacharjee",
      icon: GithubIcon,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sajib-bhattacharjee-42682a178/",
      icon: LinkedinIcon,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/yourusername",
      icon: TwitterIcon,
    },
    {
      name: "Instagram",
      url: "https://instagram.com/yourusername",
      icon: InstagramIcon,
    },
  ];

  return (
    <FooterContainer>
      <ToastContainer />
      <FooterContent>
        <FooterGrid>
          {/* About Section */}
          <FooterSection>
            <FooterSectionTitle>About Me</FooterSectionTitle>
            <AboutText>
              I'm a passionate frontend developer dedicated to creating
              beautiful and functional web applications. Let's work together to
              bring your ideas to life.
            </AboutText>
            <ContactInfo>
              <ContactItem>
                <IconWrapper>
                  <MapPinIcon size={16} />
                </IconWrapper>
                <span>Khulna, Bangladesh</span>
              </ContactItem>
              <ContactItem>
                <IconWrapper>
                  <PhoneIcon size={16} />
                </IconWrapper>
                <span>+8801708009080</span>
              </ContactItem>
              <ContactItem>
                <IconWrapper>
                  <MailIcon size={16} />
                </IconWrapper>
                <span>sajibbhattacharjee2000@gmail.com</span>
              </ContactItem>
            </ContactInfo>
          </FooterSection>

          {/* Quick Links Section */}
          <FooterSection>
            <FooterSectionTitle>Quick Links</FooterSectionTitle>
            <FooterNav>
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/projects">Projects</FooterLink>
              <FooterLink to="/documentations">Documentations</FooterLink>
              <FooterLink to="/blog">Blog</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </FooterNav>
          </FooterSection>

          {/* Services Section */}
          <FooterSection>
            <FooterSectionTitle>Services</FooterSectionTitle>
            <FooterList>
              <FooterListItem>Web Development</FooterListItem>
              <FooterListItem>Web Performance Optimization</FooterListItem>
              <FooterListItem>
                Responsive UI Design Implementation
              </FooterListItem>
              <FooterListItem>Technical Consultation</FooterListItem>
              <FooterListItem>Code Review</FooterListItem>
            </FooterList>
          </FooterSection>

          {/* Newsletter Section */}
          <FooterSection>
            <FooterSectionTitle>Newsletter</FooterSectionTitle>
            <NewsletterText>
              Subscribe to my newsletter for the latest updates on projects,
              blog posts, and tech insights.
            </NewsletterText>
            <NewsletterForm onSubmit={handleSubscribe}>
              <NewsletterInput
                type="email"
                placeholder="Enter your email"
                aria-label="Email for newsletter"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <SubscribeButton
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </SubscribeButton>
            </NewsletterForm>
          </FooterSection>
        </FooterGrid>

        {/* Bottom Section */}
        <FooterBottom>
          <CopyrightText>
            © {currentYear} Sajib Bhattacharjee. All rights reserved.
          </CopyrightText>
          <SocialLinks>
            {socialLinks.map(({ name, url, icon: Icon }) => (
              <SocialButton
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${name}`}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={20} />
              </SocialButton>
            ))}
          </SocialLinks>
          <LegalLinks>
            <LegalLink to="/legal">Legal Information</LegalLink>
          </LegalLinks>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundAlt};
  border-top: 1px solid ${({ theme }) => theme.borderColor};
  padding: 4rem 0 2rem;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 1rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }

  @media (max-width: 576px) {
    gap: 2.5rem;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
`;

const FooterSectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
`;

const AboutText = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.95rem;
  line-height: 1.6;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.95rem;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;

  span {
    max-width: 100%;
  }

  svg {
    color: ${({ theme }) => theme.primary};
    flex-shrink: 0;
  }

  @media (max-width: 576px) {
    font-size: 0.9rem;
  }
`;

const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.textSecondary};
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterListItem = styled.li`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.95rem;
  margin-bottom: 0.75rem;
`;

const NewsletterText = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.95rem;
  line-height: 1.6;
`;

const NewsletterForm = styled.form`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  max-width: 100%;

  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const NewsletterInput = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 6px;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  font-size: 0.95rem;
  min-width: 0; /* Prevents overflow on small screens */

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;

const SubscribeButton = styled(motion.button)`
  padding: 0.75rem 1.25rem;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  white-space: nowrap;

  &:hover {
    background-color: ${({ theme }) => theme.primaryDark};
  }

  @media (max-width: 576px) {
    width: 100%;
    margin-top: 0.5rem;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.borderColor};

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const CopyrightText = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.95rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialButton = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border: 1px solid ${({ theme }) => theme.borderColor};
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
  }
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 576px) {
    width: 100%;
    justify-content: center;
  }
`;

const LegalLink = styled(Link)`
  color: ${({ theme }) => theme.textSecondary};
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.primary};
  flex-shrink: 0;
`;

export default Footer;
