import React from 'react'
import { StyledSportsWidget } from '../Styles'

function gameBlock (schedule) {
    const games = schedule.forEach((game) =>
        <div key={game.id} className='game_block'>
            <h3>{game.away_team} <span>@</span> {game.home_team}</h3>
        </div>
    )
    return(
        <div className='teamSchedule'>{games}</div>
    )
}

export default class NFLSchedule extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <StyledSportsWidget borderColor='#002244' dataColor='#C60C30'>
                <div className="widget_border">
                    <div className='sports_widget'>
                        <div className='team_info'>
                            <h2>Schedule</h2>
                            {this.props.schedule.forEach((game) =>
                            <div key={game.id} className='game_block'>
                                <h3>{game.away_team} <span>@</span> {game.home_team}</h3>
                            </div>)}
                        </div>
                    </div>
                </div>
            </StyledSportsWidget>
        )
    }
}
