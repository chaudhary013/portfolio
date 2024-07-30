// src/App.js
import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppHeader from './components/Header';
import Home from './pages/Home';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Footer from './components/Footer';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './styles';
import './App.css';

const { Content } = Layout;

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Router>
        <Layout className="layout">
          <AppHeader toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          <Content style={{ padding: '0 50px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/education" element={<Education />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </Content>
          <Footer />
        </Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
