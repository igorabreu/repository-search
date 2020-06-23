import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styleguide/style-theme';
import { SearchForm } from 'components';

describe('SearchForm component', () => {
  test('it should return error when trying to submit form without any word', () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <SearchForm />
      </ThemeProvider>
    );

    fireEvent.click(getByTestId('button'));

    expect(getByText('Please provide at least one word')).toBeInTheDocument();
  });
});
