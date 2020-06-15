import styled from 'styled-components'

export const StyledStatBlock = styled.div `
    padding: 2%;
    display: inline-flex;
    flex-flow: column wrap;
    height: min-content;
    .stat_row {
        display: inline-grid;
        grid-template-columns: 10em 3em;
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
export const StyledNFLTeamStats = styled.div `
    margin: 1% auto;
    display: flex;
    flex-flow: row wrap;
    height: 20em;
    max-width: 15em;
    overflow: scroll;
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
        display: none;
    }
`