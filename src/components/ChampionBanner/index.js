import React from 'react';
import PropTypes from 'prop-types';

import { getChampionImageBanner } from '../../api/champions';

import Loader from '../../components/Loader';

function ChampionBanner({ champion }) {
  if (!champion) return <Loader />;

  const { id, name } = champion;
  const backgroundURL = `url(${getChampionImageBanner(id)})`;

  return (
    <div
      className='ChampionBanner'
      style={{
        backgroundImage: `linear-gradient(rgb(0, 0, 0) 0, rgba(0, 0, 0, 0.5) 0), ${backgroundURL}`
      }}
    >
      <h1>{name}</h1>
    </div>
  );
}

ChampionBanner.propTypes = {
  /** object with champion infos */
  champion: PropTypes.object
};

export default ChampionBanner;
