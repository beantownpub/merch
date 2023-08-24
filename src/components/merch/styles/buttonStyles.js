import styled from 'styled-components'
import { config } from '../../../utils/main.js'
const COLORS = config.colors
const FONTS = config.fonts

export const iconStyle = {
    margin: 'auto .5rem',
    color: COLORS.yellow,
    fontSize: '1rem'
}

export const StyledButton = styled.div`
    margin: ${props => props.outerMargin || "unset"};
    padding: ${props => props.outerPadding || ".5rem"};
    button {
        background-color: ${props => props.bgColor || COLORS.white};
        border: ${props => props.border || `1px solid ${COLORS.white}`};
        border-radius: ${props => props.borderRadius || ".5rem"};
        color: ${props => props.textColor || COLORS.black};
        font-family: ${props => props.fontFamily || FONTS.headline};
        font-size: ${props => props.fontSize || "1rem"};
        font-weight: ${props => props.fontSize || "900"};
        letter-spacing: ${props => props.letterSpacing || ".2rem"};
        margin: ${props => props.margin || "auto"};
        padding: ${props => props.padding || "1rem"};
        text-align: ${props => props.textAlign || "center"};
        text-decoration: ${props => props.textDecoration || "none"};
        text-transform: ${props => props.textTransform || "uppercase"};
        width: ${props => props.width || "12rem"};
    }
`

