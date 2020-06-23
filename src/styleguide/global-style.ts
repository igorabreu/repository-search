import { createGlobalStyle } from 'styled-components';
import MuliRegular from '../assets/fonts/Muli-Regular.woff';
import MuliRegular2 from '../assets/fonts/Muli-Regular.woff2';
import MuliBold from '../assets/fonts/Muli-Bold.woff';
import MuliBold2 from '../assets/fonts/Muli-Bold.woff2';
import { theme } from './style-theme';

const { colors } = theme;

export const GlobalStyle = createGlobalStyle`
  body,
  html {
    height: 100%;
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: 'Muli', sans-serif;
    min-height: 100%;
    font-weight: normal;
  }

  @font-face {
    font-family: 'Muli';
    src: url('${MuliBold2}') format('woff2'),
      url('${MuliBold}') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Muli';
    src: url('${MuliRegular2}') format('woff2'),
      url('${MuliRegular}') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  ::selection {
    color: ${colors.white};
    background: ${colors.darkBlue};
  }
`;
