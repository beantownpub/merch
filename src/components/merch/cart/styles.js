import styled from 'styled-components'
import { config } from '../../../utils/main'
const COLORS = config.colors
const FONTS = config.fonts

export const StyledNumCartItems = styled.div`
    color: ${COLORS.black};
    display: flex;
    flex-flow: row nowrap;
    font-family: ${FONTS.headline};
    font-size: 1em;
    letter-spacing: .09em;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    .numCartItemsButton {
        margin: auto;
    }
    .merchNav {
        background-color: ${COLORS.black};
        border-radius: 4px;
        color: ${COLORS.yellow};
        display: flex;
        flex-flow: column wrap;
        justify-content: center;
        margin: .5rem;
        padding: .75rem;
        width: min-content;
        h3 {
            font-weight: 900;
            text-align: center;
            width: 100%;
        }
    }
`
export const StyledCartContainer = styled.div`
    background-color: ${COLORS.white};
    border: 1px solid ${COLORS.borderGray};
    border-radius: 4px;
    display: flex;
    flex-flow: column nowrap;
    font-family: ${FONTS.headline};
    height: -webkit-fill-available;
    height: -moz-available;
    left: -35em;
    margin: auto;
    max-width: 99vw;
    overflow: scroll;
    padding: 1.5em;
    position: fixed;
    top: 0;
    z-index: 1002;
    .cartTotal {
        font-family: ${FONTS.content};
        font-size: 1.25em;
        font-weight: 900;
    }
`


export const StyledItemsTable = styled.div`
    margin: 1rem auto;
    display: flex;
    flex-flow: column wrap;
    h2 {
        padding: 1rem;
    }
    table {
        border: 1px solid ${COLORS.shadowGray};
        border-radius: .5rem;
        box-shadow: ${props => props.boxShadow || `.25rem .25rem 1rem .5rem ${COLORS.boxShadowGray}`};
        font-family: ${FONTS.content};
        font-weight: 900;
        margin: auto;
        padding: .25rem;
        width: 100%;
        th {
            background: ${COLORS.yellow};
            border: 1px solid ${COLORS.black};
            font-weight: 900;
            padding: .25rem;
        }
        td {
            border: 1px solid ${COLORS.black};
            padding: .25rem;
            text-align: center;
        }
    }
`

export const StyledContentContainer = styled.div`
    border: ${props => props.border || "unset" };
    border-radius: ${props => props.borderRadius || "unset"};
    display: flex;
    flex-flow: column wrap;
    font-family: poppins;
    margin: 1rem auto;
    width: ${props => props.width || "100%" };
    h1 {
        color: ${props => props.h1Color || COLORS.black};
    }
`
