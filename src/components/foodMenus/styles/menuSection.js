import styled from 'styled-components'
import { config } from '../../../utils/main'
const COLORS = config.colors
const FONTS = config.fonts

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
        font-family: ${FONTS.headline};
        font-size: 1.95rem;
        color: ${COLORS.red};
    }
    h3 {
        font-family: ${FONTS.content};
        font-size: 1.25rem;
        line-height: 125%;
        margin: auto;
        padding: .5rem 0;
        text-align: center;
        width: 100%;
    }
    p {
        font-family: ${FONTS.headline};
        font-size: 1.25rem;
        line-height: 125%;
        margin: auto;
    }
`
