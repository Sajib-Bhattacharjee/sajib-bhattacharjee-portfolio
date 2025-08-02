// export default ResumeButton;

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { renderIcon } from "../utils/iconHelpers";

interface ResumeButtonProps {
  className?: string;
  text?: string;
}

const ResumeButton: React.FC<ResumeButtonProps> = ({
  className,
  text = "Download Resume",
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    const link = document.createElement("a");
    link.href = "/assets/resume-sajib.pdf";
    link.download = "Sajib-Bhattacharjee-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <StyledButton
      className={className}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {renderIcon(FiDownload)}
      <span>{text}</span>
    </StyledButton>
  );
};

const StyledButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  background: ${({ theme }) => theme.primary};
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  svg {
    font-size: 1.2rem;
  }

  &:hover {
    background: ${({ theme }) => theme.primaryDark};
  }
`;

export default ResumeButton;
