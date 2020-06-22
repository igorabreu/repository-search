import React from 'react';
import { Wrapper } from './styles';

export interface IProps {
  children: React.ReactNode;
}

const Home: React.SFC<IProps> = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Home;
