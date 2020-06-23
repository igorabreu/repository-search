import styled from "styled-components"

export const TitleContainer = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${props => props.theme.colors.darkBlue};

  @media (max-width: 900px) {
    font-size: 2rem;
  }

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }

  @media (max-width: 375px) {
    font-size: 1.2rem;
  }

  @media (max-width: 320px) {
    font-size: 1rem;
  }
`
