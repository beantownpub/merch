import styled from 'styled-components'
const CONFIG = require('./config.json')
const COLORS = CONFIG.colors

export const StyledContentContainer = styled.div`
    background-color: ${props => props.backgroundColor || "beige"};
    color: ${props => props.fontColor || "unset"};
    display: flex;
    flex-flow: column wrap;
    font-family: ${props => props.fontFamily || "unset"};
    margin: ${props => props.margin || "unset"};
    padding: ${props => props.padding || "0"};
    text-transform: ${props => props.textTransform || "unset"};
    width: ${props => props.width || "100%"};
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
    font-family: gotham-narrow-ultra;
    letter-spacing: .12rem;
    text-transform: uppercase;
    color: ${props => props.fontColor || COLORS.black};
    line-height: 170%;
    h1 {
        padding: .5rem 0;
        max-width: 80%;
        font-size: 3em;
        font-family: gotham-narrow-ultra;
        line-height: 170%;
    }
    h2 {
        padding: .5rem 0;
        max-width: 80vw;
        font-family: gotham;
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
        font-family: gotham-narrow-ultra;
        font-size: 2em;
        line-height: 170%;
        letter-spacing: .25rem;
    }
    h4 {
        padding: .5rem 0;
        max-width: 40rem;
        font-family: gotham;
        font-size: 1.75rem;
        text-transform: none;
        line-height: 170%;
    }
    h5 {
        padding: .5rem 0;
        max-width: 40rem;
        font-family: satisfy;
        font-size: 1.75rem;
        letter-spacing: unset;
        text-transform: none;
        line-height: 170%;
    }
    h6 {
        padding: .5rem 0;
        max-width: 40rem;
        font-family: gotham;
        font-size: .75rem;
        text-transform: none;
        line-height: 170%;
    }
    a {
        text-decoration: none;
        color: #3fc5f0;
        font-family: gotham-medium;
        text-transform: capitalize;
    }
    article {
        padding: 2rem 0 0 0;
        max-width: 50rem;
        text-transform: none;
        font-family: gotham-medium;
    }
    p {
        padding: .5rem 0;
        max-width: 50rem;
        color: ${COLORS.white};
        text-transform: none;
        font-family: gotham-medium;
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
        font-family: gotham-narrow-ultra;
        font-size: 1.5em;
        text-transform: uppercase;
        letter-spacing: .2em;
        background-color: ${props => props.buttonColor || "#383838"};
        color: ${props => props.fontColor || COLORS.black};
    }
`

export const StyledHero = styled.div`
    margin: 5rem auto 0 auto;
    width: 100%;
    height: 420px;
    display: flex;
    background-image: url(${props => props.image || "https://static.dev.beantownpub.com/img/sign_and_graveyard_heroheader.jpeg"});
    background-size: cover;
    background-position: center;
    h1 {
        margin: auto;
        max-width: 80%;
        font-family: gotham-narrow-ultra;
        font-size: 3.5rem;
        text-transform: uppercase;
        letter-spacing: .2em;
        color: ${COLORS.white};
        text-shadow: 2px 2px 8px #000000;
        line-height: 150%;
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

export const StyledFooter = styled.div`
    margin: auto;
    padding: 2rem 0;
    width: 100%;
    display: flex;
    border-top: .2rem solid ${COLORS.yellow};
    footer {
        margin: auto;
        font-family: 'Raleway', Arial, sans-serif;
        text-transform: uppercase;
        color: ${COLORS.white};
        text-align: center;
        text-shadow: .1em .15em .35em #000000;
        letter-spacing: .2em;
    }
    img {
        margin: auto;
        padding: .5rem 0;
        max-width: 20rem;
    }
    h2 {
        margin: 1rem auto;
    }
    h3 {
        margin: auto;
        padding: .5rem 0;
        font-size: 1.65em;
    }
    h4 {
        margin: auto;
        padding: 1rem 0;
        font-family: satisfy;
        font-size: 2rem;
        color: ${COLORS.yellow};
        text-transform: capitalize;
        letter-spacing: none;
    }
`

export const StyledAnchor = styled.div`
    display: flex;
    a {
        margin: .25rem;
        padding: 1rem;
        width: ${props => props.width || "12rem"};
        height: min-content;
        font-family: gotham-narrow-ultra;
        background-color: ${props => props.bgColor || COLORS.white};
        border: 1px solid ${props => props.borderColor || COLORS.white};
        border-radius: 6px;
        text-decoration: none;
        font-size: 1rem;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: .2rem;
        color: black;
    }
`
