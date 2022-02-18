import styled from 'styled-components'
import { config } from '../../utils/main'

const FONTS = config.fonts

export const iconStyle = {
    margin: 'auto .5rem',
    color: '#e6cb00',
    fontSize: '1rem'
}

export const StyledButton = styled.div`
    button {
        margin: .25rem auto;
        padding: 1rem;
        width: ${props => props.buttonWidth || "12rem"};
        font-family: ${FONTS.headline};
        background-color: ${props => props.bgColor || "white"};
        border: 1px solid ${props => props.borderColor || "white"};
        border-radius: 6px;
        text-decoration: none;
        font-size: 1rem;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: .2rem;
        color: black;
    }
`

export const StyledContactForm = styled.div`
    display: flex;
    flex-flow: column wrap;
    margin: auto;
    max-width: 80vw;
    padding: 1rem;
    form {
        display: flex;
        flex-flow: column wrap;
        input {
            margin: .5rem 0;
            padding: .5rem;
            border: .05rem solid #e2e2e2;
            border-radius: .4em;
        }
        label {
            margin: auto .25rem;
            font-family: ${FONTS.headline};
            letter-spacing: .25rem;
            text-transform: uppercase;
        }
        textarea {
            border: .05rem solid #e2e2e2;
            border-radius: .4rem;
        }
    }
    h2 {
        font-size: 1.5rem;
        margin: auto;
        padding: 1rem;
        text-transform: uppercase;
    }
    h3 {
        padding: .25rem;
        font-size: .5rem;
        color: #000000;
        font-family: ${FONTS.headline};
        text-transform: uppercase;
    }
    .stateZip {
        display: flex;
        flex-flow: row nowrap;
        form {
            input {
                margin: 0 .25em;
            }
        }
    }
    .billingAddress {
        font-family: ${FONTS.content};
        font-size: .75em;
        font-style: italic;
    }
`
