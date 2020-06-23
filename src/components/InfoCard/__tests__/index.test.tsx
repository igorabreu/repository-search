import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styleguide/style-theme';
import { InfoCard } from 'components';

describe('InfoCard component', () => {
  test('it should render with informations', () => {
    const props = {
      description: 'Lorem ipsum',
      created_at: 123,
      forks: 10,
      stargazers_count: 10,
      watchers: 10,
      language: 'javascript',
      updated_at: 123,
      html_url: 'http://lorem.ipsum',
    };

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <InfoCard {...props} />
      </ThemeProvider>
    );

    expect(getByText('Lorem ipsum')).toBeInTheDocument();
  });
});
