
import styled from "styled-components"
import iconLink from "assets/icons/link-icon.svg"

export const LinkWrapper = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.cyan};

  &:before {
    content: url(${iconLink});
    display: inline-block;
    transform: translateY(8px);
    margin-right: 6px;
  }
`

