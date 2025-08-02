import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

// Type definitions for the install prompt event
declare global {
  interface Window {
    deferredPrompt: any;
  }
}

interface SplashScreenProps {
  onFinish: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  useEffect(() => {
    // Auto-hide splash screen after 2.5 seconds
    const timer = setTimeout(() => {
      onFinish();
    }, 2500);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <SplashContainer
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <GradientBackground>
        <LogoContainer>
          <Logo src="/logo192.png" alt="Sajib Bhattacharjee" />
          <Shine />
        </LogoContainer>
        <Title>Sajib Bhattacharjee</Title>
        <Subtitle>Front-End Developer</Subtitle>
        <Loader>
          <LoaderBar />
        </Loader>
      </GradientBackground>
    </SplashContainer>
  );
};

export const PWAInstallPrompt: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show install prompt when the beforeinstallprompt event fires
    const handleShowInstallPrompt = () => setIsVisible(true);
    const handleHideInstallPrompt = () => setIsVisible(false);

    window.addEventListener("showInstallPrompt", handleShowInstallPrompt);
    window.addEventListener("hideInstallPrompt", handleHideInstallPrompt);

    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener("showInstallPrompt", handleShowInstallPrompt);
      window.removeEventListener("hideInstallPrompt", handleHideInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!window.deferredPrompt) {
      console.log("No install prompt available");
      return;
    }

    // Show the install prompt
    window.deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const choiceResult = await window.deferredPrompt.userChoice;

    if (choiceResult.outcome === "accepted") {
      console.log("User accepted the install prompt");
    } else {
      console.log("User dismissed the install prompt");
    }

    // Clear the deferredPrompt variable
    window.deferredPrompt = null;

    // Hide the install button
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <InstallPrompt
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.3 }}
    >
      <InstallPromptContent>
        <InstallIcon src="/logo192.png" alt="Install App" />
        <InstallText>
          <InstallTitle>Install App</InstallTitle>
          <InstallDescription>
            Install this app on your home screen for a better experience
          </InstallDescription>
        </InstallText>
      </InstallPromptContent>
      <InstallActions>
        <InstallButton onClick={handleInstallClick}>Install</InstallButton>
        <DismissButton onClick={() => setIsVisible(false)}>
          Not Now
        </DismissButton>
      </InstallActions>
    </InstallPrompt>
  );
};

export const WelcomeScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  useEffect(() => {
    // Auto-hide welcome screen after 4 seconds
    const timer = setTimeout(() => {
      onFinish();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <WelcomeContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <WelcomeContent>
        <WelcomeTitle
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Welcome to my Portfolio
        </WelcomeTitle>
        <WelcomeMessage
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Explore my projects, skills, and experience. Feel free to reach out if
          you'd like to collaborate!
        </WelcomeMessage>
        <WelcomeButton
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          onClick={onFinish}
        >
          Get Started
        </WelcomeButton>
      </WelcomeContent>
    </WelcomeContainer>
  );
};

// Animations
const shineAnimation = keyframes`
  0% {
    transform: translateX(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) rotate(45deg);
  }
`;

const loadingAnimation = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

// Styled Components
const SplashContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GradientBackground = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #1b0d5a;
`;

const LogoContainer = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 28px;
  overflow: hidden;
  margin-bottom: 24px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Shine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 100%;
  background: rgba(255, 255, 255, 0.3);
  transform: skewX(-20deg);
  animation: ${shineAnimation} 2s infinite;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: white;
  margin: 0 0 8px 0;
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 32px 0;
  text-align: center;
`;

const Loader = styled.div`
  width: 200px;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  overflow: hidden;
`;

const LoaderBar = styled.div`
  height: 100%;
  width: 0;
  background-color: white;
  border-radius: 2px;
  animation: ${loadingAnimation} 2s ease-in-out forwards;
`;

const InstallPrompt = styled(motion.div)`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 40px);
  max-width: 500px;
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  padding: 16px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
`;

const InstallPromptContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const InstallIcon = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  margin-right: 16px;
`;

const InstallText = styled.div`
  flex: 1;
`;

const InstallTitle = styled.h3`
  margin: 0 0 4px 0;
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

const InstallDescription = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${({ theme }) => theme.textSecondary};
`;

const InstallActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

const InstallButton = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;

const DismissButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.textSecondary};
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.backgroundSecondary};
  }
`;

const WelcomeContainer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.background};
  z-index: 9998;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const WelcomeContent = styled.div`
  text-align: center;
  max-width: 600px;
`;

const WelcomeTitle = styled(motion.h1)`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.primary};
`;

const WelcomeMessage = styled(motion.p)`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.text};
`;

const WelcomeButton = styled(motion.button)`
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.secondary};
  }
`;
