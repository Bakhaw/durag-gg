import React, { useState, useEffect } from 'react';

import API from '../../api';

import ChampionCard from '../../components/ChampionCard';
import Loader from '../../components/Loader';

export default function ChampionDetail({ match }) {
  const { championName } = match.params;

  const [champion, setChampion] = useState(null);
  const [playlist, setPlaylist] = useState(null);

  async function getChampion() {
    const data = await API.champions.GET_CHAMPION_DETAIL(championName);
    setChampion(data);
  }

  async function getPlaylist() {
    const data = await API.videos.GET_PLAYLIST_BY_ID(
      API.playlistsIds[championName]
    );
    setPlaylist(data);
  }

  useEffect(() => {
    getChampion();
    getPlaylist();
  }, [championName]);

  if (!champion || !playlist) return <Loader />;

  console.log('ici', playlist);

  return (
    <div>
      <ChampionCard champion={champion} />

      {playlist.map(d => (
        <iframe
          key={d.id}
          id='ytplayer'
          title={d.snippet.title}
          type='text/html'
          width='360'
          height='260'
          src={`https://www.youtube.com/embed/${d.snippet.resourceId.videoId}?autoplay=0`}
          frameBorder='0'
        />
      ))}
    </div>
  );
}
