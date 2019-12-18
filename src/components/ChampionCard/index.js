import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { getChampionImageBanner } from '../../api/champions';

import Loader from '../../components/Loader';

function ChampionCard({ champion }) {
  const [opacity, setOpacity] = useState(0.5);

  function toggleChampionCardOpacity() {
    const newOpacity = opacity === 0.5 ? 0.1 : 0.5;
    setOpacity(newOpacity);
  }

  if (!champion) return <Loader />;

  const { id, name } = champion;
  const backgroundURL = `url(${getChampionImageBanner(id)})`;

  return (
    <div
      className='ChampionCard'
      onMouseEnter={toggleChampionCardOpacity}
      onMouseLeave={toggleChampionCardOpacity}
      style={{
        backgroundImage: `linear-gradient(rgb(0, 0, 0) 0, rgba(0, 0, 0, ${opacity}) 0), ${backgroundURL}`
      }}
    >
      <h1>{name}</h1>
    </div>
  );
}

ChampionCard.propTypes = {
  /** object with champion infos */
  champion: PropTypes.object
};

export default ChampionCard;
