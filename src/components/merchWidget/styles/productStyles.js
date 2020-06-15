import styled from 'styled-components'

export const StyledProductsContainer = styled.div`
    margin: .5rem auto;
    display: flex;
    flex-flow: column wrap;
    .productList {
        margin: auto;
        display: flex;
        flex-flow: row wrap;
    }
`
export const StyledProduct = styled.div`
    margin: .5rem;
    padding: .5rem;
    width: 25rem;
    display: flex;
    flex-flow: column wrap;
    font-family: gotham-narrow-ultra;
    background-color: ${props => props.bgColor || "white"};
    border-left: 1px solid #e2e2e2;
    border-top: 1px solid #e2e2e2;
    border-right: 1px solid #e2e2e2;
    border-bottom: 1px solid #e2e2e2;
    border-radius: .4rem;
    text-decoration: none;
    font-size: 1.5rem;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: .09rem;
    .description {
        text-transform: none;
        font-family: gotham;
    }
    .purchaseInfo {
        margin: auto;
        padding: 1rem;
        display: flex;
        flex-flow: row wrap;
        width: max-content;
        label {
            margin: auto;
            font-family: gotham-medium;
            font-size: .75rem;
        }
        input {
            padding: .25rem;
            border: 1px solid #e2e2e2;
            border-radius: .2rem;
            font-size: .75rem;
            font-weight: bold;
        }
        select {
            border: none;
        }
    }
    .price {
        margin: auto;
        font-weight: bold;
        color: green;
        width: 5rem;
        text-align: left
    }
    .size {
        margin: auto .5rem;
    }
    .qty {
        margin: auto .5rem;
    }
`
export const StyledInventoryContainer = styled.div`
    margin: auto;
    display: flex;
    flex-flow: column wrapp;
`
