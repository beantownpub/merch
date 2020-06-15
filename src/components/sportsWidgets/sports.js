import React from 'react'
import SportsLink from './sportsLink'
import styled from 'styled-components'

const StyledLeagueLinks = styled.div `
    margin: auto;
    padding: 5%;
    font-family: gotham-narrow-ultra;
    color: black;
    display: flex;
    flex-flow: column wrap;
    width: 20em;
    img {
        margin: auto;
        padding: .25em;
        max-width: 5em;
    }
`


export default class Sports extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (
            <div>
                <StyledLeagueLinks>
                    <img src='/images/nhl/nhl.png' alt='pro hockey logo' />
                    <SportsLink
                        name='team stats'
                        target='/nhl-team-stats'
                        league='nhl'
                    />
                    <SportsLink
                        name='standings'
                        target='/nhl-standings'
                        league='nhl'
                    />
                    <SportsLink
                        name='schedule & scores'
                        target='/nhl-games'
                        league='nhl'
                    />
                </StyledLeagueLinks>
                <StyledLeagueLinks>
                    <img src='/images/nfl/nfl.png' alt='Pro football logo' />
                    <SportsLink
                        target='/nfl-team-stats'
                        name='team stats'
                        league='nfl'
                    />
                    <SportsLink
                        name='standings'
                        target='/nfl-standings'
                        league='nhl'
                    />
                    <SportsLink
                        name='schedule & scores'
                        target='/nfl-games'
                        league='nhl'
                    />
                </StyledLeagueLinks>
            </div>
        )
    }
}