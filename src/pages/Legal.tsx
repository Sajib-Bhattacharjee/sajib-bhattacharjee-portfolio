import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaShield, FaFile, FaChevronDown } from "react-icons/fa6";
import SectionTitle from "../components/SectionTitle";
import { renderIcon } from "../utils/iconHelpers";

const Legal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"privacy" | "terms">("privacy");
  const [expandedSections, setExpandedSections] = useState<{
    [key: string]: boolean;
  }>({
    collection: true,
    use: false,
    sharing: false,
    cookies: false,
    security: false,
    rights: false,
    thirdParty: false,
    changes: false,
    contact: false,

    acceptance: true,
    intellectual: false,
    conduct: false,
    accuracy: false,
    links: false,
    liability: false,
    termsChanges: false,
    law: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section],
    });
  };

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header>
        <SectionTitle
          title="Legal Information"
          subtitle="Privacy Policy & Terms of Service"
        />
      </Header>

      <Content>
        <TabsContainer>
          <TabButton
            isActive={activeTab === "privacy"}
            onClick={() => setActiveTab("privacy")}
          >
            {renderIcon(FaShield)} Privacy Policy
          </TabButton>
          <TabButton
            isActive={activeTab === "terms"}
            onClick={() => setActiveTab("terms")}
          >
            {renderIcon(FaFile)} Terms of Service
          </TabButton>
        </TabsContainer>

        <TabContent>
          {activeTab === "privacy" && (
            <PolicyContainer>
              <LastUpdated>
                Last Updated: {new Date().toLocaleDateString()}
              </LastUpdated>

              <PolicySection>
                <SectionHeader onClick={() => toggleSection("collection")}>
                  <SectionHeading>Information Collection</SectionHeading>
                  <ExpandIcon isExpanded={expandedSections.collection}>
                    {renderIcon(FaChevronDown)}
                  </ExpandIcon>
                </SectionHeader>
                {expandedSections.collection && (
                  <SectionContent>
                    <p>
                      The following personal information may be collected
                      through this website:
                    </p>
                    <ul>
                      <li>
                        <strong>Contact Information:</strong> Name and email
                        address when you submit a form
                      </li>
                      <li>
                        <strong>Usage Data:</strong> Information on how you
                        interact with the website
                      </li>
                      <li>
                        <strong>Technical Data:</strong> IP address, browser
                        type, and operating system
                      </li>
                    </ul>
                    <p>This information is collected through:</p>
                    <ul>
                      <li>Contact and inquiry forms</li>
                      <li>Analytics tools that track website usage</li>
                      <li>Cookies and similar tracking technologies</li>
                    </ul>
                  </SectionContent>
                )}
              </PolicySection>

              <PolicySection>
                <SectionHeader onClick={() => toggleSection("use")}>
                  <SectionHeading>Use of Information</SectionHeading>
                  <ExpandIcon isExpanded={expandedSections.use}>
                    {renderIcon(FaChevronDown)}
                  </ExpandIcon>
                </SectionHeader>
                {expandedSections.use && (
                  <SectionContent>
                    <p>
                      The information collected is used for the following
                      purposes:
                    </p>
                    <ul>
                      <li>To respond to your inquiries and communication</li>
                      <li>
                        To improve website design and content based on user
                        behavior
                      </li>
                      <li>To provide personalized user experience</li>
                      <li>
                        To analyze usage patterns to enhance site functionality
                      </li>
                      <li>
                        To protect the website against unauthorized access
                      </li>
                    </ul>
                  </SectionContent>
                )}
              </PolicySection>

              <PolicySection>
                <SectionHeader onClick={() => toggleSection("sharing")}>
                  <SectionHeading>Data Sharing & Disclosure</SectionHeading>
                  <ExpandIcon isExpanded={expandedSections.sharing}>
                    {renderIcon(FaChevronDown)}
                  </ExpandIcon>
                </SectionHeader>
                {expandedSections.sharing && (
                  <SectionContent>
                    <p>Your data may be shared with:</p>
                    <ul>
                      <li>
                        <strong>Service Providers:</strong> Analytics tools
                        (e.g., Google Analytics) to help understand how users
                        interact with the website
                      </li>
                      <li>
                        <strong>Hosting Providers:</strong> To maintain and
                        deliver the website
                      </li>
                    </ul>
                    <p>
                      <strong>
                        We do not sell your personal data to third parties under
                        any circumstances.
                      </strong>
                    </p>
                    <p>
                      Information may be disclosed if required by law or to
                      protect rights, property, or safety.
                    </p>
                  </SectionContent>
                )}
              </PolicySection>

              <PolicySection>
                <SectionHeader onClick={() => toggleSection("cookies")}>
                  <SectionHeading>
                    Cookies & Tracking Technologies
                  </SectionHeading>
                  <ExpandIcon isExpanded={expandedSections.cookies}>
                    {renderIcon(FaChevronDown)}
                  </ExpandIcon>
                </SectionHeader>
                {expandedSections.cookies && (
                  <SectionContent>
                    <p>
                      This website uses cookies and similar tracking
                      technologies to:
                    </p>
                    <ul>
                      <li>Remember your preferences and settings</li>
                      <li>Analyze how you use the website</li>
                      <li>Enhance site performance and functionality</li>
                    </ul>
                    <p>
                      You can control cookie settings through your browser
                      preferences. Disabling cookies may affect some website
                      functionality.
                    </p>
                  </SectionContent>
                )}
              </PolicySection>

              <PolicySection>
                <SectionHeader onClick={() => toggleSection("security")}>
                  <SectionHeading>Data Security</SectionHeading>
                  <ExpandIcon isExpanded={expandedSections.security}>
                    {renderIcon(FaChevronDown)}
                  </ExpandIcon>
                </SectionHeader>
                {expandedSections.security && (
                  <SectionContent>
                    <p>
                      To protect your personal information, the following
                      security measures have been implemented:
                    </p>
                    <ul>
                      <li>
                        Secure HTTPS protocol for all website communications
                      </li>
                      <li>Regular security updates and monitoring</li>
                      <li>
                        Limited access to personal data by authorized personnel
                        only
                      </li>
                      <li>Data encryption for sensitive information</li>
                    </ul>
                    <p>
                      While we implement these security measures, no internet
                      transmission is 100% secure, and we cannot guarantee
                      absolute security.
                    </p>
                  </SectionContent>
                )}
              </PolicySection>

              <PolicySection>
                <SectionHeader onClick={() => toggleSection("rights")}>
                  <SectionHeading>User Rights</SectionHeading>
                  <ExpandIcon isExpanded={expandedSections.rights}>
                    {renderIcon(FaChevronDown)}
                  </ExpandIcon>
                </SectionHeader>
                {expandedSections.rights && (
                  <SectionContent>
                    <p>
                      You have the following rights regarding your personal
                      data:
                    </p>
                    <ul>
                      <li>
                        <strong>Access:</strong> Request a copy of your personal
                        data
                      </li>
                      <li>
                        <strong>Correction:</strong> Request correction of
                        inaccurate data
                      </li>
                      <li>
                        <strong>Deletion:</strong> Request deletion of your
                        personal data
                      </li>
                      <li>
                        <strong>Restriction:</strong> Request limitation of
                        processing
                      </li>
                      <li>
                        <strong>Objection:</strong> Object to processing of your
                        data
                      </li>
                    </ul>
                    <p>
                      To exercise these rights, please contact us using the
                      information provided in the Contact section below.
                    </p>
                  </SectionContent>
                )}
              </PolicySection>

              <PolicySection>
                <SectionHeader onClick={() => toggleSection("thirdParty")}>
                  <SectionHeading>Third-Party Links</SectionHeading>
                  <ExpandIcon isExpanded={expandedSections.thirdParty}>
                    {renderIcon(FaChevronDown)}
                  </ExpandIcon>
                </SectionHeader>
                {expandedSections.thirdParty && (
                  <SectionContent>
                    <p>
                      This website may contain links to third-party websites,
                      including:
                    </p>
                    <ul>
                      <li>GitHub repositories</li>
                      <li>LinkedIn profiles</li>
                      <li>External projects and collaborations</li>
                    </ul>
                    <p>
                      These external sites have their own privacy policies and
                      terms. We are not responsible for the content or practices
                      of these linked websites and encourage you to review their
                      privacy policies when visiting them.
                    </p>
                  </SectionContent>
                )}
              </PolicySection>

              <PolicySection>
                <SectionHeader onClick={() => toggleSection("changes")}>
                  <SectionHeading>Policy Changes</SectionHeading>
                  <ExpandIcon isExpanded={expandedSections.changes}>
                    {renderIcon(FaChevronDown)}
                  </ExpandIcon>
                </SectionHeader>
                {expandedSections.changes && (
                  <SectionContent>
                    <p>
                      This privacy policy may be updated periodically to reflect
                      changes in privacy practices or legal requirements.
                      Significant changes will be announced through:
                    </p>
                    <ul>
                      <li>Updates on the website</li>
                      <li>
                        Notification via email if contact information is
                        available
                      </li>
                    </ul>
                    <p>
                      The date at the top of the policy indicates when it was
                      last updated. You are encouraged to review the policy
                      periodically.
                    </p>
                  </SectionContent>
                )}
              </PolicySection>

              <PolicySection>
                <SectionHeader onClick={() => toggleSection("contact")}>
                  <SectionHeading>Contact Information</SectionHeading>
                  <ExpandIcon isExpanded={expandedSections.contact}>
                    {renderIcon(FaChevronDown)}
                  </ExpandIcon>
                </SectionHeader>
                {expandedSections.contact && (
                  <SectionContent>
                    <p>
                      For any questions or concerns about this privacy policy or
                      the handling of your personal data, please contact:
                    </p>
                    <ContactInfo>
                      <p>
                        <strong>Email:</strong> sajibbhattacharjee2000@gmail.com
                      </p>
                      <p>
                        <strong>Contact Form:</strong> Available on the Contact
                        page
                      </p>
                      <p>
                        <strong>Phone:</strong> +8801708009080
                      </p>
                    </ContactInfo>
                    <p>
                      We are committed to addressing your concerns promptly and
                      resolving any issues regarding your privacy.
                    </p>
                  </SectionContent>
                )}
              </PolicySection>
            </PolicyContainer>
          )}

          {activeTab === "terms" && (
            <PolicyContainer>
              <LastUpdated>
                Last Updated: {new Date().toLocaleDateString()}
              </LastUpdated>

              <PolicySection>
                <SectionHeader onClick={() => toggleSection("acceptance")}>
                  <SectionHeading>Acceptance of Terms</SectionHeading>
                  <ExpandIcon isExpanded={expandedSections.acceptance}>
                    {renderIcon(FaChevronDown)}
                  </ExpandIcon>
                </SectionHeader>
                {expandedSections.acceptance && (
                  <SectionContent>
                    <p>
                      By accessing or using this website, you acknowledge that
                      you have read, understood, and agree to be bound by these
                      Terms of Service.
                    </p>
                    <p>
                      If you do not agree with any part of these terms, you
                      should not access or use this website.
                    </p>
                    <p>
                      These terms apply to all visitors, users, and others who
                      access or use this website.
                    </p>
                  </SectionContent>
                )}
              </PolicySection>

              <PolicySection>
                <SectionHeader onClick={() => toggleSection("intellectual")}>
                  <SectionHeading>Intellectual Property Rights</SectionHeading>
                  <ExpandIcon isExpanded={expandedSections.intellectual}>
                    {renderIcon(FaChevronDown)}
                  </ExpandIcon>
                </SectionHeader>
                {expandedSections.intellectual && (
                  <SectionContent>
                    <p>
                      All content on this website, including but not limited to:
                    </p>
                    <ul>
                      <li>Text, images, graphics, and logos</li>
                      <li>Project descriptions and case studies</li>
                      <li>Code samples and snippets</li>
                      <li>Design elements and interface</li>
                    </ul>
                    <p>
                      is the property of Sajib Bhattacharjee and is protected by
                      intellectual property laws.
                    </p>
                    <p>
                      You may not use, reproduce, distribute, or create
                      derivative works based on this content without explicit
                      written permission.
                    </p>
                  </SectionContent>
                )}
              </PolicySection>

              <PolicySection>
                <SectionHeader onClick={() => toggleSection("conduct")}>
                  <SectionHeading>User Conduct</SectionHeading>
                  <ExpandIcon isExpanded={expandedSections.conduct}>
                    {renderIcon(FaChevronDown)}
                  </ExpandIcon>
                </SectionHeader>
                {expandedSections.conduct && (
                  <SectionContent>
                    <p>When using this website, you agree not to:</p>
                    <ul>
                      <li>
                        Use the website in any way that violates applicable laws
                        or regulations
                      </li>
                      <li>
                        Attempt to gain unauthorized access to any portion of
                        the website or its systems
                      </li>
                      <li>
                        Use the website to transmit malware, viruses, or other
                        malicious code
                      </li>
                      <li>
                        Interfere with or disrupt the integrity or performance
                        of the website
                      </li>
                      <li>
                        Collect or harvest user information without consent
                      </li>
                      <li>
                        Impersonate any person or entity or misrepresent your
                        affiliation
                      </li>
                    </ul>
                  </SectionContent>
                )}
              </PolicySection>

              <PolicySection>
                <SectionHeader onClick={() => toggleSection("accuracy")}>
                  <SectionHeading>Content Accuracy</SectionHeading>
                  <ExpandIcon isExpanded={expandedSections.accuracy}>
                    {renderIcon(FaChevronDown)}
                  </ExpandIcon>
                </SectionHeader>
                {expandedSections.accuracy && (
                  <SectionContent>
                    <p>
                      While we strive to provide accurate and up-to-date
                      information on this website:
                    </p>
                    <ul>
                      <li>
                        All content is provided for informational purposes only
                      </li>
                      <li>
                        Technical information and code examples may not be
                        suitable for all situations
                      </li>
                      <li>
                        We make no warranties regarding the completeness,
                        reliability, or accuracy of the content
                      </li>
                    </ul>
                    <p>
                      You acknowledge that any reliance on the website's content
                      is at your own risk.
                    </p>
                  </SectionContent>
                )}
              </PolicySection>

              <PolicySection>
                <SectionHeader onClick={() => toggleSection("links")}>
                  <SectionHeading>External Links</SectionHeading>
                  <ExpandIcon isExpanded={expandedSections.links}>
                    {renderIcon(FaChevronDown)}
                  </ExpandIcon>
                </SectionHeader>
                {expandedSections.links && (
                  <SectionContent>
                    <p>
                      This website may contain links to third-party websites or
                      services that are not owned or controlled by us.
                    </p>
                    <p>
                      We have no control over, and assume no responsibility for:
                    </p>
                    <ul>
                      <li>
                        The content, privacy policies, or practices of any
                        third-party websites or services
                      </li>
                      <li>
                        Any damage or loss resulting from your use of
                        third-party content
                      </li>
                    </ul>
                    <p>
                      We strongly advise you to read the terms and privacy
                      policies of any third-party websites you visit through
                      links on this website.
                    </p>
                  </SectionContent>
                )}
              </PolicySection>

              <PolicySection>
                <SectionHeader onClick={() => toggleSection("liability")}>
                  <SectionHeading>Limitation of Liability</SectionHeading>
                  <ExpandIcon isExpanded={expandedSections.liability}>
                    {renderIcon(FaChevronDown)}
                  </ExpandIcon>
                </SectionHeader>
                {expandedSections.liability && (
                  <SectionContent>
                    <p>To the maximum extent permitted by law:</p>
                    <ul>
                      <li>
                        We shall not be liable for any indirect, incidental,
                        special, consequential, or punitive damages resulting
                        from your access to or use of, or inability to access or
                        use, this website or any content thereon
                      </li>
                      <li>
                        Our total liability for all claims related to the
                        website is limited to the amount you paid to us, if any,
                        for accessing the website
                      </li>
                    </ul>
                    <p>
                      These limitations apply whether the alleged liability is
                      based on contract, tort, negligence, strict liability, or
                      any other basis, even if we have been advised of the
                      possibility of such damage.
                    </p>
                  </SectionContent>
                )}
              </PolicySection>

              <PolicySection>
                <SectionHeader onClick={() => toggleSection("termsChanges")}>
                  <SectionHeading>Changes to Terms</SectionHeading>
                  <ExpandIcon isExpanded={expandedSections.termsChanges}>
                    {renderIcon(FaChevronDown)}
                  </ExpandIcon>
                </SectionHeader>
                {expandedSections.termsChanges && (
                  <SectionContent>
                    <p>
                      We reserve the right to modify or replace these Terms of
                      Service at any time at our sole discretion.
                    </p>
                    <p>
                      Changes will be effective immediately upon posting the
                      updated terms on the website.
                    </p>
                    <p>
                      Your continued use of the website after the posting of
                      revised terms means you accept and agree to the changes.
                    </p>
                    <p>
                      It is your responsibility to check this page periodically
                      for changes.
                    </p>
                  </SectionContent>
                )}
              </PolicySection>

              <PolicySection>
                <SectionHeader onClick={() => toggleSection("law")}>
                  <SectionHeading>Governing Law</SectionHeading>
                  <ExpandIcon isExpanded={expandedSections.law}>
                    {renderIcon(FaChevronDown)}
                  </ExpandIcon>
                </SectionHeader>
                {expandedSections.law && (
                  <SectionContent>
                    <p>
                      These Terms of Service shall be governed by and construed
                      in accordance with the laws of Bangladesh, without regard
                      to its conflict of law provisions.
                    </p>
                    <p>
                      Any dispute arising from or relating to these terms or
                      your use of the website shall be subject to the exclusive
                      jurisdiction of the courts of Bangladesh.
                    </p>
                  </SectionContent>
                )}
              </PolicySection>
            </PolicyContainer>
          )}
        </TabContent>
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
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px ${({ theme }) => theme.shadowColor};
  border: 1px solid ${({ theme }) => theme.borderColor};
