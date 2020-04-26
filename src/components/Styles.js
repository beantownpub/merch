import styled from 'styled-components'

export const StyledLink = styled.div`
    a {
        margin: auto;
        padding: .5em 0;
        display: block;
        position: relative;
        font-size: 1.5em;
        font-weight: 700;
        letter-spacing: .15em;
        text-transform: uppercase;
        left: -17em;
        font-family: 'Raleway', Arial, sans-serif;
        color: white;
        text-decoration: none;
    }
    a:hover {
        color: #7cef7c;
    }
`;

export const StyledHamburger = styled.div`
    .hamburger {
    position: fixed;
    z-index: 1000;
    margin: .25em;
    padding: 0;
    width: 2.5em;
    height: 2.25em;
    border: none;
    text-indent: 2.5em;
    font-size: 1.5em;
    color: transparent;
    background: white;
    border-radius: .35em;
    opacity: .8;
    }
    .hamburger::before {
        position: absolute;
        top: 0.5em;
        right: 0.5em;
        bottom: 0.5em;
        left: 0.5em;
        background: linear-gradient(#373a47 20%, transparent 20%, transparent 40%, #373a47 40%, #373a47 60%, transparent 60%, transparent 80%, #373a47 80%);
        content: '';
        font-family: 'Raleway', Arial, sans-serif;
        color: #fbfb0e;
    }
`

export const StyledCloseMenu = styled.div`
    .menu_close {
        width: 1em;
        height: 1em;
        position: absolute;
        right: 1em;
        top: 1em;
        overflow: hidden;
        text-indent: 1em;
        font-size: 0.75em;
        border: none;
        background: transparent;
        color: transparent;
    }
    .menu_close::before,
    .menu_close::after {
        content: '';
        position: absolute;
        width: 3px;
        height: 100%;
        top: 0;
        left: 50%;
        background: #bdc3c7;
    }
    .menu_close::before {
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
    }
    .menu_close::after {
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }
`

export const StyledTopNav = styled.div`
    .top_nav {
        display: flex;
        flex-direction: row;
        margin: auto;
        float: right;
        a {
            padding: 1em 1.25em;
            font-size: 1.75em;
            font-weight: 700;
            letter-spacing: .15em;
            text-transform: uppercase;
            text-decoration: none;
            color: #363636;
            font-family: 'Raleway', Arial, sans-serif;
        }
        a:hover {
            color: red;
        }
    }
    @media (max-width: 374px)
    and (orientation: portrait)
    and (-webkit-min-device-pixel-ratio: 2) {
        .top_nav {
            display: none;
        }
    }
    @media (max-width: 700px)
    and (orientation: portrait)
    and (-webkit-min-device-pixel-ratio: 2) {
        .top_nav {
            display: none;
        }
    }
    @media (min-width: 375px)
    and (max-width: 768px)
    and (orientation: portrait)
    and (-webkit-min-device-pixel-ratio: 2) {
        .top_nav {
            display: none;
        }
    }
    @media (min-width: 600px)
    and (max-width: 768px)
    and (orientation: landscape)
    and (-webkit-min-device-pixel-ratio: 2) {
        .top_nav {
            display: none;
        }
    }
`

export const StyledSlideMenu = styled.div`
    .slide_menu {
        z-index: 1001;
        display: flex;
        flex-direction: column;
        width: max-content;
        margin: auto;
        padding: 1em 2em;
        background-color: ${props => props.menuColor || "red"};
        position: absolute;
        left: -22em;
    }
    .menuHead & {
        width: min-content;
        display: block;
        position: relative;
        h1 {
            font-size: 4em;
            font-weight: 700;
            letter-spacing: .15em;
            text-transform: uppercase;
            font-family: 'Raleway', Arial, sans-serif;
            color: white;
        }
    }
`

export const StyledNavBar = styled.div`
    z-index: 999;
    margin: 0;
    padding: 0;
    height: 5em;
    width: 100%;
    font-size: 66.6%;
    line-height: 1.15;
    background-color: ${props => props.barColor || "red"};
    position: fixed;
    box-shadow: 1px 1px 3px #888888;
    img {
        margin: .5em auto;
        padding: 1em 0;
        max-width: 60vw;
        max-height: 4em;
        left: 5em;
    }
`

export const StyledHead = styled.div`
    width: min-content;
    display: block;
    position: relative;
    font-size: 5em;
    letter-spacing: .15em;
    text-transform: uppercase;
    font-family: gotham-narrow-ultra;
    color: white;
`
export const StyledSportsWidget = styled.div `
    .sports_widget {
        width: max-content;
        margin: auto;
        display: flex;
        flex-flow: column wrap;
        padding: 3%;
        font-family: Proxima Nova Bold,Helvetica Neue Bold,Helvetica Bold,Arial Bold,sans-serif;
        background-color: ${props => props.barColor || "white"};
        border-left: .7em solid ${props => props.borderColor || "#FFB81C"};
        border-radius: .7em;
    }
    .offenseStats {
        display: flex;
        flex-flow: wrow wrap;
    }
    .team_info {
        display: flex;
        flex-flow: row wrap;
    }
    .top_block {
        margin: auto;
        display: flex;
        flex-flow: row wrap;
    }
    .stat_block {
        margin: auto;
        padding: 0 3%;
        display: flex;
        flex-flow: column wrap;
        text-align: left;
    }
    h2 {
        margin: auto 0;
        padding: .15em 0;
        width: min-content;
        font-size: 1.15em;
        text-transform: uppercase;
        letter-spacing: .1em;
        text-align: left;
    }
    h3 {
        margin: auto 0;
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
        padding: 3% 0;
        max-width: 8em;
    }
    svg {
        margin: auto;
        display: flex;
    }
    span {
        color: ${props => props.dataColor || "black"};
    }
    .widget_border {
        margin: auto;
        border: 1px solid #e2e2e2;
        border-radius: .7em;
        width: max-content;
    }
`