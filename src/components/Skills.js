// src/components/Skills.js
import React from 'react';
import styled from 'styled-components';
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiExpress, SiMysql, SiMongodb } from 'react-icons/si';

const skills = [
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Ant Design', icon: <FaHtml5 /> }, // Placeholder, change to a suitable icon if available
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'Express', icon: <SiExpress /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
];

const SkillsContainer = styled.div`
  padding: 50px 0;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  transition: background 0.3s, color 0.3s;
  text-align: center;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 20px;
  justify-content: center;
`;

const SkillCard = styled.div`
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  svg {
    font-size: 40px;
    margin-bottom: 10px;
  }
  p {
    margin: 0;
    font-size: 16px;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const Skills = () => {
  return (
    <SkillsContainer>
      <h2>Skills</h2>
      <SkillsGrid>
        {skills.map((skill) => (
          <SkillCard key={skill.name}>
            {skill.icon}
            <p>{skill.name}</p>
          </SkillCard>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default Skills;
