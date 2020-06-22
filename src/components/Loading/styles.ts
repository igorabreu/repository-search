import styled, { keyframes } from "styled-components"

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const LoadingContainer = styled.img`
  width: 50px;
  animation: 0.7s ${rotate} cubic-bezier(0.12, 0, 0.39, 0) infinite;
`
