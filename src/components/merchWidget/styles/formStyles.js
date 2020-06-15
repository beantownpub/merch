import styled from 'styled-components'

export const StyledCheckoutForm = styled.div`
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
    }
    h3 {
        padding: .25rem;
        font-size: .5rem;
        color: red;
        font-family: gotham;
        font-weight: bold;
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
