import { createGlobalStyle } from 'styled-components';
import NotoSansRegular from '../assets/fonts/NotoSans.woff';
import NotoSansRegular2 from '../assets/fonts/NotoSans.woff2';
import NotoSansBold from '../assets/fonts/NotoSans-Bold.woff';
import NotoSansBold2 from '../assets/fonts/NotoSans-Bold.woff2';
import { theme } from './style-theme';

const { colors } = theme;

export const GlobalStyle = createGlobalStyle`
  body,
  html {
    height: 100%;
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-family: 'Noto Sans', sans-serif;
    min-height: 100%;
    font-weight: normal;
  }

  @font-face {
    font-family: 'Noto Sans';
    src: url('${NotoSansBold2}') format('woff2'),
      url('${NotoSansBold}') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Noto Sans';
    src: url('${NotoSansRegular2}') format('woff2'),
      url('${NotoSansRegular}') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  ::selection {
    color: ${colors.white};
    background: ${colors.darkGray};
  }
`;
