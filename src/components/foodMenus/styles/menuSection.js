import styled from 'styled-components'
const CONFIG = require('../../content/config.json')
const COLORS = CONFIG.colors
const FONTS = CONFIG.fonts

export const StyledMenuSection = styled.div`
    margin: 1rem auto;
    width: 95vw;
    display: flex;
    flex-flow: row wrap;
    .sectionTitle {
        display: flex;
        flex-flow: column nowrap;
        margin: auto;
        padding: .5rem 0;
        text-align: center;
        width: 100%;
    }
    .sectionText {
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        margin: auto;
        padding: .5rem 0;
        text-align: center;
        width: 100%;
        p {
            font-size: 1.5rem;
        }
    }
    .sectionItems {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        margin: auto;
    }
    h2 {
        letter-spacing: .2rem;
        text-transform: uppercase;
        font-family: ${FONTS.poppins};
        font-size: 1.95rem;
        color: ${COLORS.red};
    }
    p {
        font-family: ${FONTS.lato};
        font-size: 1.25rem;
        line-height: 125%;
        margin: auto;
    }
`
