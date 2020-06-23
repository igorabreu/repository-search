import styled from "styled-components"

interface IListContainer {
  noCards: boolean;
}

export const ListContainer = styled.div<IListContainer>`
  display: grid;
  grid-template-columns: ${props => props.noCards ? '1fr' : '1fr 1fr 1fr'};
  column-gap: 2rem;
  grid-row-gap: 1rem;
  margin-top: 60px;

  @media (max-width: 1200px) {
    grid-template-columns: ${props => props.noCards ? '1fr' : '1fr 1fr'}
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

export const Message = styled.div`
  margin-top: 150px;
  color: ${props => props.theme.colors.darkBlue};
  font-size: 1.5rem;
`

export const ContentWrapper = styled.div`
  margin-top: 150px;

  @media (max-width: 414px) {
    margin-top: 100px;
  }
`

