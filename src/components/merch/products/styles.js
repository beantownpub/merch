import styled from 'styled-components'
import { config } from '../../../utils/main'
const COLORS = config.colors
const FONTS = config.fonts

export const StyledMerchSection = styled.div`
    display: flex;
    flex-flow: row wrap;
    margin: 1rem auto;
    order: ${props => props.orderNumber || "0"};
    width: 95vw;
    .sectionTitle {
        display: flex;
        flex-flow: column nowrap;
        margin: auto;
        padding: 1.5rem 0;
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
        font-family: ${FONTS.content};
        font-size: 1.25rem;
        line-height: 125%;
        margin: auto;
    }
`

export const StyledMerchItem = styled.div`
    background-color: whitesmoke;
    border: .1rem solid ${COLORS.borderGray};
    box-shadow: ${props => props.boxShadow || `0px 5px 20px 0px ${COLORS.boxShadowGray}`};
    border-radius: .4rem;
    display: flex;
    flex-basis: 30rem;
    flex-flow: column nowrap;
    margin: .5rem;
    max-width: 90vw;
    padding: 1rem;
    label {
        font-family: ${FONTS.content};
        font-size: 1.25rem;
        font-weight: 900;
        padding: .5rem;
    }
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
        font-family: ${FONTS.headline};
        font-size: 1.5rem;
        font-weight: 700;
        letter-spacing: .15rem;
        text-align: left;
        text-transform: uppercase;
    }
    .itemPrice {
        color: ${COLORS.black};
        font-family: ${FONTS.content};
        font-size: 1.5rem;
        font-weight: 600;
        letter-spacing: .15rem;
        text-align: right;
        text-transform: uppercase;
    }
    .size  {
        padding: .5rem 0;
        select {
            border: .05rem solid ${COLORS.borderGray};
            border-radius: 4px;
            padding: .5rem;
        }
    }
    .qty {
        padding: .5rem 0;
        input {
            border: .05rem solid ${COLORS.borderGray};
            border-radius: 4px;
            padding: .5rem;
        }
    }
    p {
        font-family: ${FONTS.content};
        font-size: 1.25rem;
        line-height: 125%;
        padding: 1rem;
        max-width: 30rem;
    }
    img {
        border: .25rem solid ${COLORS.black};
        border-radius: 4px;
        min-width: 200px;
    }
`
