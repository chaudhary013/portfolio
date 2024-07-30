import React from 'react';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import SocialMedia from '../components/SocialMedia';
import Contact from '../components/Contact';

const Home = () => (
  <div>
    <AboutMe />
    <Skills />
    <Projects />
    <Education />
    <Contact/>
    <SocialMedia />
  </div>
);

export default Home;
