import styled from 'styled-components'


export const StyledFoodMenu = styled.div`
    width: 100%;
    margin-top: 5rem;
    margin-bottom: 1rem;
    background-color: whitesmoke;
    .warning {
        display: flex;
        h3 {
            margin: auto;
            font-family: gotham;
            font-size: 1rem;
        }
    }
`

export const StyledMenuSection = styled.div`
    margin: .5rem auto;
    width: max-content;
    max-width: 95vw;
    display: flex;
    flex-direction: column;
    section {
        display: flex;
        flex-flow: row wrap;
    }
    h2 {
        margin: .5rem auto;
        letter-spacing: .2rem;
        text-transform: uppercase;
        font-family: gotham-ultra;
        font-size: 1.75rem;
    }
    p {
        margin: auto;
        padding: .5rem;
        font-family: gotham;
    }
`

export const StyledMenuItem = styled.div`
    margin: .5rem auto;
    display: flex;
    flex-direction: column;
    width: 30rem;
    border: .1rem solid black;
    border-radius: .4rem;
    .namePrice {
        padding: .5rem;
        font-family: gotham-ultra;
        text-transform: uppercase;
        letter-spacing: .2rem;
        display: grid;
        grid-template-columns: 15rem 4rem;
        grid-column-gap: 7rem;
        h2, h3 {
            font-size: 1.25rem;
        }
    }
    p {
        padding: .5rem;
        font-family: gotham;
    }
`
