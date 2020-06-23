import styled from "styled-components"

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ErrorMessage = styled.div`
  color: ${props => props.theme.colors.red};
  margin-top: 10px;
`

export const SearchContainer = styled.div`
  width: 60vw;
  position: relative;
  max-width: 600px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;

  @media (max-width: 760px) {
    width: 90vw;
  }
`

export const Button = styled.button`
  background: transparent;
  border: none;
  overflow: visible;
  cursor: pointer;
  position: absolute;
  right: 40px;

  &:focus{
    outline: none;
  }
`

export const Icon = styled.img`
  margin-left: 10px;
`

export const Input = styled.input`
  height: 40px;
  width: 85%;
  font-size: 1.3rem;
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

  @media (max-width: 375px) {
    font-size: 1rem;
  }
`
