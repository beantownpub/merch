import React from 'react'
import styled from 'styled-components'

const StyledScoreCard = styled.div `
    margin: auto;
    padding: 2%;
    width: 30em;
    display: flex;
    flex-flow: column wrap;
    height: min-content;
    font-family: gotham-narrow-ultra;
    .away_team {
        padding: .5em;
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: auto auto auto;
        grid-gap: .5em;
        background-color: white;
        border-left: .7em solid ${props => props.awayBorderColor || "#FFB81C"};
        border-top: 1px solid #e2e2e2;
        border-right: 1px solid #e2e2e2;
        border-bottom: 1px solid #e2e2e2;
        border-radius: .7em;
        img {
            max-height: 3em;
            max-width: 3em;
        }
    }
    .home_team {
        padding: .5em;
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: auto auto auto;
        grid-gap: .75em;
        background-color: white;
        border-left: .7em solid ${props => props.homeBorderColor || "#FFB81C"};
        border-top: 1px solid #e2e2e2;
        border-right: 1px solid #e2e2e2;
        border-bottom: 1px solid #e2e2e2;
        border-radius: .7em;
        img {
            max-height: 3em;
            max-width: 3em;
        }
    }
    h3 {
        margin: auto .3em;
        padding: .15em 0;
        text-transform: uppercase;
        letter-spacing: .1em;
    }
    h4 {
        margin: auto .3em;
        padding: .15em 0;
        font-size: 2em;
        text-transform: uppercase;
        letter-spacing: .1em;
        text-align: center;
    }
    .linescore {
        margin: auto
        display: flex;
        flex-flow: column nowrap;
    }
    .linescore_row {
        display: flex;
        flex-flow: column wrap;
    }
    .linescore_grid {
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 2.5em 1em 1em 1em;
        grid-gap: .5em;
        float: right
    }
    .linescore_grid_ot {
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 2.5em 1em 1em 1em 1em;
        grid-gap: .5em;
        float: right
    }
    .grid_data {
        margin: auto;
    }
`

function makeLineScore (lineScore, team) {
    let firstPeriod = lineScore.periods[0]
    let secondPeriod = lineScore.periods[1]
    let thirdPeriod = lineScore.periods[2]
    let overTime = lineScore.periods[3]
    let firstPeriodGoals = (firstPeriod) ? firstPeriod[team]['goals'] : '0'
    let secondPeriodGoals = (secondPeriod) ? secondPeriod[team]['goals'] : '0'
    let thirdPeriodGoals = (thirdPeriod) ? thirdPeriod[team]['goals'] : '0'
    let firstPeriodShots = (firstPeriod) ? firstPeriod[team]['shotsOnGoal'] : '0'
    let secondPeriodShots = (secondPeriod) ? secondPeriod[team]['shotsOnGoal'] : '0'
    let thirdPeriodShots = (thirdPeriod) ? thirdPeriod[team]['shotsOnGoal'] : '0'
    if (!overTime) {
        return(
            <div className='linescore'>
                <div className='linescore_row'>
                    <div className='linescore_grid'>
                        <div className='grid_data'>goals</div>
                        <div className='grid_data'>{firstPeriodGoals}</div>
                        <div className='grid_data'>{secondPeriodGoals}</div>
                        <div className='grid_data'>{thirdPeriodGoals}</div>
                    </div>
                    <div className='linescore_row'>
                        <div className='linescore_grid'>
                            <div className='grid_data'>shots</div>
                            <div className='grid_data'>{firstPeriodShots}</div>
                            <div className='grid_data'>{secondPeriodShots}</div>
                            <div className='grid_data'>{thirdPeriodShots}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return(
            <div className='linescore'>
                <div className='linescore_row'>
                    <div className='linescore_grid_ot'>
                        <div className='grid_data'>goals</div>
                        <div className='grid_data'>{firstPeriod[team]['goals']}</div>
                        <div className='grid_data'>{secondPeriod[team]['goals']}</div>
                        <div className='grid_data'>{thirdPeriod[team]['goals']}</div>
                        <div className='grid_data'>{overTime[team]['goals']}</div>
                    </div>
                    <div className='linescore_row'>
                        <div className='linescore_grid_ot'>
                            <div className='grid_data'>shots</div>
                            <div className='grid_data'>{firstPeriod[team]['shotsOnGoal']}</div>
                            <div className='grid_data'>{secondPeriod[team]['shotsOnGoal']}</div>
                            <div className='grid_data'>{thirdPeriod[team]['shotsOnGoal']}</div>
                            <div className='grid_data'>{overTime[team]['shotsOnGoal']}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default class NHLScoreCard extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        let awayLogoSrc = (this.props.awayLogoSrc) ? this.props.awayLogoSrc : '/images/nhl/' + this.props.awayAbbr + '.png'
        let homeLogoSrc = (this.props.homeLogoSrc) ? this.props.homeLogoSrc : '/images/nhl/' + this.props.homeAbbr + '.png'
        return (
            <StyledScoreCard awayBorderColor={this.props.awayBorderColor} homeBorderColor={this.props.homeBorderColor}>
                <h3>{this.props.statusText}</h3>
                <div className='away_team'>
                    <div><img src={awayLogoSrc} alt={this.props.awayTeam + 'logo'} /></div>
                    {makeLineScore(this.props.lineScore, 'away')}
                    <div><h4>{this.props.awayScore}</h4></div>
                </div>
                <div className='home_team'>
                    <div><img src={homeLogoSrc} alt={this.props.homeTeam + 'logo'} /></div>
                    {makeLineScore(this.props.lineScore, 'home')}
                    <div><h4>{this.props.homeScore}</h4></div>
                </div>
            </StyledScoreCard>
        )
    }
}