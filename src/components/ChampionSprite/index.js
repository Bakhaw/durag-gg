import React from 'react';
import PropTypes from 'prop-types';

import { getChampionImageSquare } from '../../api/champions';

function ChampionSprite({ champion, type = 'square', width }) {
  return (
    <img
      alt={champion.id}
      className={`ChampionSprite ${type}`}
      src={getChampionImageSquare(champion.image.full)}
      width={width}
    />
  );
}

ChampionSprite.propTypes = {
  /** object with champion infos */
  champion: PropTypes.object,
  /** define if the sprite is rounded or square */
  type: PropTypes.oneOf(['square', 'rounded']),
  /** sprite width */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default ChampionSprite;
