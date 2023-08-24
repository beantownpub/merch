import styled from 'styled-components'
import { config } from '../../utils/main.js'
const COLORS = config.colors
const FONTS = config.fonts

export const StyledContentContainer = styled.div`
  background-color: ${props => props.backgroundColor || "beige"};
  color: ${props => props.fontColor || "unset"};
  display: flex;
  flex-flow: column wrap;
  font-family: ${props => props.fontFamily || FONTS.content};
  margin: ${props => props.margin || "unset"};
  padding: ${props => props.padding || "0"};
  text-transform: ${props => props.textTransform || "unset"};
  width: ${props => props.width || "100%"};
  article {
      font-size: 1rem;
  }
  h1 {
      letter-spacing: .25rem;
      line-height: 170%;
      margin: 2rem auto 2rem auto;
  }
  @media (min-width: 320px)
  and (max-width: 768px)
  and (orientation: portrait)
  and (-webkit-min-device-pixel-ratio: 2) {
      h1 {
          font-size: 2rem;
      }
  }
`

export const StyledPartiesContainer = styled.div`
  background-color: ${props => props.backgroundColor || "beige"};
  color: ${props => props.fontColor || "unset"};
  display: flex;
  flex-flow: column wrap;
  font-family: ${props => props.fontFamily || FONTS.content};
  margin: ${props => props.margin || "5rem auto 2rem auto"};
  max-width: 99vw;
  padding: ${props => props.padding || "2rem"};
  text-transform: ${props => props.textTransform || "unset"};
  width: ${props => props.width || "100%"};
  article {
      font-size: 150%;
      font-weight: 600;
      line-height: 150%;
      max-width: 80%;
      margin: auto;
      padding: .25rem;
  }
  h1 {
      font-family: ${props => props.h1FontFamily || FONTS.button};
      font-size: ${props => props.h1FontSize || "3rem"};
      font-weight: ${props => props.h1FontWeight || "900"};
      letter-spacing: .25rem;
      line-height: ${props => props.h1LineHeight || "170%"};
      margin: ${props => props.h1Margin || "3rem auto 2rem auto"};
      padding: ${props => props.h1Padding || ".5rem 0"};
      text-transform: uppercase;
  }
  @media (min-width: 320px)
  and (max-width: 768px)
  and (orientation: portrait)
  and (-webkit-min-device-pixel-ratio: 2) {
      h1 {
          font-size: 2rem;
      }
  }
`

export const StyledInfo = styled.div`
    margin-top: ${props => props.marginTop || "auto"};
    margin-bottom: ${props => props.marginBottom || "auto"};
    margin-left: ${props => props.marginLeft || "auto"};
    margin-right: ${props => props.marginRight || "auto"};
    padding-top: ${props => props.paddingTop || "2rem"};
    padding-bottom: ${props => props.paddingBottom || "2rem"};
    padding-left: ${props => props.paddingLeft || "4rem"};
    padding-right: ${props => props.paddingRight || "1rem"};
    background: ${COLORS.yellow};
    background-color: ${props => props.color || COLORS.yellow};
    width: 100vw;
    display: flex;
    flex-flow: column wrap;
    font-family: ${FONTS.button};
    letter-spacing: .12rem;
    text-transform: uppercase;
    color: ${props => props.fontColor || COLORS.black};
    line-height: 170%;
    h1 {
        padding: .5rem 0;
        font-size: 3em;
        font-family: ${FONTS.button};
        font-weight: 900;
        line-height: 170%;
    }
    h2 {
        padding: .5rem 0;
        max-width: 80vw;
        font-family: ${FONTS.content};
        font-size: 2em;
        line-height: 170%;
        text-align: ${props => props.textAlign || "initial"};
        span {
            color: ${COLORS.red};
        }
    }
    h3 {
        padding: 1rem 0;
        max-width: 80vw;
        font-family: ${FONTS.headline};
        font-size: 2em;
        line-height: 170%;
        letter-spacing: .25rem;
    }
    h4 {
        padding: .5rem 0;
        max-width: 40rem;
        font-family: ${FONTS.content};
        font-size: 1.75rem;
        text-transform: none;
        line-height: 170%;
    }
    h5 {
        padding: .5rem 0;
        max-width: 40rem;
        font-family: ${FONTS.script};
        font-size: 1.75rem;
        letter-spacing: unset;
        text-transform: none;
        line-height: 170%;
    }
    h6 {
        padding: .5rem 0;
        max-width: 40rem;
        font-family: ${FONTS.content};
        font-size: .75rem;
        text-transform: none;
        line-height: 170%;
    }
    a {
        text-decoration: none;
        color: ${COLORS.dodgerBlue};
        font-family: ${FONTS.content};
        text-transform: capitalize;
    }
    a:hover {
      color: ${COLORS.red};
    }
    article {
        font-family: ${FONTS.content};
        font-size: 150%;
        font-weight: 600;
        line-height: 150%;
        padding: 2rem 0 0 0;
        max-width: 80vw;
        text-transform: none;
    }
    p {
        padding: .5rem 0;
        max-width: 50rem;
        color: ${COLORS.white};
        text-transform: none;
        font-family: ${FONTS.content};
        font-size: 1.2rem;
    }
    @media (min-width: 320px)
    and (max-width: 768px)
    and (orientation: portrait)
    and (-webkit-min-device-pixel-ratio: 2) {
        h1 {
            font-size: 2rem;
        }
    }
`

export const StyledLinkButton = styled.div`
    button {
        margin: 1rem 0;
        padding: .5rem;
        width: 10rem;
        border: none;
        border-radius: .3rem;
        font-family: ${FONTS.headline};
        font-size: 1.5em;
        text-transform: uppercase;
        letter-spacing: .2em;
        background-color: ${props => props.buttonColor || COLORS.backgroundGray};
        color: ${props => props.fontColor || COLORS.black};
    }
`

export const StyledAnchor = styled.div`
    display: flex;
    a {
        margin: .25rem;
        padding: 1rem;
        width: ${props => props.width || "12rem"};
        height: min-content;
        font-family: ${FONTS.headline};
        background-color: ${props => props.bgColor || COLORS.white};
        border: 1px solid ${props => props.borderColor || COLORS.white};
        border-radius: 6px;
        text-decoration: none;
        font-size: 1rem;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: .2rem;
        color: ${COLORS.black};
    }
`
