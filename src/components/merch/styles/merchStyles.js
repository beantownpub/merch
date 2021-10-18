import styled from 'styled-components'

export const StyledMerchContainer = styled.div`
    margin-top: 5rem;
    margin-right: auto;
    margin-bottom: auto;
    margin-left: auto;
    display: flex;
    flex-flow: row wrap;
    .products {
        margin: 0 auto;
        display: flex;
        flex-flow: column wrap;
        width: max-content;
        height: max-content;

    }
    .categoryContainer {
        display: flex;
        flex-flow: row wrap;
        h1 {
            margin: auto;
            width: 100%;
            color: #fcba03;
        }
    .anchorButton {
        width: 100%;
        display: flex;
        a {
            margin: .25rem auto;
            padding: 1rem;
            width: ${props => props.width || "12rem"};
            height: min-content;
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
    }
    }
    .category {
        margin: 0 auto;
        display: flex;
        flex-flow: row wrap;
        width: max-content;
        height: max-content;
        max-width: 80vw;
    }
    h1 {
        margin: .25rem auto;
        padding: .5em;
        width: min-content;
        text-align: center;
        font-size: 1.5em;
        font-family: gotham-narrow-ultra;
        text-transform: uppercase;
        letter-spacing: .1em;
    }
    @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
        .merchNav {
            margin-top: 2rem;
            position: unset;
            bottom: unset;
            width: 100vw;
            height: max-content;
            background: unset;
        }
        .products {
            max-width: unset;
            width: min-content;
        }
        .category {
            max-width: unset;
            width min-content;
        }
    }
    @media only screen and (min-device-width: 300px) and (max-device-width: 374px) and (-webkit-min-device-pixel-ratio: 2) {
        .merchNav {
            margin-top: 2rem;
            position: unset;
            bottom: unset;
            width: 100vw;
            height: max-content;
            background: unset;
        }
        .products {
            max-width: unset;
            width: min-content;
        }
        .category {
            max-width: unset;
            width min-content;
        }
    }
`

export const StyledMerchNav = styled.div`
    margin: auto;
    display: flex;
    flex-flow: row wrap;
    width: 100vw;
    height: max-content;
    border-bottom: 1px solid #e2e2e2;
    position: relative;
    background: #fcba03;
    padding: 1rem;
    text-align: center;
    .productNav {
        display: flex;
        flex-flow: row wrap;
        position: relative;
        left: 10vw;
    }
    .numCartItems {
        height: max-content;
        margin: 0 1rem;
        padding: 1rem;
        background-color: #000000;
        color: #fcba03;
        display: flex;
        border-radius: 6px;
    }
    .numCartItemsButton {
        margin: 0 1rem;
    }
`
