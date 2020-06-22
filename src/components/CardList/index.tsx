import React, { useContext } from 'react';
import { Card, Loading } from 'components';
import { AppContext } from 'state';
import { ListContainer, Message, ContentWrapper } from './styles';

const CardtList: React.SFC = () => {
  const {
    state: { repositories, noResults, loading },
  } = useContext(AppContext);
  return (
    <ListContainer noCards={noResults || loading}>
      {noResults && <Message>no items found :(</Message>}

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
