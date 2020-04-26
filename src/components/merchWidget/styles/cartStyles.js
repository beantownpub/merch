import styled from 'styled-components'

export const StyledNumCartItems = styled.div`
    margin: .5em auto;
    padding: 1em;
    width: max-content;
    display: flex;
    flex-flow: column wrap;
    font-family: gotham-narrow-ultra;
    font-size: 1em;
    background-color: ${props => props.bgColor || "#ffe419"};
    border: 1px solid #ffe419;
    border-radius: .5em;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: .09em;
    color: black;
`
export const StyledCartContainer = styled.div`
    margin: auto;
    padding: 1em;
    position: absolute;
    z-index: 1002;
    left: -33em;
    width: max-content;
    display: flex;
    background-color: white;
    flex-flow: column wrap;
    border: 1px solid #e2e2e2;
    border-radius: .4em;
    .cartList {
        margin: auto;
        width: 30em;
        display: flex;
        flex-flow: column wrap;
    }
    h1 {
        margin: 0 auto;
        font-size: .25rem;
        width: min-content;
    }
    h2 {
        margin: auto;
        font-family: gotham-narrow-ultra;
        text-transform: uppercase;
        letter-spacing: .2rem;
    }
    .cartTotal {
        font-family: gotham-medium;
        font-size: 1rem;
        text-transform: uppercase;
        letter-spacing: .2rem;
    }
`
export const StyledCartItem = styled.div`
    margin: .25em auto;
    padding: .25em;
    display: flex;
    flex-flow: column wrap;
    background-color: ${props => props.bgColor || "white"};
    border: 1px solid #e2e2e2;
    border-radius: .4em;
    font-size: 1em;
    text-align: center;
    letter-spacing: .09em;
    .grid {
        width: max-content;
        margin: auto;
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 5em 3em 1em 3em auto;
        grid-gap: .25em;
        font-size: 1em;
        text-align: center;
        font-family: gotham;
    }
    .name {
        text-align: left;
        font-family: gotham-medium;
        font-size: .75em;
    }
    .size, .quantity {
        font-family: gotham-medium;
        font-size: .75em;
    }

    .description {
        text-transform: none;
        font-family: gotham;
    }
    .menu_list {
        display: none;
    }
`
