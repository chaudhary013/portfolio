// src/components/Projects.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { Card } from 'antd';

// Styled components
const Container = styled.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const ToggleButtonGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0px;
    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

const ToggleButton = styled.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    ${({ active, theme }) =>
        active && `
    background: ${theme.primary + 20};
    `
    }
    &:hover {
        background: ${({ theme }) => theme.primary + 8};
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`;

const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`;

const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
`;

const StyledCard = styled(Card)`
    width: 300px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
`;

const ProjectThumbnail = styled.img`
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 8px;
`;

const LinksContainer = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
`;

const LinkButton = styled.a`
    display: inline-block;
    margin: 5px;
    padding: 5px 10px;
    border-radius: 4px;
    color: #fff;
    background-color: #1890ff;
    text-decoration: none;
    font-size: 14px;
    &:hover {
        background-color: #40a9ff;
    }
`;

// Main Projects Component
const Projects = ({ openModal, setOpenModal }) => {
    const [toggle, setToggle] = useState('all');

    const projects = [
        { 
            title: 'Covid-19 Tracker', 
            description: 'Developed a dynamic COVID-19 Tracker using ReactJS, fetching live data from APIs to display cases worldwide with maps, flowcharts, and bar charts. Used CSS, React libraries, and Material UI for modern, responsive design, ensuring a consistent and appealing user experience across all devices.', 
            category: 'web app',
            thumbnail: `${process.env.PUBLIC_URL}/covid-landing-page.jpg`, // Replace with actual image URL
            github: 'https://github.com/chaudhary013/Covid-19-Tracker',
            deployed: 'https://covid-19-tracker-three-coral.vercel.app/'
        },
         { 
            title: 'Google Gemini-Clone', 
            description: 'Developed a Google Gemini OpenAI platform clone, replicating key features and design for enhanced AI capabilities and user interaction. Utilized React.js and Material-UI for the frontend, integrated Redux for state management, and connected to the OpenAI API.', 
            category: 'web app',
            thumbnail: `${process.env.PUBLIC_URL}/Gemini.jpg`, // Replace with actual image URL
            github: 'https://github.com/chaudhary013/gemini-clone',
            deployed: 'https://gemini-clone-teal-omega.vercel.app/'
        },
         { 
            title: 'Weather Forecast site', 
            description: 'Developed a responsive weather forecast application using ReactJS, JavaScript, and CSS libraries. Integrated Open APIs to fetch and display real-time weather data for accurate, up-to-date information.', 
            category: 'web app',
            thumbnail: `${process.env.PUBLIC_URL}/sunny-weather-forecast-.jpg`, // Replace with actual image URL
            github: 'https://github.com/chaudhary013/WeatherForecast-app',
            deployed: 'https://weather-forecast-app-qy1v.vercel.app/'
        },
         { 
            title: 'Vedio Recorder app', 
            description: 'Developed a dynamic, responsive Video Recorder web application using JavaScript and Open Web APIs for an interactive user experience. Integrated IndexedDB for storing videos and photos in a gallery.', 
            category: 'all',
            thumbnail: `${process.env.PUBLIC_URL}/vedio-recoder.jpg`, // Replace with actual image URL
            github: 'https://github.com/chaudhary013/Video-recorder',
            deployed: 'https://amanvediogallaryrecorder.netlify.app/'
        },
         { 
            title: 'Speech Recognition app', 
            description: ':Implemented the frontend using ReactJS and CSS libraries, featuring real-time voice-to-text conversion utilizing the Web Speech API, allowing users to dictate text into a microphone and receive instant transcription', 
            category: 'all',
            thumbnail: `${process.env.PUBLIC_URL}/speechRecogPic.jpg`, // Replace with actual image URL
            github: 'https://github.com/chaudhary013/SpeechRecognition',
            deployed: 'https://speech-recognition-kappa-one.vercel.app/'
        },
        { 
            title: 'Chrome Extension', 
            description: 'Responsive Design:Developed a dynamic and responsive Chrome extension using only Javascript.', 
            category: 'all',
            thumbnail: `${process.env.PUBLIC_URL}/chromeExt.png`, // Replace with actual image URL
            github: 'https://github.com/chaudhary013/JS_chrome_ext',
            deployed: 'https://project2.example.com'
        },
        { 
            title: 'Quiz App', 
            description: 'Developed a responsive Quiz App inspired by "Kaun Banega Crorepati," using ReactJS and JavaScript to ensure a seamless and engaging user experience.', 
            category: 'web app',
            thumbnail: `${process.env.PUBLIC_URL}/QuizappPic.png`, // Replace with actual image URL
            github: 'https://github.com/chaudhary013/QwizApp_project',
            deployed: 'https://qwiz-app-project.vercel.app/'
        },
        // Add more projects with appropriate categories
    ];

    const filteredProjects = toggle === 'all'
        ? projects
        : projects.filter(project => project.category === toggle);

    return (
        <Container id="projects">
            <Wrapper>
                <Title>Projects</Title>
                <Desc>
                    As a full-stack developer, I have worked on and deployed a wide range of projects, from web apps to Android apps. Here are some of my projects.
                </Desc>
                <ToggleButtonGroup>
                    <ToggleButton active={toggle === 'all'} onClick={() => setToggle('all')}>All</ToggleButton>
                    <Divider />
                    <ToggleButton active={toggle === 'web app'} onClick={() => setToggle('web app')}>WEB APPS</ToggleButton>
                    <Divider />
                    
                </ToggleButtonGroup>
                <CardContainer>
                    {filteredProjects.map((project, index) => (
                        <StyledCard key={index} title={project.title} onClick={() => setOpenModal(true)}>
                            <ProjectThumbnail src={project.thumbnail} alt={project.title} />
                            <p>{project.description}</p>
                            <LinksContainer>
                                <LinkButton href={project.github} target="_blank">GitHub</LinkButton>
                                <LinkButton href={project.deployed} target="_blank">Live Demo</LinkButton>
                            </LinksContainer>
                        </StyledCard>
                    ))}
                </CardContainer>
            </Wrapper>
        </Container>
    );
};

export default Projects;
