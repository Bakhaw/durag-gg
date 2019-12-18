import React from 'react';
import PropTypes from 'prop-types';

import LeagueEmblem from '../../../../components/LeagueEmblem';
import { queueTypeLabels } from '../../../../api/config/constants';

function RankCard({ rank }) {
  if (!rank) return null;

  const { leaguePoints, losses, queueType, rank: rankName, tier, wins } = rank;
  const totalGames = wins + losses;
  const winrate = (wins * 100) / totalGames;

  return (
    <div className='RankCard'>
      <LeagueEmblem leagueName={tier} width={90} />

      <div>
        <h3>{queueTypeLabels[queueType]}</h3>
        <h1>
          {tier} {rankName}
        </h1>
        <h2>
          {leaguePoints} LP / {wins}W {losses}L
        </h2>
        <h2>Win ratio {Math.round(winrate)}%</h2>
      </div>
    </div>
  );
}

RankCard.propTypes = {
  /** object with rank infos */
  rank: PropTypes.object,
  /** title to display on the rank card */
  rankCardTitle: PropTypes.string
};

export default RankCard;
