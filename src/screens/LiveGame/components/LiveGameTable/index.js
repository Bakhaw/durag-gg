import React from 'react';

import TableRow from './TableRow';

function LiveGameTable({ team }) {
  return (
    <div>
      <ul>
        {team.map(player => (
          <TableRow key={player.summonerId} player={player} />
        ))}
      </ul>
    </div>
  );
}

export default LiveGameTable;
