import React from 'react';
import { useHistory } from 'react-router-dom';
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

  const format = (fullDescription: string) => {
    if (fullDescription.length > 100)
      return `${fullDescription.substring(0, 100)} ...`;
    return fullDescription;
  };

  return (
    <CardContainer onClick={onClickItem}>
      <Icon />
      <Name>{name}</Name>
      <Description>{description && format(description)}</Description>
      <Stars>{new Intl.NumberFormat().format(stargazers_count)}</Stars>
    </CardContainer>
  );
};

export default Card;