`;

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

interface TabButtonProps {
  isActive: boolean;
}

const TabButton = styled.button<TabButtonProps>`
  padding: 1.25rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: ${({ isActive, theme }) =>
    isActive ? theme.backgroundSecondary : theme.cardBackground};
  color: ${({ isActive, theme }) =>
    isActive ? theme.primary : theme.textSecondary};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ theme, isActive }) =>
      isActive ? theme.backgroundSecondary : theme.backgroundHover};
    color: ${({ theme, isActive }) => (isActive ? theme.primary : theme.text)};
  }

  @media (max-width: 576px) {
    padding: 1rem 1.5rem;
    font-size: 1rem;
  }
`;

const TabContent = styled.div`
  padding: 2rem;

  @media (max-width: 576px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const PolicyContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const LastUpdated = styled.p`
  color: ${({ theme }) => theme.textSecondary};
  font-style: italic;
  margin-bottom: 2rem;
  text-align: right;
  font-size: 0.875rem;
`;

const PolicySection = styled.div`
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  padding-bottom: 1.5rem;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem 0;
`;

const SectionHeading = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

interface ExpandIconProps {
  isExpanded: boolean;
}

const ExpandIcon = styled.span<ExpandIconProps>`
  color: ${({ theme }) => theme.primary};
  transition: transform 0.3s ease;
  transform: rotate(${({ isExpanded }) => (isExpanded ? "180deg" : "0deg")});
`;

const SectionContent = styled.div`
  margin-top: 1rem;
  color: ${({ theme }) => theme.textSecondary};
  font-size: 0.95rem;
  line-height: 1.6;

  p {
    margin-bottom: 1rem;
  }

  ul {
    margin-bottom: 1rem;
    padding-left: 1.5rem;

    li {
      margin-bottom: 0.5rem;
    }
  }

  strong {
    color: ${({ theme }) => theme.text};
    font-weight: 600;
  }
`;

const ContactInfo = styled.div`
  background-color: ${({ theme }) => theme.backgroundHover};
  padding: 1rem;
  border-radius: 8px;
  margin: 1rem 0;

  p {
    margin: 0.5rem 0;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export default Legal;
