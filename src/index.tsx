import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styleguide/global-style';
import { theme } from './styleguide/style-theme';
import AppProvider from 'state/AppProvider';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppProvider>
        <App />
      </AppProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
