import React, { useContext, useEffect, useState } from 'react';

import PageWrapper from '../../components/PageWrapper';
import ChampionBanner from '../../components/ChampionBanner';

import { StateContext } from '../../Context';

import { getChampionDetail, getPlaylistByChampionName } from './operations';
import Videos from './Videos';

function ChampionDetail({ match }) {
  const { channelPlaylists } = useContext(StateContext);
  const { championName } = match.params;

  const [error, setError] = useState(false);
  const [champion, setChampion] = useState(null);
  const [playlist, setPlaylist] = useState(null);

  async function fetchData() {
    const champion = await getChampionDetail(championName);
    setChampion(champion);

    const data = await getPlaylistByChampionName(
      channelPlaylists,
      championName
    );

    if (data === 'No playlist found for this champions') {
      setError(true);
      setPlaylist({});
    } else {
      setPlaylist(data);
      setError(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [championName, channelPlaylists]);

  const isLoading = channelPlaylists.length === 0 || !champion || !playlist;

  return (
    <PageWrapper isLoading={isLoading}>
      <div className='ChampionDetail'>
        <ChampionBanner champion={champion} />
        {error ? (
          <p>Pas de playlist trouvée pour ce champion</p>
        ) : (
          <Videos playlist={playlist} />
        )}
      </div>
    </PageWrapper>
  );
}

export default ChampionDetail;
