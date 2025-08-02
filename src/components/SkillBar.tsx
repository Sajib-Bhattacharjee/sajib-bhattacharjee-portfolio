import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  percentage: number;
  color?: string;
  gradientStart?: string;
  gradientEnd?: string;
}

const SkillBar: React.FC<SkillBarProps> = ({
  name,
  percentage,
  color,
  gradientStart,
  gradientEnd,
}) => {
  return (
    <SkillBarContainer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <SkillInfo>
        <SkillName>{name}</SkillName>
        <SkillPercentage>{percentage}%</SkillPercentage>
      </SkillInfo>
      <ProgressContainer>
        <ProgressBackground />
        <Progress
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          color={color || ""}
          gradientStart={gradientStart}
          gradientEnd={gradientEnd}
          percentage={percentage}
        >
          <ProgressGlow />
        </Progress>
      </ProgressContainer>
    </SkillBarContainer>
  );
};

const SkillBarContainer = styled(motion.div)`
  margin-bottom: 1.5rem;
  width: 100%;
`;

const SkillInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const SkillName = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const SkillPercentage = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
`;

const ProgressContainer = styled.div`
  position: relative;
  height: 10px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const ProgressBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) =>
    `linear-gradient(to right, ${theme.backgroundSecondary}, ${theme.backgroundHover})`};
  opacity: 0.5;
`;

interface ProgressBarProps {
  color: string;
  gradientStart?: string;
  gradientEnd?: string;
  percentage: number;
}

const Progress = styled(motion.div)<ProgressBarProps>`
  position: relative;
  height: 100%;
  border-radius: 5px;
  background: ${({ theme, color, gradientStart, gradientEnd }) =>
    color
      ? color
      : gradientStart && gradientEnd
      ? `linear-gradient(to right, ${gradientStart}, ${gradientEnd})`
      : `linear-gradient(to right, ${theme.primary}, ${theme.secondary})`};
  box-shadow: 0 0 10px
    ${({ theme, color, gradientStart }) =>
      color ? color : gradientStart ? gradientStart : theme.primary}40;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px 5px 0 0;
  }
`;

const ProgressGlow = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 5px;
  height: 100%;
  background: rgba(255, 255, 255, 0.6);
  filter: blur(4px);
  border-radius: 50%;
`;

export default SkillBar;
