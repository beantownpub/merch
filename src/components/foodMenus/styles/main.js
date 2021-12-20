import styled from 'styled-components'
const CONFIG = require('../../content/config.json')
const COLORS = CONFIG.colors
const FONTS = CONFIG.fonts

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

export const StyledMenuWarning = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    margin: 1rem auto;
    h3 {
        color: ${COLORS.dimGray};
        font-family: ${FONTS.lato};
        font-size: 1.25rem;
        font-weight: 600;
        line-height: 150%;
        padding: 2rem;
    }
    span {
        color: ${COLORS.red};
        font-size: 2rem;
    }
`
