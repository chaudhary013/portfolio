// src/styles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.3s, color 0.3s;
  }
  .ant-layout {
    background: ${({ theme }) => theme.background};
  }
`;
