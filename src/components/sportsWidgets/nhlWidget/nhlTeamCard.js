import React from 'react'
import styled from 'styled-components'
import Loader from 'react-loader-spinner';

const StyledNHLTeamCard = styled.div `
    margin: .25em auto;
    padding: .25em;
    width: min-content;
    height: min-content;
    display: flex;
    flex-flow: column wrap;
    font-family: Proxima Nova Bold,Helvetica Neue Bold,Helvetica Bold,Arial Bold,sans-serif;
    background-color: white;
    border-left: ${props => props.borderLeft || "1px solid #e2e2e2"};
    border-right: ${props => props.borderRight || "1px solid #e2e2e2"};
    border-top: 1px solid #e2e2e2;
    border-bottom: 1px solid #e2e2e2;
    border-radius: .7em;
    .team_info {
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: .3em;
        grid-template-areas: "stat data";
        width: max-content
    }
    .top_block {
        margin: auto;
        display: flex;
        flex-flow: column wrap;
    }
    h2 {
        margin: auto;
        width: min-content;
        font-size: 1.15em;
        text-transform: uppercase;
        letter-spacing: .1em;
        text-align: left;
    }
    h3 {
        margin: auto .3em;
        width: max-content;
        font-size: 1em;
        text-transform: uppercase;
        letter-spacing: .1em;
        text-align: left;
    }
    h4 {
        margin: auto 0;
        padding: .15em 0;
        width: max-content;
        text-transform: uppercase;
        letter-spacing: .1em;
        text-align: right;
        color: ${props => props.dataColor || "black"};
    }
    img {
        margin: auto;
        padding: 3% 0;
        max-height: 50px;
    }
    svg {
        margin: auto;
        display: flex;
    }
    span {
        color: #CE1126;
    }
`

export default class NHLTeamCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gamesPlayed: '',
            points: '',
            isLoading: false,
            record: []
        }
        this.updateScores = this.updateScores.bind(this)
    }
    componentDidMount() {
        this.setState({ isLoading: true })
        fetch('http://localhost:5000/v1/hockey/' + this.props.team)
            .then(response => response.json())
            .then(data => this.setState({
                                            gamesPlayed: data.games_played,
                                            points: data.points,
                                            record: data.record,
                                            isLoading: false
                                        }))
            .catch(error => console.log(error))
    }
    updateScores(e) {
        fetch('http://localhost:5000/v1/hockey/bruins')
            .then(response => response.json())
            .then(record => this.setState({ record }))
            .catch(error => console.log(error))
    }
    render() {
        const { gamesPlayed, points, record, isLoading } = this.state
        if (isLoading) {
            return (
                <StyledNHLTeamCard borderLeft={this.props.borderLeft}>
                    <Loader type="Grid" margin="auto" color="black" height={100} width={100} />
                </StyledNHLTeamCard>
            )
        }
        let logoSrc = (this.props.logoSrc) ? this.props.logoFile : '/images/nhl/' + this.props.abbr + '.png'
        return (
            <StyledNHLTeamCard borderRight={this.props.borderRight} borderLeft={this.props.borderLeft} dataColor={this.props.dataColor}>
                <img src={logoSrc} alt={this.props.team + 'logo'} />
                <div className='team_info'>
                    <div><h3>Record:</h3></div>
                    <div><h3><span>{record.wins}-{record.losses}-{record.ot}</span></h3></div>
                    <div><h3>Games:</h3></div><div><h3><span>{gamesPlayed}</span></h3></div>
                    <div><h3>Points:</h3></div><div><h3><span>{points}</span></h3></div>
                    <div><h3><span>Ranks</span></h3></div><div><h3><span></span></h3></div>
                    <div><h3>Division:</h3></div><div><h3><span>{record.division_rank}</span></h3></div>
                    <div><h3>Conference:</h3></div><div><h3><span>{record.conference_rank}</span></h3></div>
                    <div><h3>League:</h3></div><div><h3><span>{record.overall_rank}</span></h3></div>
                </div>
            </StyledNHLTeamCard>
        )
    }
}
