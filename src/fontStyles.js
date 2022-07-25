import { createGlobalStyle } from 'styled-components';
import ArialWoff from 'assets/fonts/ARIAL.woff';
import ArialBoldWoff from 'assets/fonts/ARIALBold.woff';

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Arial Regular';
    font-style: normal;
    font-weight: normal;
    src: local('Arial Regular'), url(${ArialWoff}) format('woff');
    }

  @font-face {
    font-family: 'Arial Bold';
    font-style: normal;
    font-weight: normal;
    src: local('Arial Bold'), url(${ArialBoldWoff}) format('woff');
    }
`;

export default FontStyles;
