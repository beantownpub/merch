import React from 'react'
import styled from 'styled-components'

const StyledSportButton = styled.div `
  font-family: gotham-narrow-ultra;
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  a {
    margin: .25em auto;
    padding: .5em 1em;
    width: 100%;
    max-width: 15em;
    background-color: ${props => props.bgColor || "white"};
    border-left: 1px solid #e2e2e2;
    border-top: 1px solid #e2e2e2;
    border-right: 1px solid #e2e2e2;
    border-bottom: 1px solid #e2e2e2;
    border-radius: .4em;
    text-decoration: none;
    font-size: 1.5em;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: .09em;
    color: black;
  }
  a:hover {
    background-color: #00ff141f;
  }
  img {
    margin: auto;
    padding: .25em;
    max-width: 5em;
  }
`

export default class SportsLink extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <StyledSportButton bgColor={this.props.bgColor || 'white'}>
        <a href={this.props.target}>{this.props.name}</a>
      </StyledSportButton>
    )
  }
}
