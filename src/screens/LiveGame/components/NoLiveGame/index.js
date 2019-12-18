import React from 'react';

import { withRouter } from 'react-router-dom';

function NoLiveGame({ match }) {
  const { summonerName } = match.params;
  return (
    <div className='NoLiveGame'>
      <h1>{summonerName}</h1>
      <p>This summoner is not in an active game</p>
    </div>
  );
}

export default withRouter(NoLiveGame);
