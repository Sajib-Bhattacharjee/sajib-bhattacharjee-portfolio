import React from "react";
import styled, { keyframes } from "styled-components";

interface GradientDividerProps {
  width?: string;
  height?: string;
  margin?: string;
  gradientStart?: string;
  gradientEnd?: string;
}

const shineAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const DividerContainer = styled.div<GradientDividerProps>`
  width: ${(props) => props.width || "80%"};
  height: ${(props) => props.height || "3px"};
  margin: ${(props) => props.margin || "2rem auto"};
  background: linear-gradient(
    90deg,
    ${(props) => props.gradientStart || "#6a11cb"},
    ${(props) => props.gradientEnd || "#2575fc"}
  );
  border-radius: 2px;
  position: relative;
  background-size: 200% 200%;
  animation: ${shineAnimation} 3s ease-in-out infinite;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255, 255, 255, 0.5) 50%,
      transparent 100%
    );
    border-radius: 2px;
  }
`;

const GradientDivider: React.FC<GradientDividerProps> = (props) => {
  return <DividerContainer {...props} />;
};

export default GradientDivider;
