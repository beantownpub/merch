import React from 'react'
import styled from 'styled-components'
import NHLTeamCard from './nhlTeamCard.js'
import SportsLink from '../sportsLink.js'
import * as nhl from './nhlConfig.js'

const StyledNHLTeamStatsContainer = styled.div`
  margin: auto;
  display: flex;
  flex-flow: row wrap;
  font-family: gotham-narrow-ultra;
  text-transform: uppercase;
  h1 {
    margin: auto;
    padding: .25em;
    width: 100%;
    font-size: 1.25;
    text-align: center;
    letter-spacing: .07em;
  }
`

const StyledDivision = styled.div`
  margin: auto;
  display: flex;
  flex-flow: row wrap;
  max-width: 768px;
`

function makeWidgets (teams) {
  const widgets = []
  for (const team of Object.keys(teams)) {
    widgets.push(
      <NHLTeamCard
        key={teams[team]['id']}
        team={teams[team]['mascot']}
        abbr={teams[team]['abbreviation']}
        dataColor={teams[team]['color2']}
        borderLeft={'.7em solid ' + teams[team]['color1']}
        conference={teams[team]['conference']}
      />
    )
  }
  return (
    <StyledDivision>{widgets}</StyledDivision>
    )
}

export default class NHLTeams extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <StyledNHLTeamStatsContainer>
        <h1>Atlantic</h1>
        {makeWidgets(nhl.eastern.atlantic)}
        <h1>Metropolitan</h1>
        {makeWidgets(nhl.eastern.metropolitan)}
        <h1>Central</h1>
        {makeWidgets(nhl.western.central)}
        <h1>Pacific</h1>
        {makeWidgets(nhl.western.pacific)}
        <SportsLink
          name='sports home'
          target='/sports'
        />
      </StyledNHLTeamStatsContainer>
    )
  }
}
