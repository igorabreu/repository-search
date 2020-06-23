import styled from "styled-components"
import { fadeIn } from "styleguide/animations"

interface ISingleinfo {
  type?: string;
}

export const Container = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    width: 100%;
  }
`

export const InfoWrapper = styled.div`
  width: 50%;
  background: blue;
  margin-top: 30px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 5px;
  padding: 40px 30px 20px 30px;
  box-sizing: border-box;
  box-shadow: 0px 14px 46px ${props => props.theme.colors.shadowColor};
  animation: 0.4s ${fadeIn} cubic-bezier(0.12, 0, 0.39, 0) forwards;

  @media (max-width: 900px) {
    width: 90%;
  }
`

export const SingleInfo = styled.div<ISingleinfo>`
  display: flex;
  flex-direction: ${props => props.type ? props.type : 'row'};
  margin-bottom: 30px;

  ${props => props.type && `
    ${Value} {
      margin-left: 0px;
    }
  `}
`

export const Label = styled.div`
  font-weight: bold;
`

export const Value = styled.div`
  margin-left: 5px;
`

export const Link = styled.a`
  text-decoration: none;
`

export const BottomInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
`