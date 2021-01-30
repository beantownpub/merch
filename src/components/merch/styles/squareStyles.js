import styled from 'styled-components'

export const StyledSquareForm = styled.div`
    display: flex;
    flex-flow: column wrap;
    margin-top: 8em;
    top: 50%;
    width: 350px;
    button {
        border: 0;
        font-weight: 500;
    }

    fieldset {
        margin: 0;
        padding: 0;
        border: 0;
    }

    #form-container {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        position: relative;
        transform: translateY(-50%);
        background-color: transparent;
    }

    .button-credit-card {
        width: 100%;
        height: 56px;
        margin-top: 10px;
        background: #4A90E2;
        border-radius: 6px;
        cursor: pointer;
        display: block;
        color: #FFFFFF;
        font-size: 16px;
        line-height: 24px;
        font-weight: 700;
        letter-spacing: 0;
        text-align: center;
        -webkit-transition: background .2s ease-in-out;
        -moz-transition: background .2s ease-in-out;
        -ms-transition: background .2s ease-in-out;
        transition: background .2s ease-in-out;
    }

    .sq-card-details .sq-error {
        background: transparent;
    }

    .sq-card-form-wrapper {
        background: whitesmoke;
    }

    .button-credit-card:hover {
        background-color: #4281CB;
    }

    .button-credit-card:disabled {
        background-color: #ccc;
    }

    .orderComplete {
        margin-top: 2rem;
        margin-bottom: 2rem;
        margin-left: auto;
        margin-right: auto;
        padding: 1rem;
        width: 300px;
        border: 1px solid #e2e2e2;
        border-radius: 6px;
        button {
            border: 1px solid #e2e2e2;
        }
        h3 {
            color: green;
            text-transform: uppercase;
            font-family: gotham-narrow-ultra;
            font-size: 1.5rem;
            letter-spacing: .25rem;
        }
        p {
            padding: .5em 0;
            font-family: gotham-medium;
            font-size: 1.25rem;
            letter-spacing: .15rem;
            line-height: 2rem;
        }
    }
`