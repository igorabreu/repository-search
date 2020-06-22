import React from 'react';
import { TitleContainer } from './styles';

export interface IProps {
  children: React.ReactNode;
}

const Title: React.SFC<IProps> = ({ children }) => (
  <TitleContainer>{children}</TitleContainer>
);

export default Title;
