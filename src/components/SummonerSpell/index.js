import React from 'react';
import PropTypes from 'prop-types';

import { getSummonerSpellById } from '../../api/summonerSpells';

function SummonerSpell({ summonerSpellId, width }) {
  return (
    <img
      alt='summoner spell'
      className='SummonerSpell'
      src={getSummonerSpellById(summonerSpellId)}
      width={width}
    />
  );
}

SummonerSpell.propTypes = {
  /** summoner spell ID */
  summonerSpellId: PropTypes.number,
  /** icon width */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default SummonerSpell;
