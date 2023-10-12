import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #b3e0ff;
    font-family: Sans-Serif;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    padding: 100px 0;
  }
`;

export default GlobalStyle;
