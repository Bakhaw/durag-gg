import React from 'react';
import PropTypes from 'prop-types';

function KDA({ assists, deaths, kills }) {
  return (
    <p>
      {kills} / {deaths} / {assists}
    </p>
  );
}

KDA.propTypes = {
  /** total assists by the summoner during the game */
  assists: PropTypes.number,
  /** total deaths by the summoner during the game */
  deaths: PropTypes.number,
  /** total kills by the summoner during the game */
  kills: PropTypes.number
};

export default KDA;
