import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getAllChampions } from './operations';

import ChampionCard from '../../components/ChampionCard';
import PageWrapper from '../../components/PageWrapper';

function Champions() {
  const [champions, setChampions] = useState([]);

  async function fetchData() {
    const data = await getAllChampions();
    setChampions(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const isLoading = champions.length === 0;

  return (
    <div className='Champions'>
      <PageWrapper isLoading={isLoading}>
        <ul>
          {champions.map(champion => {
            const { key, name } = champion;

            return (
              <li key={key}>
                <Link to={`/champions/details/${name}`}>
                  <ChampionCard champion={champion} />
                </Link>
              </li>
            );
          })}
        </ul>
      </PageWrapper>
    </div>
  );
}

export default Champions;
