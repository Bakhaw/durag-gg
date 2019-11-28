import React from 'react';

import API from '../../api';

import Loader from '../../components/Loader';

export default function ChampionCard({ champion = null }) {
  if (!champion) return <Loader />;

  const { image, name } = champion;

  return (
    <>
      <p>{name}</p>
      <img
        alt={`${name}-avatar`}
        src={`${API.champions.CHAMPION_IMAGE_SQUARE(image.full)}`}
      />
    </>
  );
}
