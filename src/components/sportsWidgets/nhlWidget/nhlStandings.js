import React from 'react'
import styled from 'styled-components'
import Loader from 'react-loader-spinner'
import NHLStandingsCard from './nhlStandingsCard'
import SportsLink from '../sportsLink'

const config = require('./nhlConfig.json')

const StyledNHLStandingsColumn = styled.div `
    margin: 0 auto;
    padding: 0 1%;
    display: flex;
    flex-flow: column wrap;
    max-width: 350px;
    height: min-content;
    h2 {
        font-family: gotham-narrow-ultra;
        font-size: 1.5em;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: .07em;
    }
    .conference_logo {
        margin: auto;
        padding: .25em;
        width: 20%;
    }
`

const StyledNHLStandingsContainer = styled.div `
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    h2 {
        font-family: gotham-narrow-ultra;
        font-size: 2em;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: .07em;
    }
    .division_standings {
        margin: 0 auto;
        display: flex;
        flex-flow: row wrap;
        max-width: 700px;
        height: min-content;
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

function makeWidgets (teams, logo, standingsType, title) {
    const widgets = []
    let cnt = 1
    for (const team of Object.keys(teams)) {
        let info = teamInfo(teams[team]['name'])
        let record = teams[team]['record']
        let rank = record['rank']
        let divLeader = (rank <= 3 && standingsType === 'Division') ? true : false
        let wildcard = teams[team]['wildcard_status']
        let bgColor = divLeader ? '#00ff141f' : wildcard ? '#eaf2ff' : 'white'

        widgets.push(
            <NHLStandingsCard
                key={cnt}
                team={info['mascot']}
                abbr={info['abbreviation']}
                borderColor={info['color1']}
                bgColor={bgColor}
                record={record}
                points={record['points']}
            />
        )
        cnt++
    }
    return (
        <StyledNHLStandingsColumn>
            {standingsType === 'Division' ?
                (<h2>{title}</h2>) : (
                                        <img
                                            className='conference_logo'
                                            src={'/images/nhl/' + logo}
                                            alt={title + 'logo'} />
                                    )
            }
            {widgets}
        </StyledNHLStandingsColumn>
    )
}

export default class NHLStandings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            overallStandings: [],
            conferenceStandings: [],
            divisionStandings: [],
            leagueLoading: true,
            confLoading: true,
            divLoading: true
        }
    }
    componentDidMount() {
        let overallUrl = 'http://localhost:5000/v1/hockey/league/standings/overall'
        let conferenceUrl = 'http://localhost:5000/v1/hockey/league/standings/conference'
        let divisionUrl = 'http://localhost:5000/v1/hockey/league/standings/division'
        fetch(overallUrl)
            .then(response => response.json())
            .then(data => this.setState({ overallStandings: data, leagueLoading: false}))
            .catch(error => console.log(error))
        fetch(conferenceUrl)
            .then(response => response.json())
            .then(data => this.setState({ conferenceStandings: data, confLoading: false }))
            .catch(error => console.log(error))
        fetch(divisionUrl)
            .then(response => response.json())
            .then(data => this.setState({ divisionStandings: data, divLoading: false }))
            .catch(error => console.log(error))
    }
    render () {
        const leagueLoad = this.state.leagueLoading
        const confLoad = this.state.confLoading
        const divLoad = this.state.divLoading
        if (divLoad === false && leagueLoad === false && confLoad === false) {
            const overall = this.state.overallStandings
            const conference = this.state.conferenceStandings
            const division = this.state.divisionStandings
            const east = conference['Eastern']
            const west = conference['Western']
            const atlantic = division['Atlantic']
            const metro = division['Metropolitan']
            const central = division['Central']
            const pacific = division['Pacific']
            return (
                <StyledNHLStandingsContainer>
                    <div className='division_standings'>
                        {makeWidgets(atlantic, 'nhl_atl.png', 'Division', 'Atlantic')}
                        {makeWidgets(metro, 'nhl_met.png', 'Division', 'Metropolitan')}
                        {makeWidgets(central, 'nhl_cen.png', 'Division', 'Central')}
                        {makeWidgets(pacific, 'nhl_pac.png', 'Division', 'Pacific')}
                    </div>
                    {makeWidgets(east, 'nhl_east.png', 'Conference', 'Eastern Conference')}
                    {makeWidgets(west, 'nhl_west.png','Conference', 'Western Conference')}
                    {makeWidgets(overall, 'nhl.png', 'NHL', 'NHL')}
                    <SportsLink
                        name='sports home'
                        target='/sports'
                        league='nhl'
                    />
                </StyledNHLStandingsContainer>
            )
        } else {
            return (
                <StyledNHLStandingsColumn>
                    <div className='sports_widget'>
                        <Loader type="Grid" color="black" height={75} width={75} />
                    </div>
                    <h2>loading</h2>
                </StyledNHLStandingsColumn>
            )
        }
    }
}