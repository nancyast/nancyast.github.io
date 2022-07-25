import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: 'Arial Regular', sans-serif;
    font-size: 16px;
    min-width: 1024px;
    overflow: auto;

    #root {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
    }
  }
`;

export default GlobalStyle;
