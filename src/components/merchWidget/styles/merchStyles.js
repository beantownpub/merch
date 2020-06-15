import styled from 'styled-components'

export const StyledMerchContainer = styled.div`
    margin: auto;
    display: flex;
    flex-flow: row wrap;
    .gutter {
        margin-top: 2rem;
        padding: 1rem;
        display: flex;
        flex-flow: column wrap;
        width: max-content;
        height: 100vh;
        border-right: 1px solid #e2e2e2;
        position: absolute;
        top: 2.5rem;
        background: #000000;
        text-align: center;
    }
    .products {
        margin: 0 auto;
        display: flex;
        flex-flow: column wrap;
        width: max-content;
        height: max-content;
        max-width: 60vw;
    }
    .categoryContainer {
        display: flex;
        flex-flow: column wrap;
    }
    .category {
        margin: 0 auto;
        display: flex;
        flex-flow: row wrap;
        width: max-content;
        height: max-content;
        max-width: 60vw;
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
        .gutter {
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