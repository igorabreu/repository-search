import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { AppContext } from 'state';
import { PageWrapper, PageHeader, InfoCard } from 'components';

export interface IRepository {
  name: string;
  description: string;
  stargazers_count: number;
  id: number;
}

const mock = {
  name: 'React Create App',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  stars: 2200,
  forks: 100,
  commits: 100,
  pullRequests: 200,
};

const Repository: React.SFC = () => {
  const { id } = useParams();
  const history = useHistory();
  const [repository, setRepository] = useState<IRepository>();
  const {
    state: { repositories },
  } = useContext(AppContext);

  useEffect(() => {
    const redirectToHome = () => {
      history.push('/');
    };

    if (!id) redirectToHome();

    const findRepositoryById = (id: string) =>
      repositories.filter(
        (repository: IRepository) => repository.id === parseInt(id)
      );

    const populateRepository = (id: string) => {
      const result = findRepositoryById(id);
      if (!result.length) redirectToHome();
      setRepository(result[0]);
    };

    populateRepository(id);
  }, [history, id, repositories]);

  const onClickBackButton = () => {
    history.goBack();
  };

  return (
    <PageWrapper>
      <PageHeader onClickBack={onClickBackButton} title={repository?.name} />
      <InfoCard {...repository} />
    </PageWrapper>
  );
};

export default Repository;
