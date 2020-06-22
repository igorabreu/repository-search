import styled from "styled-components"

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SearchInput = styled.input`
  min-width: 600px;
  height: 40px;
  font-size: 1.3rem;
  margin-top: 30px;
  border: 1px solid ${props => props.theme.colors.lightGray};
  border-radius: 5px;
  padding: 10px 20px; 
  color: ${props => props.theme.colors.gray};
  background-color: ${props => props.theme.colors.mediumGray};

  &:focus{
    outline: none;
  }

  &::placeholder {
    color: ${props => props.theme.colors.gray};
  }
`
