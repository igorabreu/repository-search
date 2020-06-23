import styled from "styled-components"

export const Header = styled.div`
  width: 80%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  height: 100px;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    height: 75px;
    justify-content: flex-end;
  }
`

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`