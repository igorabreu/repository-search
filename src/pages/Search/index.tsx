import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from 'services/API';

import { Wrapper, Name } from './styles';

export interface ApiResponse {
  data: {
    [items: string]: Repository[];
  };
}

export interface Repository {
  name: string;
  id: number;
}

const Search = () => {
  const [results, setResults] = useState<Repository[]>([]);
  const { term } = useParams();

  useEffect(() => {
    const requestData = async () => {
      const result = (await API.searchRepositories(
        term,
        'stars',
        'desc'
      )) as ApiResponse;
      setResults(result.data.items);
    };
    requestData();
  }, [term]);

  return (
    <Wrapper>
      {results.map((repository) => {
        return <Name key={repository.id}>{repository.name}</Name>;
      })}
    </Wrapper>
  );
};

export default Search;
