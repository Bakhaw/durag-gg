import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getAllChampions } from './operations';

import ChampionCard from '../../components/ChampionCard';
import Loader from '../../components/Loader';

export default function Champions() {
  const [champions, setChampions] = useState([]);

  async function fetchData() {
    const data = await getAllChampions();
    setChampions(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (champions.length === 0) return <Loader />;

  return (
    <ul className='Home__Champions'>
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
