import React from 'react';
import { Layout, Menu, Switch } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const AppHeader = ({ toggleTheme, isDarkMode }) => (
  <Header>
    <div className="logo" />
    <Menu theme={isDarkMode ? "dark" : "light"} mode="horizontal">
      <Menu.Item key="1">
        <Link to="/">About Me</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/skills">Skills</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/projects">Projects</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/education">Education</Link>
      </Menu.Item>
      <Menu.Item key="5">
        <Link to="/contact">Contact</Link>
      </Menu.Item>
      <Menu.Item key="6">
        <Link to="/resume">Resume</Link>
      </Menu.Item>
      <Switch checked={isDarkMode} onChange={toggleTheme} />
    </Menu>
  </Header>
);

export default AppHeader;
