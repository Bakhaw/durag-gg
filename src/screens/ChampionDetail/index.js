import React, { useContext, useEffect, useState } from 'react';

import ChampionCard from '../../components/ChampionCard';

import { StateContext } from '../../Context';

import { getChampionDetail, getPlaylistByChampionName } from './operations';
import Videos from './Videos';
import PageWrapper from '../../components/PageWrapper';

function ChampionDetail({ match }) {
  const { channelPlaylists } = useContext(StateContext);
  const { championName } = match.params;

  const [champion, setChampion] = useState(null);
  const [playlist, setPlaylist] = useState(null);

  async function fetchData() {
    const champion = await getChampionDetail(championName);
    setChampion(champion);

    const playlist = await getPlaylistByChampionName(
      channelPlaylists,
      championName
    );
    setPlaylist(playlist);
  }

  useEffect(() => {
    fetchData();
  }, [championName, channelPlaylists]);

  const isLoading = channelPlaylists.length === 0 || !champion || !playlist;

  return (
    <PageWrapper isLoading={isLoading}>
      <div className='ChampionDetail'>
        <ChampionCard champion={champion} />
        <Videos playlist={playlist} />
      </div>
    </PageWrapper>
  );
}

export default ChampionDetail;
