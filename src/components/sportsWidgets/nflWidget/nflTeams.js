import React from 'react'
import styled from 'styled-components'
import NFLTeamStats from './nflTeamStats'

const nfl = require('./nflConfig.json')

const StyledNFL = styled.div`
    font-family: gotham-narrow-ultra;
    text-transform: uppercase;
    h1 {
        padding: .75em;
        font-size: 2em;
        text-align: center;
        letter-spacing: .07em;
    }
    h2 {
        margin: .5em auto;
        font-family: gotham-narrow-ultra;
        font-size: 1.25em;
        text-align: center;
    }
`

const StyledDivision = styled.div`
    display: flex;
    flex-flow: row wrap;
    max-width: 100em;
`

function makeWidgets (teams) {
    const widgets = []
    for (const team of Object.keys(teams)) {
        if (teams[team]['abbreviation']) {
            widgets.push(
                <NFLTeamStats
                    key={teams[team]['id']}
                    team={teams[team]['mascot']}
                    abbr={teams[team]['abbreviation']}
                    dataColor={teams[team]['color2']}
                    borderColor={teams[team]['color1']}
                    conference={teams[team]['conference']}
                />
            )
        }
    }
    return (
        <StyledDivision>{widgets}</StyledDivision>
    )
}

export default class NFLTeams extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <StyledNFL>
                <h1>AFC East</h1>
                {makeWidgets(nfl.afc.east)}
                <h1>AFC North</h1>
                {makeWidgets(nfl.afc.north)}
                <h1>AFC South</h1>
                {makeWidgets(nfl.afc.south)}
                <h1>AFC West</h1>
                {makeWidgets(nfl.afc.west)}
                <h1>NFC East</h1>
                {makeWidgets(nfl.nfc.east)}
                <h1>NFC North</h1>
                {makeWidgets(nfl.nfc.north)}
                <h1>NFC South</h1>
                {makeWidgets(nfl.nfc.south)}
                <h1>NFC West</h1>
                {makeWidgets(nfl.nfc.west)}
            </StyledNFL>
        )
    }
}