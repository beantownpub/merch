import styled from 'styled-components'
// const CONFIG = require('../content/config.json')
// const COLORS = CONFIG.colors

export const StyledImageSlider = styled.div`
    display: ${props => props.styles.display || "flex"};
    flex-flow: ${props => props.styles.flexFlow || "column nowrap"};
    margin: auto;
    max-width: ${props => props.styles.maxWidth || "500px"};
    padding: ${props => props.styles.padding || "1rem"};
    width: 100%;
    img {
        margin: ${props => props.styles.img.margin || "auto"};
        max-width: ${props => props.styles.img.maxWidth || "350px"};
    }
    @media (min-width: 320px)
    and (max-width: 768px)
    and (orientation: portrait)
    and (-webkit-min-device-pixel-ratio: 2) {
        margin-right, margin-left: auto
    }
`
