import styled from 'styled-components'
const CONFIG = require('../../content/config.json')
const COLORS = CONFIG.colors
const FONTS = CONFIG.fonts

export const StyledMenuSection = styled.div`
    display: flex;
    flex-flow: row wrap;
    margin: 1rem auto;
    order: ${props => props.orderNumber || "0"};
    width: 95vw;
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
    .sides {
        order: 7;
    }
    h2 {
        letter-spacing: .2rem;
        text-transform: uppercase;
        font-family: ${FONTS.poppins};
        font-size: 1.95rem;
        color: ${COLORS.red};
    }
    h3 {
        font-family: ${FONTS.lato};
        font-size: 1.25rem;
        line-height: 125%;
        margin: auto;
        padding: .5rem 0;
        text-align: center;
        width: 100%;
    }
    p {
        font-family: ${FONTS.lato};
        font-size: 1.25rem;
        line-height: 125%;
        margin: auto;
    }
`
