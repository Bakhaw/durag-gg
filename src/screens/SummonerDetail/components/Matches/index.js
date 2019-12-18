import React from 'react';
import PropTypes from 'prop-types';

import MatchRow from '../MatchRow';

function Matches({ matches }) {
  return (
    <ul className='Matches'>
      {matches.map(match => {
        const { gameId } = match.matchDetails;
        const { win } = match.summonerInfos;

        const backgroundColor = win ? '#a3cfec' : '#e2b6b3';

        return (
          <li key={gameId} className='MatchRow' style={{ backgroundColor }}>
            <MatchRow {...match} />
          </li>
        );
      })}
    </ul>
  );
}

Matches.propTypes = {
  /** summoner matches list */
  matches: PropTypes.array
};

export default Matches;
