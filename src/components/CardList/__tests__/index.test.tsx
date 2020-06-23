import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styleguide/style-theme';
import { CardList } from 'components';
import AppProvider from 'state/AppProvider';

describe('Cardlist component', () => {
  test('it should render with no results', () => {
    const state = {
      repositories: [],
      noResults: true,
      loading: false,
      error: false,
    };

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <AppProvider initialState={state}>
          <CardList />
        </AppProvider>
      </ThemeProvider>
    );
    expect(getByText('No items found :(')).toBeInTheDocument();
  });

  test('it should render with error', () => {
    const state = {
      repositories: [],
      noResults: false,
      loading: false,
      error: true,
    };

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <AppProvider initialState={state}>
          <CardList />
        </AppProvider>
      </ThemeProvider>
    );
    expect(getByText('An error occurred :(')).toBeInTheDocument();
  });

  test('it should render with cards', () => {
    const state = {
      repositories: [
        {
          name: 'foo',
          description: 'bar',
          stargazers_count: 12,
          id: 123,
        },
        {
          name: 'lorem',
          description: 'ipsum',
          stargazers_count: 12,
          id: 444,
        },
      ],
      noResults: false,
      loading: false,
      error: true,
    };

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <AppProvider initialState={state}>
          <CardList />
        </AppProvider>
      </ThemeProvider>
    );

    expect(getByText('foo')).toBeInTheDocument();
    expect(getByText('lorem')).toBeInTheDocument();
  });
});
