import React from 'react';
import styled from 'styled-components';

const PrivacyContainer = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  padding: 1.5rem;
`;

const Title = styled.h1`
  margin-top: 100px;
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #6b21a8;
`;

const Breadcrumb = styled.div`
  font-size: 0.875rem;
  margin-bottom: 1.5rem;
`;

const BreadcrumbLink = styled.a`
  color: #2563eb;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #7c3aed;
`;

const SectionParagraph = styled.p`
  margin-bottom: 1rem;
  font-size: 0.875rem;
`;

const Privacy = () => {
  return (
    <PrivacyContainer>
      <Title>Privacy Policy</Title>
      <Breadcrumb>
        <BreadcrumbLink href="/">Home</BreadcrumbLink> / Privacy Policy
      </Breadcrumb>
      
      <Section>
        <SectionTitle>INTRODUCTION</SectionTitle>
        <SectionParagraph>
          This Privacy Policy is part of our Terms & Conditions. All terms defined in the Terms and Conditions have the same meaning in this Privacy Policy. This statement applies to all users who visit and access our website.
        </SectionParagraph>
        <SectionParagraph>
          By browsing our website and/or using its services, you unconditionally agree to this Privacy Policy.
        </SectionParagraph>
        <SectionParagraph>
          We respect user privacy and are committed to protecting it. Any privacy-related disputes are subject to this Privacy Policy in conjunction with our Terms and Conditions.
        </SectionParagraph>
      </Section>
      
      <Section>
        <SectionTitle>WE CARE FOR OUR USERS' PRIVACY</SectionTitle>
        <SectionParagraph>
          We automatically collect limited information about your computer's connection to the Internet, including your IP address, when you visit our website. Your IP address is a number that lets computers attached to the Internet know where to send you data.
        </SectionParagraph>
        <SectionParagraph>
          We may collect log information from your device, including your location, IP address, operating system, browser type and version. This information will not be shared with third parties.
        </SectionParagraph>
      </Section>
    </PrivacyContainer>
  );
};

export default Privacy;
