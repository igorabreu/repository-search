import React from 'react';
import { Back } from './styles';
import iconBack from 'assets/icons/back-icon.svg';

interface IProps {
  onClick: () => void;
}

const Loading: React.SFC<IProps> = ({ onClick }) => (
  <Back data-testid="button" src={iconBack} onClick={onClick} />
);

export default Loading;
