import React from "react";
import styled from "styled-components";
import { motion, HTMLMotionProps } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Card, { AccentColor } from "./Card";
import { renderIcon } from "../utils/iconHelpers";

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

interface IconLinkProps extends HTMLMotionProps<"a"> {
  to?: string;
  href?: string;
  children: React.ReactNode;
}

const IconLinkComponent = styled(motion.a)`
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
  transition: background 0.3s ease;
  text-decoration: none;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const IconLinkRouter = styled(motion(Link))`
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
  transition: background 0.3s ease;
  text-decoration: none;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const IconLink: React.FC<IconLinkProps> = ({
  to,
  href,
  children,
  ...props
}) => {
  if (to) {
    return (
      <IconLinkRouter to={to} {...(props as any)}>
        {children}
      </IconLinkRouter>
    );
  }
  return (
    <IconLinkComponent href={href} {...props}>
      {children}
    </IconLinkComponent>
  );
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  image,
  imageAlt,
  tags,
  githubUrl,
  demoUrl,
  liveUrl,
  delay = 0,
  category,
  index,
  gradient,
}) => {
  const externalUrl = demoUrl || liveUrl;

  const getAccentColor = (): AccentColor => {
    const colors: AccentColor[] = [
      "blue",
      "purple",
      "teal",
      "cyan",
      "green",
      "orange",
      "pink",
      "indigo",
      "red",
    ];
    return colors[index % colors.length];
  };

  return (
    <Card accentColor={getAccentColor()}>
      {id ? (
        <CardLink to={`/projects/${id}`}>
          <ProjectContainer>
            <ImageContainer gradient={gradient}>
              <ProjectImage
                src={image}
                alt={imageAlt || `${title} project screenshot`}
              />
              <ImageOverlay
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <OverlayLinks>
                  {githubUrl && (
                    <IconLink
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub />
                    </IconLink>
                  )}
                  {externalUrl && (
                    <IconLink
                      href={externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {renderIcon(FaExternalLinkAlt)}
                    </IconLink>
                  )}
                </OverlayLinks>
              </ImageOverlay>
            </ImageContainer>

            <ContentContainer>
              <Category>{category}</Category>
              <Title>{title}</Title>
              <Description>{description}</Description>

              <TechStack>
                {tags.map((tag, index) => (
                  <TechBadge key={index} whileHover={{ y: -2 }}>
                    {tag}
                  </TechBadge>
                ))}
              </TechStack>
            </ContentContainer>
          </ProjectContainer>
        </CardLink>
      ) : (
        <ProjectContainer>
          <ImageContainer gradient={gradient}>
            <ProjectImage
              src={image}
              alt={imageAlt || `${title} project screenshot`}
            />
            <ImageOverlay
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <OverlayLinks>
                {githubUrl && (
                  <IconLink
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub />
                  </IconLink>
                )}
                {externalUrl && (
                  <IconLink
                    href={externalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {renderIcon(FaExternalLinkAlt)}
                  </IconLink>
                )}
              </OverlayLinks>
            </ImageOverlay>
          </ImageContainer>

          <ContentContainer>
            <Category>{category}</Category>
            <Title>{title}</Title>
            <Description>{description}</Description>

            <TechStack>
              {tags.map((tag, index) => (
                <TechBadge key={index} whileHover={{ y: -2 }}>
                  {tag}
                </TechBadge>
              ))}
            </TechStack>
          </ContentContainer>
        </ProjectContainer>
      )}
    </Card>
  );
};

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

interface ImageContainerProps {
  gradient?: string;
}

const ImageContainer = styled.div<ImageContainerProps>`
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  overflow: hidden;
  margin-bottom: 1rem;
  background: ${(props) => props.gradient || "var(--card-background)"};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${(props) => props.gradient || "transparent"};
    opacity: 0.8;
    z-index: 0;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
  position: relative;
  z-index: 1;

  &:not([src]),
  &[src=""],
  &[src*="placeholder"] {
    opacity: 0;
  }
`;

const ImageOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OverlayLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Category = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.primary};
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.heading};
  margin-bottom: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Description = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  flex: 1;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
`;

const TechBadge = styled(motion.span)`
  background: ${({ theme }) => theme.backgroundSecondary};
  color: ${({ theme }) => theme.text};
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.backgroundHover};
  }
`;

const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;

  &:hover ${Title} {
    color: ${({ theme }) => theme.primary};
  }
`;

export default ProjectCard;
