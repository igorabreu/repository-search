import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styleguide/style-theme';
import { PageHeader } from 'components';

describe('PageHeader component', () => {
  test('it should render with title', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <PageHeader title={'Lorem'} onClickBack={() => {}} />
      </ThemeProvider>
    );

    expect(getByText('Lorem')).toBeInTheDocument();
  });

  test('it should call onClickBack function', () => {
    const onClickBack = jest.fn();

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <PageHeader title={'Lorem'} onClickBack={onClickBack} />
      </ThemeProvider>
    );

    fireEvent.click(getByTestId('button'));

    expect(onClickBack).toBeCalled();
  });
});
