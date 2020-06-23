import React, { useState, useContext } from 'react';
import API from 'services/API';
import { Title } from 'components';
import { AppContext } from 'state';
import { IApiResponse } from './types';
import {
  onSearchDispatches,
  onErrorDispatches,
  onSetResultDispaches,
} from './utils';
import searchIcon from 'assets/icons/search-icon.svg';
import {
  Form,
  SearchContainer,
  Input,
  ErrorMessage,
  Button,
  Icon,
} from './styles';

const SearchForm: React.SFC = () => {
  const { dispatch } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [emptyError, setEmptyError] = useState<boolean>(false);

  const fetchData = async (term: string) => {
    const result = (await API.searchRepositories(
      term,
      'stars',
      'desc'
    )) as IApiResponse;

    dispatch({ type: 'SET_LOADING', payload: false });

    if (!result) return onErrorDispatches(dispatch);

    onSetResultDispaches(result, dispatch);
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmptyError(false);
    setSearchTerm(value);
  };

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    if (!searchTerm.length) return setEmptyError(true);
    onSearchDispatches(dispatch);
    fetchData(searchTerm);
  };

  return (
    <Form>
      <Title>Github repositories:</Title>
      <SearchContainer>
        <Input
          type="text"
          placeholder="Search here"
          onChange={handleTextChange}
          value={searchTerm}
          autoFocus
        />
        <Button data-testid="button" type="submit" onClick={handleSubmit}>
          <Icon src={searchIcon} />
        </Button>
      </SearchContainer>
      {emptyError && (
        <ErrorMessage>Please provide at least one word</ErrorMessage>
      )}
    </Form>
  );
};

export default SearchForm;
