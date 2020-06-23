import React from 'react';
import moment from 'moment';
import { Link } from 'components';
import {
  Container,
  InfoWrapper,
  SingleInfo,
  Label,
  Value,
  BottomInfo,
} from './styles';

export interface IProps {
  description?: string;
  created_at?: number;
  forks?: number;
  stargazers_count?: number;
  watchers?: number;
  language?: string;
  updated_at?: number;
  html_url?: string;
}

const InfoCard: React.SFC<IProps> = ({
  description,
  created_at,
  forks,
  stargazers_count,
  watchers,
  language,
  updated_at,
  html_url,
}) => (
  <Container>
    <InfoWrapper>
      <SingleInfo type="column">
        <Label>Description: </Label>
        <Value>{description}</Value>
      </SingleInfo>

      <SingleInfo>
        <Label>Language: </Label>
        <Value>{language}</Value>
      </SingleInfo>

      <SingleInfo>
        <Label>Created at: </Label>
        <Value>{moment(created_at).format('MMMM Do YYYY')}</Value>
      </SingleInfo>

      <SingleInfo>
        <Label>Last updated: </Label>
        <Value>{moment(updated_at).format('MMMM Do YYYY')}</Value>
      </SingleInfo>

      <SingleInfo>
        <Label>Stars: </Label>
        <Value>{stargazers_count}</Value>
      </SingleInfo>

      <SingleInfo>
        <Label>Forks: </Label>
        <Value>{forks}</Value>
      </SingleInfo>

      <SingleInfo>
        <Label>Watchers: </Label>
        <Value>{watchers}</Value>
      </SingleInfo>

      <BottomInfo>
        <Link url={html_url || '#'}>Go to repository page</Link>
      </BottomInfo>
    </InfoWrapper>
  </Container>
);

export default InfoCard;
