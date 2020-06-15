import styled from 'styled-components'

export const StyledSportsWidget = styled.div `
    width: max-content;
    margin: auto;
    display: flex;
    flex-flow: column wrap;
    padding: 1em;
    font-family: Proxima Nova Bold,Helvetica Neue Bold,Helvetica Bold,Arial Bold,sans-serif;
    background-color: ${props => props.barColor || "white"};
    border-left: .7em solid ${props => props.borderColor || "#FFB81C"};
    border-top: 1px solid #e2e2e2;
    border-right: 1px solid #e2e2e2;
    border-bottom: 1px solid #e2e2e2;
    border-radius: .7em;
    .team_info {
        display: flex;
        flex-flow: row wrap;
        width: max-content;
    }
    .top_block {
        margin: auto;
        display: flex;
        flex-flow: column wrap;
        h3 {
            margin: auto;
        }
    }
    .category {
        margin: 1% auto
        max-width: 95%
        border: 1px solid #e2e2e2
        border-radius: .7em
        height: min-content
        h2 {
            width: 100%
            margin: auto
            padding: .15em
            text-align: center
        }
    }
    h2 {
        margin: auto;
        padding: .15em 0;
        width: min-content;
        font-size: 1.15em;
        text-transform: uppercase;
        letter-spacing: .1em;
        text-align: left;
    }
    h3 {
        margin: auto .3em;
        padding: .15em 0;
        width: max-content;
        font-size: 1em;
        text-transform: uppercase;
        letter-spacing: .1em;
        text-align: left;
    }
    h4 {
        margin: auto 0;
        padding: .15em 0;
        width: max-content;
        text-transform: uppercase;
        letter-spacing: .1em;
        text-align: right;
        color: ${props => props.dataColor || "black"};
    }
    img {
        margin: auto;
        padding: 0;
        max-width: 6.5em;
        max-height: 30px;
    }
    svg {
        margin: auto;
        display: flex;
    }
    span {
        color: ${props => props.dataColor || "black"};
    }
`
