import styled from "styled-components"

export const Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15vh 0px;
  background-color: ${props => props.theme.colors.lightGray};
  box-sizing: border-box;
`
