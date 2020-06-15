import React from 'react'
import styled from 'styled-components'
import NHLTeamCard from './nhlTeamCard'
import NHLScoreCard from './nhlScoreCard'
import SportsLink from '../sportsLink'

const config = require('./nhlConfig.json')

const StyledMatchup = styled.div `
    margin: auto;
    padding: 0 .25em;
    display: flex;
    flex-flow: column wrap;
    height: min-content;
    width: max-content;
    h1 {
        padding: .75em;
        font-family: gotham-narrow-ultra;
        font-size: 1.25em;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: .07em;
    }
    h3 {
        font-family: Proxima Nova Bold,Helvetica Neue Bold,Helvetica Bold,Arial Bold,sans-serif;
        font-size: 1em;
        text-transform: uppercase;
        letter-spacing: .1em;
    }
    span {
        color: ${props => props.dataColor || "#C60C30"};
    }
    .match {
        margin: auto;
        display: inline-flex;
        flex-flow: row nowrap;
        width: min-content;
    }

`

const StyledNHLGames = styled.div `
    display: flex;
    flex-flow: row wrap;
    max-width: 768px;
    h2 {
        font-family: gotham-narrow-ultra;
        font-size: 2em;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: .07em;
    }
`

const StyledNHLGamesContainer = styled.div `
    h2 {
        font-family: gotham-narrow-ultra;
        font-size: 2em;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: .07em;
    }
`
function teamAbbreviation (team) {
    const teamAbbrs = config['team_abbrs']
    const teamName = team.toLowerCase()
    return teamAbbrs[teamName]
}

function teamDivision (team) {
    const divisions = config['divisions']
    const teamName = team.toLowerCase()
    return divisions[teamName]
}

function teamConference (team) {
    const conferences = config['conferences']
    const teamName = team.toLowerCase()
    return conferences[teamName]
}

function teamInfo (team) {
    let abbr = teamAbbreviation(team)
    let division = teamDivision(team)
    let conference = teamConference(team)
    return config[conference][division][abbr]
}

function formatDate (dateString, gameTime = true) {
    const months = {
        0: 'January',
        1: 'February',
        2: 'March',
        3: 'April',
        4: 'May',
        5: 'June',
        6: 'July',
        7: 'August',
        8: 'September',
        9: 'October',
        10: 'November',
        11: 'December'
    }
    let date = new Date(dateString)
    let monthNum = date.getMonth()
    let month = months[monthNum]
    let day = date.getDate()
    let hour = date.getHours()
    let minutes = (date.getMinutes() === 0) ? '00' : date.getMinutes()
    if (gameTime) {
        return `${month} ${day}, ${hour}:${minutes}`
    } else {
        return `${month} ${day}`
    }
}

