import React from 'react';
import { LinkWrapper } from './styles';

interface IProps {
  children: React.ReactNode;
  url: string;
}

const Link: React.SFC<IProps> = ({ children, url }) => (
  <LinkWrapper href={url} target="_blank">
    {children}
  </LinkWrapper>
);

export default Link;
