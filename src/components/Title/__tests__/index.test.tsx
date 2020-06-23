import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styleguide/style-theme';
import { Title } from 'components';

describe('Title component', () => {
  test('it should render with the provided text', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Title>Lorem Ipsum </Title>
      </ThemeProvider>
    );
    expect(getByText('Lorem Ipsum')).toBeInTheDocument();
  });
});
