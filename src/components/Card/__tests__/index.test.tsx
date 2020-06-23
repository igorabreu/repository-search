import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styleguide/style-theme';
import { Card } from 'components';

describe('Card component', () => {
  test('it should render with the provided text', () => {
    const props = {
      name: 'foo',
      description: 'bar',
      stargazers_count: 22,
      id: 1234,
    };

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Card {...props} />
      </ThemeProvider>
    );
    expect(getByText('foo')).toBeInTheDocument();
    expect(getByText('bar')).toBeInTheDocument();
  });
});
