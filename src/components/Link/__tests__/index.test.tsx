import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styleguide/style-theme';
import { Link } from 'components';

describe('Link component', () => {
  test('it should render with informations', () => {
    const props = {
      url: 'http://lorem.ipsum',
    };

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Link url={props.url}>Lorem ipsum</Link>
      </ThemeProvider>
    );

    expect(getByText('Lorem ipsum')).toBeInTheDocument();
  });
});
