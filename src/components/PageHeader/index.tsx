import React from 'react';
import { Title, BackButton } from 'components';
import { Header, ButtonWrapper } from './styles';

export interface IProps {
  onClickBack: () => void;
  title?: string;
}

const Home: React.SFC<IProps> = ({ onClickBack, title }) => (
  <Header>
    <ButtonWrapper>
      <BackButton onClick={onClickBack} />
    </ButtonWrapper>
    <Title>{title}</Title>
  </Header>
);

export default Home;
