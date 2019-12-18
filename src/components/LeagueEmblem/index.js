import React from 'react';
import PropTypes from 'prop-types';

function LeagueEmblem({ leagueName, width }) {
  return (
    <img
      alt={`${leagueName} emblem`}
      className='LeagueEmblem'
      src={require(`../../assets/rank_emblems/${leagueName}.png`)}
      width={width}
    />
  );
}

LeagueEmblem.propTypes = {
  /** league name corresponding to an icon */
  leagueName: PropTypes.string,
  /** emblem width */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default LeagueEmblem;
