import styled from 'styled-components'
import { config } from '../../../utils/main'
const COLORS = config.colors
const FONTS = config.fonts

export const StyledContentContainer = styled.div`
    background-color: ${props => props.backgroundColor || "beige"};
    border: ${props => props.border || "unset"};
    box-shadow: ${props => props.boxShadow || "unset"};
    border-radius: ${props => props.borderRadius || "unset"};
    color: ${props => props.fontColor || "unset"};
    display: ${props => props.display || "flex"};;
    flex-flow: ${props => props.flexFlow || "column wrap"};
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

export const StyledDashContainer = styled.div`
    margin: ${props => props.margin || "auto"};
    padding: ${props => props.padding || "0"};
    width: 100vw;
    display: flex;
    flex-flow: column wrap;
    line-height: 150%;
    position: relative;
    top: 12rem;
`

export const StyledMerchNav = styled.div`
    background-color: ${COLORS.yellow};
    box-shadow: 1px 1px 3px ${COLORS.borderShadow};
    display: flex;
    flex-flow: row wrap;
    margin: auto;
    position: fixed;
    top: 5rem;
    width: 100%;
`
