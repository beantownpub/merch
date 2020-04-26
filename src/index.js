import React from 'react'
import ReactDOM from 'react-dom'
import NHLTeams from './components/sportsWidgets/nhlWidget/nhlTeams'
import NFLTeams from './components/sportsWidgets/nflWidget/nflTeams'
import NFLMatchups from './components/sportsWidgets/nflWidget/nflMatchups'
import NHLGames from './components/sportsWidgets/nhlWidget/nhlGames'
import NHLStandings from './components/sportsWidgets/nhlWidget/nhlStandings'
import Sports from './components/sportsWidgets/sports'
import Notes from './components/notesWidget/notesWidget'
import Merch from './components/merchWidget/merch'
import { StyledHead } from './components/Styles'
import { TopMenuBar, LinkList, TopNavBar, linkProps } from './components/TopBar'
const config = require('./config.json')
const pages = config.jalgraves.pages
const topBarMenu = document.getElementById('topBar')
const nhlTeams = document.getElementById('nhlTeams')
const nflWidget = document.getElementById('nflWidget')
const nflMatchups = document.getElementById('nflMatchups')
const nhlGames = document.getElementById('nhlGames')
const nhlStandings = document.getElementById('nhlStandings')
const sports = document.getElementById('sportsLinks')
const notes = document.getElementById('notes')
const merch = document.getElementById('merch')

function topMenu() {
    return (
        <div >
            <StyledHead>jal</StyledHead>
            <StyledHead>gra</StyledHead>
            <StyledHead>ves</StyledHead>
        </div>
    )
}

function navBar() {
    return (
        <TopNavBar
            fontColor='rgb(252, 204, 18)'
            hoverColor='white'
            props={linkProps(pages, 'top_menu')}
        />
    )
}

const menuList = <LinkList props={linkProps(pages, 'menu_list')} />

function navBarLogo() {
    return (
        <a href="/">
            <img style={{position: 'absolute', padding: '.25em'}} src="/images/jal.gif"  alt="jalgraves logo" />
        </a>
    );
}

ReactDOM.render(
    <TopMenuBar
        bottomMenu=''
        fontColor='#363636'
        navBarLogo={navBarLogo()}
        topMenu={topMenu()}
        menuList={menuList}
        navBar={navBar()}
        barColor='white'
        menuColor='#494040' />,
    topBarMenu
)

if (nhlTeams) {
    ReactDOM.render(
        <NHLTeams/> ,
        nhlTeams
    )
}

if (nflWidget) {
    ReactDOM.render(
        <NFLTeams/> ,
        nflWidget
    )
}

if (nflMatchups) {
    ReactDOM.render(
        <NFLMatchups/> ,
        nflMatchups
    )
}

if (nhlGames) {
    ReactDOM.render(
        <NHLGames/> ,
        nhlGames
    )
}

if (nhlStandings) {
    ReactDOM.render(
        <NHLStandings/> ,
        nhlStandings
    )
}

if (sports) {
    ReactDOM.render(
        <Sports/> ,
        sports
    )
}

if (notes) {
    ReactDOM.render(
        <Notes/>,
        notes
    )
}

if (merch) {
    ReactDOM.render(
        <Merch/>,
        merch
    )
}
