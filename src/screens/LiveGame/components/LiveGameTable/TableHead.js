import React from 'react';

function TableHead() {
  const tableHead = ['S10', 'Win rate', 'S10 Champion infos', 'Runes', 'Bans'];

  return (
    <ul className='TableHead'>
      {tableHead.map((text, i) => (
        <li key={i}>{text}</li>
      ))}
    </ul>
  );
}

export default TableHead;
