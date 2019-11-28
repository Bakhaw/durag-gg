import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import API from '../../api';
import ChampionCard from '../../components/ChampionCard';
import Loader from '../../components/Loader';

export default function Champions() {
  const [champions, setChampions] = useState([]);

  async function getChampions() {
    const data = await API.champions.GET_ALL_CHAMPIONS();
    setChampions(data);
  }

  useEffect(() => {
    getChampions();
  }, []);

  if (champions.length === 0) return <Loader />;

  return (
    <ul>
      {champions.map(champ => {
        const { key, name } = champ;
        return (
          <li key={key}>
            <Link to={`/detail/${name}`}>
              <ChampionCard champion={champ} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
