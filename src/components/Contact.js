import React from 'react';
import { IoLocationOutline, IoMailOutline, IoCallOutline } from 'react-icons/io5';
import styled from 'styled-components';

const ContactContainer = styled.div`
  background-color: #000;
  color: #fff;
  padding: 2rem;
  font-family: Arial, sans-serif;
`;

const Heading = styled.h1`
margin-top:  5rem;
  text-align: center;
  color: #6b46c1;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  text-align: center;
  color: #d97706;
  margin-bottom: 2rem;
`;

const ContactContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const InfoBox = styled.div`
  background-color: #1a202c;
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ReachUs = styled(InfoBox)`
  flex: 2;
`;

const SmallBoxes = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SmallBox = styled(InfoBox)`
  flex: 1;
`;

const Icon = styled.div`
  color: #8b5cf6;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const BoxHeading = styled.h2`
  margin: 0.5rem 0;
  color: #fff;
  font-size: 1.2rem;
`;

const BoxText = styled.p`
  color: #a0aec0;
  font-size: 0.9rem;
  line-height: 1.5;
`;

const ContactForm = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: none;
  background-color: #1a202c;
  color: #fff;
  border-radius: 0.25rem;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: none;
  background-color: #1a202c;
  color: #fff;
  border-radius: 0.25rem;
  font-size: 1rem;
  height: 150px;
  resize: vertical;
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: #8b5cf6;
  color: white;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 1rem;

  &:hover {
    background-color: #7c3aed;
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <Heading>CONTACT</Heading>
      <Subtitle>Don't hesitate to get in touch with us. Contact us whenever you want.</Subtitle>
      <ContactContent>
        <ContactInfo>
          <ReachUs>
            <Icon as={IoLocationOutline} />
            <BoxHeading>Reach Us</BoxHeading>
            <BoxText>21, Panjabari Road, Six Mile, Guwahati, Assam, 781022</BoxText>
            <BoxText>106 E, College Road, Bidyapara Part II, Dhubri, Assam, 783324</BoxText>
            <BoxText>Working Hours : 10 AM to 5 PM (MON - SAT)</BoxText>
          </ReachUs>
          <SmallBoxes>
            <SmallBox>
              <Icon as={IoMailOutline} />
              <BoxHeading>Email Us</BoxHeading>
              <BoxText>info@saneinfotech.com</BoxText>
            </SmallBox>
            <SmallBox>
              <Icon as={IoCallOutline} />
              <BoxHeading>Call Us</BoxHeading>
              <BoxText>+91 9707861242</BoxText>
            </SmallBox>
          </SmallBoxes>
        </ContactInfo>
        
        <ContactForm>
          <Input type="text" placeholder="Your Name" />
          <Input type="tel" placeholder="Phone Number" />
          <Input type="email" placeholder="Email ID" />
          <TextArea placeholder="Message" />
          <Button type="submit">Send Message</Button>
        </ContactForm>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;