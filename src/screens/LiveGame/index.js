import React, { useEffect, useState } from 'react';

import PageWrapper from '../../components/PageWrapper';

import LiveGameTable from './components/LiveGameTable';
import NoLiveGame from './components/NoLiveGame';

import { getLiveGameWithAllInfos } from './operations';
import TableHead from './components/LiveGameTable/TableHead';

function LiveGame({ match }) {
  const [error, setError] = useState(false);
  const [liveGame, setLiveGame] = useState(null);

  async function fetchData() {
    const data = await getLiveGameWithAllInfos(match.params.summonerName);

    if (data === 'No live game found') {
      setError(true);
      setLiveGame({});
    } else {
      setError(false);
      setLiveGame(data);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const isLoading = liveGame === null;

  return (
    <PageWrapper isLoading={isLoading}>
      {error ? (
        <NoLiveGame />
      ) : (
        <>
          <TableHead />

          <LiveGameTable
            tableTitle='Blue team'
            team={liveGame && liveGame.blueTeam}
          />

          <br />
          <br />

          <LiveGameTable
            tableTitle='Red team'
            team={liveGame && liveGame.redTeam}
          />
        </>
      )}
    </PageWrapper>
  );
}

export default LiveGame;
