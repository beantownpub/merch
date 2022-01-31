import styled from 'styled-components'
import { config } from '../../../utils/main'
const COLORS = config.colors
const FONTS = config.fonts

export const StyledMenuItem = styled.div`
    background-color: whitesmoke;
    border: .1rem solid ${COLORS.borderGray};
    box-shadow: ${props => props.boxShadow || `0px 5px 20px 0px ${COLORS.boxShadowGray}`};
    border-radius: .4rem;
    display: flex;
    flex-basis: 30rem;
    flex-flow: column nowrap;
    margin: .5rem;
    max-width: 90vw;
    table {
        padding: .5rem;
        width: 100%;
        td {
            line-height: 125%;
            padding: .25rem;
        }
    }
    .itemName {
        color: ${COLORS.yellow};
        font-family: ${FONTS.poppins};
        font-size: 1.5rem;
        font-weight: 700;
        letter-spacing: .15rem;
        text-align: left;
        text-transform: uppercase;
    }
    .itemPrice {
        color: ${COLORS.black};
        font-family: ${FONTS.lato};
        font-size: 1.5rem;
        font-weight: 600;
        letter-spacing: .15rem;
        text-align: right;
        text-transform: uppercase;
    }
    p {
        font-family: ${FONTS.lato};
        font-size: 1.25rem;
        line-height: 125%;
        padding: 1rem;
        max-width: 30rem;
    }
`
