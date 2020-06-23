import styled from "styled-components"

export const Header = styled.div`
  width: 80%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  height: 100px;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    height: 110px;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }
`

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`