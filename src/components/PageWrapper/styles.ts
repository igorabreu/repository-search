import styled from "styled-components"

export const Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10vh 0px;
  background-color: ${props => props.theme.colors.lightGray};
  box-sizing: border-box;
`
