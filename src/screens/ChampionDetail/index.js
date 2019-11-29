import React, { useState, useEffect } from 'react';

import { getChampionDetail, getPlaylistByChampionName } from './operations';

import ChampionCard from '../../components/ChampionCard';
import Loader from '../../components/Loader';

export default function ChampionDetail({ match }) {
  const { championName } = match.params;

  const [champion, setChampion] = useState(null);
  const [playlist, setPlaylist] = useState(null);

  async function fetchData() {
    const champion = await getChampionDetail(championName);
    setChampion(champion);

    const playlist = await getPlaylistByChampionName(championName);
    setPlaylist(playlist);
  }

  useEffect(() => {
    fetchData();
  }, [championName]);

  if (!champion || !playlist) return <Loader />;

  return (
    <div className='ChampionDetail'>
      <ChampionCard champion={champion} />

      <ul>
        {playlist.map(d => (
          <li key={d.id}>
            <iframe
              id='ytplayer'
              title={d.snippet.title}
              type='text/html'
              src={`https://www.youtube.com/embed/${d.snippet.resourceId.videoId}?autoplay=0`}
              frameBorder='0'
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
