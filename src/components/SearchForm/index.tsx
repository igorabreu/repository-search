import React, { useState, useContext } from 'react';
import API from 'services/API';
import { Title } from 'components';
import { AppContext } from 'state';
import { Form, SearchInput } from './styles';

export interface IApiResponse {
  data: {
    [items: string]: IRepository[];
  };
}

export interface IRepository {
  name: string;
  id: number;
  description: string;
  stargazers_count: number;
}

const SearchForm: React.SFC = () => {
  const { dispatch } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const requestData = async (term: string) => {
    const result = (await API.searchRepositories(
      term,
      'stars',
      'desc'
    )) as IApiResponse;

    dispatch({ type: 'REPOSITORIES_FETCHED', payload: result.data.items });
    dispatch({ type: 'SET_LOADING', payload: false });
    !result.data.items.length &&
      dispatch({ type: 'SET_NO_RESULTS', payload: true });
  };

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
  };

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    dispatch({ type: 'SET_LOADING', payload: true });
    dispatch({ type: 'SET_NO_RESULTS', payload: false });
    requestData(searchTerm);
  };

  return (
    <Form>
      <Title>Github repositories:</Title>
      <SearchInput
        type="text"
        placeholder="Search here"
        onChange={handleTextChange}
        value={searchTerm}
        autoFocus
      />
      <button type="submit" onClick={handleSubmit}>
        Q
      </button>
    </Form>
  );
};

export default SearchForm;
