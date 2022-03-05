import styled from 'styled-components'
import { config } from '../../../utils/main'
const COLORS = config.colors
const FONTS = config.fonts

export const StyledPolicyContainer = styled.div`
    background-color: ${COLORS.yellow};
    border: unset;
    border-radius: unset;
    box-shadow: unset;
    display: flex;
    flex-flow: column wrap;
    margin: 5rem auto 2rem auto;
    padding: 2rem;
    width: 100%;
    article {
        display: flex;
        flex-flow: column wrap;
        padding: 1rem;
    }
    h1 {
        color: ${COLORS.black};
        font-family: ${FONTS.button};
        letter-spacing: .25rem;
        line-height: 100%;
        margin: auto;
        padding: 1rem;
        text-transform: uppercase;
    }
    h2 {
        border-bottom: unset;
        font-family: ${FONTS.headline};
        margin: auto;
        padding: .5rem;
    }
    p {
        font-family: ${FONTS.content};
        font-size: 125%;
        line-height: 125%;
        margin: auto;
        padding: .5rem;
        max-width: 350px;
        a {
            color ${COLORS.dodgerBlue};
            font-weight: 600;
            text-decoration: none;
        }
        a:hover {
            color: ${COLORS.red};
        }
    }
`

export const StyledContentContainer = styled.div`
  border: ${props => props.border || `.75px solid ${COLORS.boxShadowGray}` };
  border-radius: ${props => props.borderRadius || "4px"};
  box-shadow: ${props => props.boxShadow || `.25rem .25rem 1rem .5rem ${COLORS.boxShadowGray}`};
  display: flex;
  flex-flow: column wrap;
  margin: ${props => props.margin || "1rem auto"};
  padding: ${props => props.padding || "2rem"};
  width: ${props => props.width || "100%" };
  a {
    color: ${COLORS.dodgerBlue};
    font-family: ${FONTS.content};
    font-weight: 600;
    margin: auto;
    text-decoration: none;
  }
  h1 {
    color: ${props => props.h1Color || COLORS.orderCompleteGreen};
    font-family: ${FONTS.headline};
    letter-spacing: .25rem;
    margin: auto;
    padding: 1rem;
  }
  h2 {
    border-bottom: 1.5px solid ${COLORS.red};
    margin: auto;
    padding: .5rem;
  }
  p {
    font-family: ${FONTS.content};
    font-size: 125%;
    margin: auto;
    padding: .25rem;
    max-width: 300px;
  }
`
