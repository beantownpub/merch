import styled from 'styled-components'
import { config } from '../../../utils/main'
const COLORS = config.colors
const FONTS = config.fonts

export const StyledContentContainer = styled.div`
    background-color: ${props => props.backgroundColor || "beige"};
    border: ${props => props.border || `.1rem solid ${COLORS.borderGray}`};
    box-shadow: ${props => props.boxShadow || `0px 5px 20px 0px ${COLORS.boxShadowGray}`};
    border-radius: .4rem;
    color: ${props => props.fontColor || "unset"};
    display: flex;
    flex-flow: column wrap;
    font-family: ${props => props.fontFamily || "unset"};
    margin: ${props => props.margin || "unset"};
    max-width: ${props => props.maxWidth || "unset"};
    padding: ${props => props.padding || "0"};
    text-transform: ${props => props.textTransform || "unset"};
    width: ${props => props.width || "100%"};
    h1 {
        color: ${props => props.fontColor || "unset"};
        font-family: ${FONTS.headers};
        letter-spacing: .25rem;
        line-height: 170%;
        margin: 2rem auto 2rem auto;
        text-transform: ${props => props.textTransform || "uppercase"};
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
    order: 99;
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

export const StyledSideSection = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    margin: 1rem auto;
    order: 6;
    padding: 1rem;
    width: 95vw;
    .sides {
        display: flex;
        flex-flow: row wrap;
        margin: auto;
    }
    h2 {
        color: ${COLORS.red};
        letter-spacing: .2rem;
        text-transform: uppercase;
        font-family: ${FONTS.poppins};
        font-size: 1.95rem;
        margin: .5rem auto;
    }
    p {
        color: ${COLORS.black};
        font-family: ${FONTS.lato};
        font-size: 1.25rem;
        font-weight: 600;
        line-height: 150%;
        max-width: 10rem
        padding: 2rem;
        text-transform: capitalize;
    }
`
