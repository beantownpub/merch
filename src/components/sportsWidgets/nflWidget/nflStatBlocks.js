import React from 'react'
import { StyledStatBlock, StyledNFLTeamStats } from '../styles/statBlock.js'

export function offenseStats (stats, color) {
  return(
    <StyledNFLTeamStats>
      <StyledStatBlock dataColor={color}>
        <div className='stat_row'>
          <div><h3>PTS:</h3></div>
          <div><h3><span>{stats.points}</span></h3></div>
        </div>
        <div className='stat_row'>
          <div><h3>PTS/Game:</h3></div>
          <div><h3><span>{stats.pts_per_game}</span></h3></div>
        </div>
        <div className='stat_row'>
          <div><h3>YDS:</h3></div>
          <div><h3><span>{stats.total_yds}</span></h3></div>
        </div>
        <div className='stat_row'>
          <div><h3>Plays:</h3></div>
          <div><h3><span>{stats.plays}</span></h3></div>
        </div>
        <div className='stat_row'><div><h3>Penalties:</h3></div><div><h3><span>{stats.penalties}</span></h3></div></div>
        <div className='stat_row'><div><h3>Penatly Yds:</h3></div><div><h3><span>{stats.penalty_yds}</span></h3></div></div>
        <div className='stat_row'><div><h3>Penatly FDS:</h3></div><div><h3><span>{stats.fds_by_penalty}</span></h3></div></div>
      </StyledStatBlock>
      <StyledStatBlock dataColor={color}>
        <div className='stat_row'><div><h3><span>Scoring</span></h3></div><div></div></div>
        <div className='stat_row'><div><h3>Touchdowns:</h3></div><div><h3><span>{stats.total_tds}</span></h3></div></div>
        <div className='stat_row'><div><h3>Rec TDs:</h3></div><div><h3><span>{stats.REC}</span></h3></div></div>
        <div className='stat_row'><div><h3>Rush TDs:</h3></div><div><h3><span>{stats.RUSH}</span></h3></div></div>
        <div className='stat_row'><div><h3>Ret TDs:</h3></div><div><h3><span>{stats.RET}</span></h3></div></div>
        <div className='stat_row'><div><h3>FGs:</h3></div><div><h3><span>{stats.FG}</span></h3></div></div>
        <div className='stat_row'><div><h3>PATs:</h3></div><div><h3><span>{stats.PAT}</span></h3></div></div>
      </StyledStatBlock>
      <StyledStatBlock dataColor={color}>
      <div className='stat_row'><div><h3><span>Drives</span></h3></div><div></div></div>
        <div className='stat_row'>
          <div><h3>Total:</h3></div>
          <div><h3><span>{stats.drives}</span></h3></div>
        </div>
        <div className='stat_row'>
          <div><h3>Plays/Drive:</h3></div>
          <div><h3><span>{stats.plays_per_drive}</span></h3></div>
        </div>
        <div className='stat_row'>
          <div><h3>Yds/Drive:</h3></div>
          <div><h3><span>{stats.yds_per_drive}</span></h3></div>
        </div>
        <div className='stat_row'>
          <div><h3>Yds/Play:</h3></div>
          <div><h3><span>{stats.yds_per_play_offense}</span></h3></div>
        </div>
        <div className='stat_row'>
          <div><h3>Score %:</h3></div>
          <div><h3><span>{stats.score_pct}</span></h3></div>
        </div>
        <div className='stat_row'>
          <div><h3>Avg Time:</h3></div>
          <div><h3><span>{stats.time_avg}</span></h3></div>
        </div>
        <div className='stat_row'>
          <div><h3>Red Zone Att:</h3></div>
          <div><h3><span>{stats.red_zone_att}</span></h3></div>
        </div>
        <div className='stat_row'>
          <div><h3>Red Z Scores:</h3></div>
          <div><h3><span>{stats.red_zone_scores}</span></h3></div>
        </div>
        <div className='stat_row'>
          <div><h3>Red Z %</h3></div>
          <div><h3><span>{stats.red_zone_pct}</span></h3></div>
        </div>
      </StyledStatBlock>
      <StyledStatBlock dataColor={color}>
        <div className='stat_row'><div><h3><span>Turnovers</span></h3></div><div></div></div>
        <div className='stat_row'><div><h3>Total:</h3></div><div><h3><span>{stats.turnovers}</span></h3></div></div>
        <div className='stat_row'><div><h3>Fumbles:</h3></div><div><h3><span>{stats.fumbles}</span></h3></div></div>
        <div className='stat_row'><div><h3>Fum Lost:</h3></div><div><h3><span>{stats.fumbles_lost}</span></h3></div></div>
        <div className='stat_row'><div><h3>Ints:</h3></div><div><h3><span>{stats.ints}</span></h3></div></div>
        <div className='stat_row'><div><h3>TO %:</h3></div><div><h3><span>{stats.turnover_pct}</span></h3></div></div>
      </StyledStatBlock>
      <StyledStatBlock dataColor={color}>
        <div className='stat_row'><div><h3><span>Passing</span></h3></div><div></div></div>
        <div className='stat_row'><div><h3>Atts:</h3></div><div><h3><span>{stats.pass_att}</span></h3></div></div>
        <div className='stat_row'><div><h3>Comps:</h3></div><div><h3><span>{stats.pass_cmp}</span></h3></div></div>
        <div className='stat_row'><div><h3>Comp %:</h3></div><div><h3><span>{stats.pass_cmp_pct}</span></h3></div></div>
        <div className='stat_row'><div><h3>Yds:</h3></div><div><h3><span>{stats.pass_yds}</span></h3></div></div>
        <div className='stat_row'><div><h3>Yds/Att:</h3></div><div><h3><span>{stats.pass_net_yds_per_att}</span></h3></div></div>
        <div className='stat_row'><div><h3>Yds/Game:</h3></div><div><h3><span>{stats.pass_yds_per_game}</span></h3></div></div>
        <div className='stat_row'><div><h3>Sacks:</h3></div><div><h3><span>{stats.sacks}</span></h3></div></div>
        <div className='stat_row'><div><h3>Rating:</h3></div><div><h3><span>{stats.pass_rtg}</span></h3></div></div>
        <div className='stat_row'><div><h3>1st Downs:</h3></div><div><h3><span>{stats.pass_fd}</span></h3></div></div>
      </StyledStatBlock>
      <StyledStatBlock dataColor={color}>
        <div className='stat_row'><div><h3><span>Rushing</span></h3></div><div></div></div>
        <div className='stat_row'><div><h3>Atts:</h3></div><div><h3><span>{stats.rush_att}</span></h3></div></div>
        <div className='stat_row'><div><h3>Yds:</h3></div><div><h3><span>{stats.rush_yds}</span></h3></div></div>
        <div className='stat_row'><div><h3>Yds/Att:</h3></div><div><h3><span>{stats.rush_yds_per_att}</span></h3></div></div>
        <div className='stat_row'><div><h3>Yds/Game:</h3></div><div><h3><span>{stats.rush_yds_per_game}</span></h3></div></div>
        <div className='stat_row'><div><h3>20 Plus:</h3></div><div><h3><span>{stats.rush_twenty_plus}</span></h3></div></div>
        <div className='stat_row'><div><h3>Long:</h3></div><div><h3><span>{stats.rush_long}</span></h3></div></div>
        <div className='stat_row'><div><h3>1st Downs:</h3></div><div><h3><span>{stats.rush_fd}</span></h3></div></div>
      </StyledStatBlock>
      <StyledStatBlock dataColor={color}>
        <div className='stat_row'><div><h3><span>Special Teams</span></h3></div><div></div></div>
        <div className='stat_row'><div><h3>Ko Ret:</h3></div><div><h3><span>{stats.kickoffs}</span></h3></div></div>
        <div className='stat_row'><div><h3>Ko Ret Yds:</h3></div><div><h3><span>{stats.kickoff_ret_yds}</span></h3></div></div>
        <div className='stat_row'><div><h3>Ko Avg Ret:</h3></div><div><h3><span>{stats.kickoff_avg_ret}</span></h3></div></div>
        <div className='stat_row'><div><h3>Punts Ret:</h3></div><div><h3><span>{stats.punt_rets}</span></h3></div></div>
        <div className='stat_row'><div><h3>Punt Ret Yds:</h3></div><div><h3><span>{stats.punt_ret_yds}</span></h3></div></div>
        <div className='stat_row'><div><h3>Punt Avg Ret:</h3></div><div><h3><span>{stats.punt_avg_ret}</span></h3></div></div>
        <div className='stat_row'><div><h3>Touchback %:</h3></div><div><h3><span>{stats.touchback_pct}</span></h3></div></div>
      </StyledStatBlock>
    </StyledNFLTeamStats>
  )
}

