import React from 'react'
import styled from 'styled-components'
import NFLTeamStats from './nflTeamStats.js'

const StyledMatchup = styled.div `
  margin: auto;
  display: flex;
  flex-flow: column wrap;
  height: min-content;
  h1 {
    padding: .75em;
    font-family: gotham-narrow-ultra;
    font-size: 2em;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: .07em;
  }
  h3 {
    margin: auto .3em;
    padding: .15em 0;
    font-family: Proxima Nova Bold,Helvetica Neue Bold,Helvetica Bold,Arial Bold,sans-serif;
    font-size: 1em;
    text-transform: uppercase;
    letter-spacing: .1em;
    text-align: center;
  }
  span {
    color: ${props => props.dataColor || "#C60C30"};
  }
  .matchup {
    margin: 1em auto;
    display: inline-flex;
    flex-flow: row wrap;
  }
`

function makeWidgets (games) {
  const widgets = []
  for (const game of Object.keys(games)) {
    if (games[game]['date']) {
      widgets.push(
        <StyledMatchup key={games[game]['id']}>
          <h1>{games[game]['date']}</h1>
          <div className='matchup'>
            <NFLTeamStats
              key={games[game]['away_team']['color1']}
              team={games[game]['away_team']['mascot']}
              abbr={games[game]['away_team']['abbreviation']}
              dataColor={games[game]['away_team']['color2']}
              borderColor={games[game]['away_team']['color1']}
              conference={games[game]['away_team']['conference']}
            />
            <NFLTeamStats
              key={games[game]['home_team']['color1']}
              team={games[game]['home_team']['mascot']}
              abbr={games[game]['home_team']['abbreviation']}
              dataColor={games[game]['home_team']['color2']}
              borderColor={games[game]['home_team']['color1']}
              conference={games[game]['home_team']['conference']}
            />
          </div>
        </StyledMatchup>
      )
    }
  }
  return (
    <div className='nfl_teams'>{widgets}</div>
  )
}

export default class NFLMatchups extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      games: []
    }
  }
  componentDidMount() {
    this.setState({ isLoading: true })
    let url = 'http://localhost:5000/v1/fb/league/games'
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState(
        {
          games: data,
          isLoading: false
        }))
      .catch(error => console.log(error))
  }
  render () {
    const games = this.state.games
    return (
      <div className='nfl_matchups'>{makeWidgets(games)}</div>
    )
  }
}
