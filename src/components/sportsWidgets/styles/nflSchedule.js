import styled from 'styled-components'

export const StyledNFLschedule = styled.div `
    width: min-content;
    margin: auto;
    padding: 1%;
    height: 20em;
    overflow: scroll;
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
        display: none;
    }
    .schedule_row {
        margin: auto;
        max-width: 99%;
        display: grid;
        grid-template-rows: 2.5em;
        grid-template-columns: 1em 1em 3em 7em;
        grid-gap: .75em;
        grid-template-areas: "week type opponent status";
    }
    .data {
        margin: auto 0;
    }
    img {
        width: 2.5em;
    }
    h3 {
        margin: auto .3em;
        padding: .15em 0;
        font-size: 1em;
        text-transform: uppercase;
        letter-spacing: .1em;
        text-align: left;
    }
    span {
        color: ${props => props.dataColor || "red"};
    }
`