import styled from "styled-components"
import { rotate } from "styleguide/animations"


export const LoadingContainer = styled.img`
  width: 50px;
  animation: 0.7s ${rotate} cubic-bezier(0.12, 0, 0.39, 0) infinite;
`
