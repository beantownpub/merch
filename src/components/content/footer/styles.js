import styled from 'styled-components'
import { config } from '../../../utils/main'
const COLORS = config.colors
const FONTS = config.fonts

export const StyledFooter = styled.div`
    border-top: .2rem solid ${COLORS.yellow};
    display: flex;
    margin: 12rem auto;
    padding: 2rem 0;
    position: relative;
    width: 100%;
    footer {
        margin: auto;
        font-family: ${FONTS.footer};
        text-transform: uppercase;
        color: ${COLORS.white};
        text-align: center;
        text-shadow: .1em .15em .35em ${COLORS.black};
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
        font-family: ${FONTS.script};
        font-size: 2rem;
        color: ${COLORS.yellow};
        text-transform: capitalize;
        letter-spacing: none;
    }
`
