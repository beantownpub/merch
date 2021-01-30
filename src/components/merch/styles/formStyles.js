import styled from 'styled-components'

export const StyledCheckoutForm = styled.div`
    margin: auto auto 2rem auto;
    display: flex;
    flex-flow: column wrap;
    width: 355px;
    form {
        display: flex;
        flex-flow: column wrap;
        input {
            margin: .5rem 0;
            padding: .5rem;
            width: 350px;
            height: 40px;
            border: .05rem solid #e2e2e2;
            border-radius: 6px;
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
        width: 350px;
        display: flex;
        flex-flow: row nowrap;
        input:first-of-type {
            width: 50px;
        }
        input:nth-of-type(2) {
            width: 100px;
        }
    }
    .billingAddress {
        margin: auto;
        font-family: gotham-medium;
        font-size: 1em;
        font-style: italic;
    }
    .sameAsBillingAddress {
        display: flex;
        flex-flow: row no wrap;
        input:first-of-type {
            width: 15px;
            height: 15px;
        }
    }
    .shippingAddress {
        display: flex;
        flex-flow: column wrap;
    }
`
