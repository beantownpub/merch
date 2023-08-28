import React from 'react'
import styled from 'styled-components'

const StyledScoreCard = styled.div `
  margin: auto;
  padding: 1%;
  width: 30em;
  display: flex;
  flex-flow: column wrap;
  height: min-content;
  font-family: gotham-narrow-ultra;
  .team_card {
    padding: .5em;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: auto auto auto auto;
    grid-gap: .75em;
    background-color: ${props => props.bgColor || "white"};
    border-left: .7em solid ${props => props.borderColor || "#FFB81C"};
    border-top: 1px solid #e2e2e2;
    border-right: 1px solid #e2e2e2;
    border-bottom: 1px solid #e2e2e2;
    border-radius: .7em;
    img {
      max-height: 3em;
      max-width: 3.5em;
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
  .rank {
    margin: auto;
    font-size: 1.25em;
  }
  .linescore {
    margin: auto
    display: flex;
    flex-flow: column nowrap;
  }
  .linescore_row {
    margin: auto;
    display: flex;
    flex-flow: column wrap;
  }
  .linescore_grid {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: .75em auto auto auto auto;
    grid-gap: 1em;
    float: right
    span {
      color: #C8102E;
    }
  }
`

function makeRecord (record) {
  let gamesPlayed = record['games_played']
  let wins = record['record']['wins']
  let losses = record['record']['losses']
  let otl = record['record']['ot']
  return(
    <div className='linescore'>
      <div className='linescore_row'>
        <div className='linescore_grid'>
          <div>{gamesPlayed}</div>
          <div><span>GP</span></div>
          <div>{wins}</div>
          <div>{losses}</div>
          <div>{otl}</div>
        </div>
      </div>
    </div>
  )
}

export default class NHLStandingsCard extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <StyledScoreCard borderColor={this.props.borderColor} bgColor={this.props.bgColor || 'white'}>
        <div className='team_card'>
          <div className='rank'>{this.props.record['rank']}</div>
          <div><img src={'/images/nhl/' + this.props.abbr + '.png'} alt={this.props.team + 'logo'} /></div>
          {makeRecord(this.props.record)}
          <div><h4>{this.props.points}</h4></div>
        </div>
      </StyledScoreCard>
    )
  }
}
