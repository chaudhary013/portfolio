import React from 'react';
import { Row, Col, Avatar, Typography, Divider, Button } from 'antd';
import styled from 'styled-components';
import { InstagramFilled, TwitterCircleFilled, MediumSquareFilled, GithubFilled, LinkedinFilled } from '@ant-design/icons';
import { MailOutline, PhoneOutlined, LocationOnOutlined } from '@mui/icons-material';
import { Fade, Slide } from '@mui/material';

const { Title, Paragraph } = Typography;

// Define theme colors
const lightTheme = {
  background: '#ffffff',
  text: '#000000',
  primary: '#1890ff',
  secondary: '#f0f0f0',
  contactText: '#555555', // Add this line
};

const darkTheme = {
  background: '#333333',
  text: '#ffffff',
  primary: '#ff5722',
  secondary: '#555555',
  contactText: '#cccccc', // Add this line
};

const AboutMeContainer = styled.div`
  position: relative;
  padding: 50px 20px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  transition: background 0.3s, color 0.3s;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, ${({ theme }) => theme.background}, ${({ theme }) => theme.secondary});
  animation: fadeIn 1s ease-in-out;
  overflow: hidden;
  z-index: 1;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
`;

const AvatarWrapper = styled.div`
  animation: zoomIn 1s ease-in-out;
  @keyframes zoomIn {
    from {
      opacity: 0;
      transform: scale(0.5);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px 0;
  font-size: 16px;
  color: ${({ theme }) => theme.contactText}; /* Use the new color for contact text */

  svg {
    font-size: 20px;
    color: ${({ theme }) => theme.primary};
  }

  span {
    color: ${({ theme }) => theme.contactText}; /* Use the new color for the text */
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
  animation: bounceIn 1s ease-in-out 1s both;

  @keyframes bounceIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  font-size: 24px;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.text};
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    border-color: ${({ theme }) => theme.primary};
    transform: scale(1.1);
  }
`;

const AboutMe = ({ theme }) => {
  const appliedTheme = theme === 'dark' ? darkTheme : lightTheme;

  return (
    <AboutMeContainer theme={appliedTheme}>
      <ContentWrapper>
        <Row justify="center" align="middle">
          <Col span={8} style={{ textAlign: 'center' }}>
            <Fade in={true} timeout={1000}>
              <AvatarWrapper>
                <Avatar size={200} src={`${process.env.PUBLIC_URL}/myPROFFimg.jpg`} />
              </AvatarWrapper>
            </Fade>
          </Col>
          <Col span={16}>
            <Slide direction="up" in={true} timeout={1000}>
              <div>
                <Title level={2} style={{ color: appliedTheme.primary }}>About Me</Title>
                <Paragraph style={{ fontSize: '18px', color: appliedTheme.text }}>
                  I am a passionate full-stack developer with a background in building and deploying dynamic and responsive web and mobile applications. With expertise in JavaScript, ReactJS, Node.js, and various other technologies, I enjoy creating innovative solutions that enhance user experiences. My interests include exploring new technologies, solving complex problems, and continuously improving my skills. I thrive in collaborative environments and am always eager to take on new challenges. Welcome to my portfolio, where you can explore a range of projects showcasing my skills and dedication to development.
                </Paragraph>
                <Divider />
                <Title level={4} style={{ color: appliedTheme.primary }}>Contact Information</Title>
                <InfoItem>
                  <MailOutline /> <span>chaudharyaman0013@gmail.com</span>
                </InfoItem>
                <InfoItem>
                  <PhoneOutlined /> <span>(91) 6393026507</span>
                </InfoItem>
                <InfoItem>
                  <LocationOnOutlined /> <span>Uttar Pradesh, India</span>
                </InfoItem>
              </div>
            </Slide>
          </Col>
        </Row>
        <SocialIcons>
          <StyledButton shape="circle" icon={<InstagramFilled />} href="https://www.instagram.com/aman13_04/?hl=en" />
          <StyledButton shape="circle" icon={<TwitterCircleFilled />} href="https://x.com/sudo_aman_CS25" />
          <StyledButton shape="circle" icon={<MediumSquareFilled />} href="https://medium.com/@chaudharyaman0013" />
          <StyledButton shape="circle" icon={<GithubFilled />} href="https://github.com/chaudhary013" />
          <StyledButton shape="circle" icon={<LinkedinFilled />} href="https://www.linkedin.com/in/chaudharyaman013/" />
        </SocialIcons>
      </ContentWrapper>
    </AboutMeContainer>
  );
};

export default AboutMe;
