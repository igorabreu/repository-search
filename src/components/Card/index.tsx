import React from 'react';
import { useHistory } from 'react-router-dom';
import { format } from './utils';
import { CardContainer, Icon, Description, Stars, Name } from './styles';

export interface IProps {
  name: string;
  description: string;
  stargazers_count: number;
  id: number;
}

const Card: React.SFC<IProps> = ({
  name,
  description,
  stargazers_count,
  id,
}) => {
  const history = useHistory();

  const onClickItem = () => {
    history.push(`/repository/${id}`);
  };

  return (
    <CardContainer onClick={onClickItem}>
      <Icon />
      <Name>{name}</Name>
      <Description>{description && format.text(description)}</Description>
      <Stars>{stargazers_count && format.number(stargazers_count)}</Stars>
    </CardContainer>
  );
};

export default Card;
