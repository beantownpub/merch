import styled from 'styled-components'
// const CONFIG = require('../content/config.json')
// const COLORS = CONFIG.colors

export const StyledImageSlider = styled.div`
    margin-top: ${props => props.styles.marginTop || "auto"};
    margin-right: ${props => props.styles.marginRight || "auto"};
    margin-bottom: ${props => props.styles.marginBottom || "auto"};
    margin-left: ${props => props.styles.marginLeft || "auto"};
    padding: ${props => props.styles.padding || "0"};
    display: ${props => props.styles.display || "flex"};
    flex-flow: ${props => props.styles.flexFlow || "column nowrap"};
    width: ${props => props.styles.width || "90vw"};
    max-width: ${props => props.styles.maxWidth || "30rem"};
    img {
        margin: ${props => props.styles.img.margin || "auto"};
        max-width: ${props => props.styles.img.maxWidth || "90%"};
    }
    @media (min-width: 320px)
    and (max-width: 768px)
    and (orientation: portrait)
    and (-webkit-min-device-pixel-ratio: 2) {
        margin-right, margin-left: auto 
    }
`
