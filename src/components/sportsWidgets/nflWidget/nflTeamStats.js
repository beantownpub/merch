import React from 'react'
import Loader from 'react-loader-spinner'
import { StyledSportsWidget } from '../styles/sportsWidget.js'
import { StyledNFLschedule } from '../styles/nflSchedule.js'
import { gameBlock, offenseStats, defenseStats } from './nflStatBlocks.js'

export default class NFLTeamStats extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      record: [],
      statsDefense: [],
      statsOffense: [],
      schedule: []
    }
    this.updateScores = this.updateScores.bind(this)
  }
  componentDidMount() {
    this.setState({ isLoading: true })
    let urlBase = 'http://localhost:5000/v1/fb/' + this.props.team
    fetch(urlBase + '/stats/all')
      .then(response => response.json())
      .then(data => this.setState(
        {
          statsDefense: data.defense,
          statsOffense: data.offense,
          schedule: data.games,
          record: data.record,
          isLoading: false
        }))
      .catch(error => console.log(error))
  }
  updateScores(e) {
    fetch('http://localhost:5000/v1/fb/patriots')
      .then(response => response.json())
      .then(record => this.setState({ record }))
      .catch(error => console.log(error))
  }
  render() {
    const { record, statsOffense, statsDefense, schedule, isLoading } = this.state
    if (isLoading) {
      return (
        <StyledSportsWidget borderColor={this.props.borderColor}>
          <div className='sports_widget'>
            <Loader type="Grid" color="black" height={75} width={75} />
          </div>
        </StyledSportsWidget>
      )
    }
    const games = schedule.map((game) =>
      <div key={game.id} className='game'>{gameBlock(game)}</div>
    )

    let offense = offenseStats(statsOffense, this.props.dataColor)
    let defense = defenseStats(statsDefense, this.props.dataColor)
    if (this.props.abbr) {
      return (
        <StyledSportsWidget borderColor={this.props.borderColor} dataColor={this.props.dataColor}>
          <div className='sports_widget'>
            <div className='top_block'>
              <img src={'/images/nfl/' + this.props.abbr + '.png'} alt={this.props.team + ' logo'} />
              <h3>Record: <span>{record.wins}-{record.losses}-{record.ties}</span></h3>
              <h3>Turnover Diff: <span>{record.turnover_diff}</span></h3>
            </div>
            <div className='team_info'>
              <div className='category'>
                <h2>Offense</h2>
                {offense}
              </div>
              <div className='category'>
                <h2>Defense</h2>
                {defense}
              </div>
              <div className='category'>
              <h2>Schedule</h2>
              <StyledNFLschedule dataColor={this.props.dataColor}>
                {games}
              </StyledNFLschedule>
              </div>
            </div>
          </div>
        </StyledSportsWidget>
      )
    }
  }
}
