import styled from "styled-components"
import githubWhite from "assets/icons/github-white-icon.png"
import githubBlack from "assets/icons/github-black-icon.png"
import starWhite from "assets/icons/star-white-icon.svg"
import starBlack from "assets/icons/star-black-icon.svg"

export const Name = styled.div`
  text-transform: lowercase;
  margin-top: 10px;
  width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1rem;
`

export const Description = styled.div`
  font-weight: normal;
  font-size: 0.8rem;
  margin-top: 10px;
`

export const Icon = styled.div`
  width: 40px;
  height: 40px;
  background: url(${githubBlack});
  background-size: cover;
  border-radius: 50%;

  &:hover {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.white};
  }
`

export const Stars = styled.div`
  font-size: 1rem;
  position: absolute;
  bottom: 30px;
  left: 30px;

  &:before {
    content: url(${starBlack});
    display: inline-block;
    margin-right: 5px;
    transform: translateY(1px);
  }
`

export const CardContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${props => props.theme.colors.white};
  width: 380px;
  height: 260px;
  border-radius: 5px;
  margin-bottom: 20px;
  cursor: pointer;
  font-weight: bold;
  padding: 40px 30px 20px 30px;
  box-sizing: border-box;
  box-shadow: 0px 14px 46px ${props => props.theme.colors.shadowColor};

  &:hover {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.darkBlue};
  }

  &:hover {
    ${Icon} {
      background: url(${githubWhite});
      background-size: cover;
    }

    ${Stars} {
      &:before {
        content: url(${starWhite});
      }
    }
`
