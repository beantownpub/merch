import styled from 'styled-components'
import { config } from '../../../utils/main'
const COLORS = config.colors
const FONTS = config.fonts

export const StyledRefundContainer = styled.div`
    background-color: ${COLORS.yellow};
    border: unset;
    border-radius: unset;
    box-shadow: unset;
    display: flex;
    flex-flow: column wrap;
    margin: 5rem auto 2rem auto;
    padding: 2rem;
    width: 100%;
    article {
        display: flex;
        flex-flow: column wrap;
        padding: 1rem;
    }
    h1 {
        color: ${COLORS.black};
        font-family: ${FONTS.button};
        letter-spacing: .25rem;
        line-height: 100%;
        margin: auto;
        padding: 1rem;
        text-transform: uppercase;
    }
    h2 {
        border-bottom: unset;
        font-family: ${FONTS.headline};
        margin: auto;
        padding: .5rem;
    }
    p {
        font-family: ${FONTS.content};
        font-size: 125%;
        line-height: 125%;
        margin: auto;
        padding: .5rem;
        max-width: 350px;
        a {
            color ${COLORS.dodgerBlue};
            font-weight: 600;
            text-decoration: none;
        }
        a:hover {
            color: ${COLORS.red};
        }
    }
`
