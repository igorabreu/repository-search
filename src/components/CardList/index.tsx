import React, { useContext } from 'react';
import { Card, Loading } from 'components';
import { AppContext } from 'state';
import { ListContainer, ContentWrapper, Message } from './styles';

const CardtList: React.SFC = () => {
  const {
    state: { repositories, noResults, loading, error },
  } = useContext(AppContext);
  return (
    <ListContainer noCards={!repositories.length || loading}>
      {error && <Message>An error occurred :(</Message>}
      {noResults && <Message>No items found :(</Message>}

      {loading ? (
        <ContentWrapper>
          <Loading />
        </ContentWrapper>
      ) : (
        repositories.map((repository) => {
          return <Card key={repository.id} {...repository} />;
        })
      )}
    </ListContainer>
  );
};

export default CardtList;
