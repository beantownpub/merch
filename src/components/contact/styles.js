import styled from 'styled-components'

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
        font-family: gotham-narrow-ultra;
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
    width: 20rem;
    display: flex;
    flex-flow: column wrap;
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
            font-family: gotham-narrow-ultra;
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
    }
    h3 {
        padding: .25rem;
        font-size: .5rem;
        color: #000000;
        font-family: gotham-narrow-ultra;
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
        font-family: gotham-medium;
        font-size: .75em;
        font-style: italic;
    }
`