export function defenseStats (stats, color) {
  return(
    <StyledNFLTeamStats>
      <StyledStatBlock dataColor={color}>
        <div className='stat_row'>
          <div><h3>PTs:</h3></div>
          <div><h3><span>{stats.points}</span></h3></div>
        </div>
        <div className='stat_row'>
          <div><h3>Yds:</h3></div>
          <div><h3><span>{stats.total_yards}</span></h3></div>
        </div>
        <div className='stat_row'>
          <div><h3>Plays:</h3></div>
          <div><h3><span>{stats.plays}</span></h3></div>
        </div>
        <div className='stat_row'>
          <div><h3>Yds/Play:</h3></div>
          <div><h3><span>{stats.yds_per_play_offense}</span></h3></div>
        </div>
      </StyledStatBlock>
      <StyledStatBlock dataColor={color}>
        <div className='stat_row'><div><h3><span>Turnovers</span></h3></div><div></div></div>
        <div className='stat_row'><div><h3>Total:</h3></div><div><h3><span>{stats.turnovers}</span></h3></div></div>
        <div className='stat_row'><div><h3>Fum Forced:</h3></div><div><h3><span>{stats.fumbles_forced}</span></h3></div></div>
        <div className='stat_row'><div><h3>Fum Rec:</h3></div><div><h3><span>{stats.fumbles_rec}</span></h3></div></div>
        <div className='stat_row'><div><h3>Ints:</h3></div><div><h3><span>{stats.ints}</span></h3></div></div>
        <div className='stat_row'><div><h3>TO %:</h3></div><div><h3><span>{stats.turnover_pct}</span></h3></div></div>
      </StyledStatBlock>
      <StyledStatBlock dataColor={color}>
      <div className='stat_row'><div><h3><span>Drives</span></h3></div><div></div></div>
        <div className='stat_row'>
          <div><h3>Total:</h3></div>
          <div><h3><span>{stats.drives}</span></h3></div>
        </div>
        <div className='stat_row'>
          <div><h3>Plays/Drive:</h3></div>
          <div><h3><span>{stats.plays_per_drive}</span></h3></div>
        </div>
        <div className='stat_row'>
          <div><h3>Yds/Drive:</h3></div>
          <div><h3><span>{stats.yds_per_drive}</span></h3></div>
        </div>
        <div className='stat_row'>
          <div><h3>Yds/Play:</h3></div>
          <div><h3><span>{stats.yds_per_play_offense}</span></h3></div>
        </div>
        <div className='stat_row'>
          <div><h3>Score %:</h3></div>
          <div><h3><span>{stats.score_pct}</span></h3></div>
        </div>
        <div className='stat_row'>
          <div><h3>Avg Time:</h3></div>
          <div><h3><span>{stats.time_avg}</span></h3></div>
        </div>
        <div className='stat_row'>
          <div><h3>Red Zone Att:</h3></div>
          <div><h3><span>{stats.red_zone_att}</span></h3></div>
        </div>
        <div className='stat_row'>
          <div><h3>Red Z Scores:</h3></div>
          <div><h3><span>{stats.red_zone_scores}</span></h3></div>
        </div>
        <div className='stat_row'>
          <div><h3>Red Z %</h3></div>
          <div><h3><span>{stats.red_zone_pct}</span></h3></div>
        </div>
      </StyledStatBlock>
      <StyledStatBlock dataColor={color}>
        <div className='stat_row'>
          <div><h3>Tackles:</h3></div>
          <div><h3><span>{stats.total_tackles}</span></h3></div>
        </div>
        <div className='stat_row'>
          <div><h3>Solo Tackles:</h3></div>
          <div><h3><span>{stats.solo_tackles}</span></h3></div>
        </div>
        <div className='stat_row'>
          <div><h3>Pass Def:</h3></div>
          <div><h3><span>{stats.pass_defends}</span></h3></div>
        </div>
        <div className='stat_row'>
          <div><h3>Sacks:</h3></div>
          <div><h3><span>{stats.sacks}</span></h3></div>
        </div>
        <div className='stat_row'>
          <div><h3>Sack YDS:</h3></div>
          <div><h3><span>{stats.sack_yds}</span></h3></div>
        </div>
        <div className='stat_row'>
          <div><h3>Penalties:</h3></div>
          <div><h3><span>{stats.penalties}</span></h3></div>
        </div>
        <div className='stat_row'>
          <div><h3>Penalty Yds:</h3></div>
          <div><h3><span>{stats.penalties_yds}</span></h3></div>
        </div>
        <div className='stat_row'>
          <div><h3>Penalty FDS:</h3></div>
          <div><h3><span>{stats.pen_fd}</span></h3></div>
        </div>
      </StyledStatBlock>
      <StyledStatBlock dataColor={color}>
        <div className='stat_row'><div><h3><span>Passing</span></h3></div><div></div></div>
        <div className='stat_row'><div><h3>Atts:</h3></div><div><h3><span>{stats.pass_att}</span></h3></div></div>
        <div className='stat_row'><div><h3>Comps:</h3></div><div><h3><span>{stats.pass_cmp}</span></h3></div></div>
        <div className='stat_row'><div><h3>Comp %:</h3></div><div><h3><span>{stats.pass_cmp_pct}</span></h3></div></div>
        <div className='stat_row'><div><h3>Yds:</h3></div><div><h3><span>{stats.pass_yds}</span></h3></div></div>
        <div className='stat_row'><div><h3>Yds/Att:</h3></div><div><h3><span>{stats.pass_net_yds_per_att}</span></h3></div></div>
        <div className='stat_row'><div><h3>Yds/Game:</h3></div><div><h3><span>{stats.pass_yds_per_game}</span></h3></div></div>
        <div className='stat_row'><div><h3>Sacks:</h3></div><div><h3><span>{stats.sacks}</span></h3></div></div>
        <div className='stat_row'><div><h3>1st Downs:</h3></div><div><h3><span>{stats.pass_fd}</span></h3></div></div>
      </StyledStatBlock>
      <StyledStatBlock dataColor={color}>
        <div className='stat_row'><div><h3><span>Rushing</span></h3></div><div></div></div>
        <div className='stat_row'><div><h3>Atts:</h3></div><div><h3><span>{stats.rush_att}</span></h3></div></div>
        <div className='stat_row'><div><h3>Yds:</h3></div><div><h3><span>{stats.rush_yds}</span></h3></div></div>
        <div className='stat_row'><div><h3>Yds/Att:</h3></div><div><h3><span>{stats.rush_yds_per_att}</span></h3></div></div>
        <div className='stat_row'><div><h3>Yds/Game:</h3></div><div><h3><span>{stats.rush_yds_per_game}</span></h3></div></div>
        <div className='stat_row'><div><h3>1st Downs:</h3></div><div><h3><span>{stats.rush_fd}</span></h3></div></div>
      </StyledStatBlock>
    </StyledNFLTeamStats>
  )
}