function makeWidgets (games) {
    const widgets = []
    let cnt = 1
    for (const game of Object.keys(games)) {
        let gameStatus = games[game]['status']
        if (gameStatus === 'Final') {
            let awayInfo = teamInfo(games[game]['away_team']['name'])
            let homeInfo = teamInfo(games[game]['home_team']['name'])
            let awayScore = games[game]['away_team']['score']
            let homeScore = games[game]['home_team']['score']
            let lineScore = games[game]['linescore']
            let shootOut = games[game]['linescore']['hasShootout']
            let status = (shootOut) ? 'Final - Shootout' : 'Final'
            widgets.push(
                <NHLScoreCard
                    key={cnt}
                    currentStatus={gameStatus['abstractGameState']}
                    statusText={status}
                    awayAbbr={awayInfo['abbreviation']}
                    homeAbbr={homeInfo['abbreviation']}
                    awayScore={awayScore}
                    homeScore={homeScore}
                    lineScore={lineScore}
                    awayBorderColor={awayInfo['color1']}
                    homeBorderColor={homeInfo['color1']}
                />
            )
        }
        if (gameStatus['abstractGameState'] === 'Final') {
            let awayInfo = teamInfo(games[game]['teams']['away']['team']['name'])
            let homeInfo = teamInfo(games[game]['teams']['home']['team']['name'])
            let awayScore = games[game]['teams']['away']['score']
            let homeScore = games[game]['teams']['home']['score']
            let lineScore = games[game]['linescore']
            let shootOut = lineScore['hasShootout']
            let status = (shootOut) ? 'Final - Shootout' : 'Final'
            widgets.push(
                <NHLScoreCard
                    key={cnt}
                    currentStatus={gameStatus['abstractGameState']}
                    statusText={status}
                    awayAbbr={awayInfo['abbreviation']}
                    homeAbbr={homeInfo['abbreviation']}
                    awayScore={awayScore}
                    homeScore={homeScore}
                    lineScore={lineScore}
                    awayBorderColor={awayInfo['color1']}
                    homeBorderColor={homeInfo['color1']}
                />
            )
        } else if (gameStatus['abstractGameState'] === 'Live') {
            let awayInfo = teamInfo(games[game]['teams']['away']['team']['name'])
            let homeInfo = teamInfo(games[game]['teams']['home']['team']['name'])
            let awayScore = games[game]['teams']['away']['score']
            let homeScore = games[game]['teams']['home']['score']
            let lineScore = games[game]['linescore']
            let period = lineScore['currentPeriodOrdinal']
            let timeRemaining = lineScore['currentPeriodTimeRemaining']
            let status = (timeRemaining) ? `${timeRemaining} ${period}` : 'Foo'
            widgets.push(
                <NHLScoreCard
                    key={cnt}
                    currentStatus={gameStatus['abstractGameState']}
                    statusText={status}
                    awayAbbr={awayInfo['abbreviation']}
                    homeAbbr={homeInfo['abbreviation']}
                    awayScore={awayScore}
                    homeScore={homeScore}
                    lineScore={lineScore}
                    awayBorderColor={awayInfo['color1']}
                    homeBorderColor={homeInfo['color1']}
                />
            )
        } else if (gameStatus['abstractGameState'] === 'Preview') {
            let awayInfo = teamInfo(games[game]['teams']['away']['team']['name'])
            let homeInfo = teamInfo(games[game]['teams']['home']['team']['name'])
            widgets.push(
                <StyledMatchup key={cnt}>
                    <h1>{formatDate(games[game]['gameDate'])}</h1>
                    <div className='match' key={cnt}>
                        <NHLTeamCard
                            team={awayInfo['mascot']}
                            abbr={awayInfo['abbreviation']}
                            borderLeft={'.7em solid ' + awayInfo['color1']}
                        />
                        <NHLTeamCard
                            team={homeInfo['mascot']}
                            abbr={homeInfo['abbreviation']}
                            borderRight={'.7em solid ' + homeInfo['color1']}
                        />
                    </div>
                </StyledMatchup>
            )
        }
        cnt++
    }
    return (
        <StyledNHLGames>
            {widgets}
        </StyledNHLGames>
    )
}

export default class NHLGames extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            games: [],
            date: '',
            scores: []
        }
    }
    componentDidMount() {
        this.setState({ isLoading: true })
        let gamesUrl = 'http://localhost:5000/v1/hockey/league/games'
        let scoresUrl = 'http://localhost:5000/v1/hockey/league/games/recent-scores'
        fetch(gamesUrl)
            .then(response => response.json())
            .then(data => this.setState({ games: data.games, date: data.date }))
            .catch(error => console.log(error))
        fetch(scoresUrl)
            .then(response => response.json())
            .then(data => this.setState({ scores: data, isLoading: false }))
            .catch(error => console.log(error))
    }
    render () {
        const games = this.state.games
        const scores = this.state.scores
        // const date = this.state.date
        if (!games) {
            return (
                    <StyledNHLGames><h2>No recent games</h2></StyledNHLGames>
            )
        } else {
            return (
                <StyledNHLGamesContainer>
                    <h2>Recent Scores</h2>
                    {makeWidgets(scores)}
                    <h2>Today's Games</h2>
                    {makeWidgets(games)}
                    <SportsLink
                        name='sports home'
                        target='/sports'
                        league='nhl'
                    />
                </StyledNHLGamesContainer>
            )
        }
    }
}