export function gameBlock (game) {
  var weeks = [...Array(18).keys()]
  if (game.opp === 'Bye Week') {
    return(
      <div className='schedule_row'>
        <div className='data'><h3>{game.week}</h3></div>
        <div className='data'></div>
        <div className='data'><h3>Bye</h3></div>
        <div className='data'></div>
      </div>
    )
  }
  if (game.game_type === 'home' && game.game_date != 'Playoffs' && game.away_team) {
    let week = (weeks.includes(game.week)) ? game.week : 'PS'
    if (game.boxscore_word === 'boxscore') {
      return(
        <div className='schedule_row'>
          <div className='data'><h3>{week}</h3> </div>
          <div className='data'></div>
          <div className='data'>
            <img src={'/images/nfl/' + game.away_team.abbreviation + '.png'} alt='logo'/>
          </div>
          <div className= 'data'><h3><span>{game.game_outcome}</span> {game.pts_off} -  {game.pts_def}</h3></div>
        </div>
      )
    } else {
    return(
      <div className='schedule_row'>
        <div className='data'><h3>{week}</h3> </div>
        <div className='data'></div>
        <div className='data'>
          <img src={'/images/nfl/' + game.away_team.abbreviation + '.png'} alt='logo'/>
        </div>
        <div className= 'data'><h3>{game.game_time}</h3></div>
      </div>
    )
    }
  } else {
    if (game.boxscore_word === 'boxscore') {
      return(
        <div className='schedule_row'>
          <div className='data away_team'><h3>{game.week}</h3> </div>
          <div className='data'><h3><span>@</span></h3></div>
          <div className='data away_team'>
          <img src={'/images/nfl/' + game.home_team.abbreviation + '.png'} alt='logo'/>
        </div>
        <div className= 'data away_team'><h3><span>{game.game_outcome}</span> {game.pts_off} -  {game.pts_def}</h3></div>
      </div>
      )
    } else {
    return(
      <div className='schedule_row'>
        <div className='data away_team'><h3>{game.week}</h3></div>
        <div className='data'><h3><span>@</span></h3></div>
        <div className='data away_team'>
          <img src={'/images/nfl/' + game.home_team.abbreviation + '.png'} alt='logo'/>
        </div>
        <div className= 'data away_team'><h3>{game.game_time}</h3></div>
      </div>
    )
    }
  }
}
