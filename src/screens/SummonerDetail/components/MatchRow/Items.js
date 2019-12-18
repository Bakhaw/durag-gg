import React from 'react';
import PropTypes from 'prop-types';

import Item from '../../../../components/Item';

function Items({ items }) {
  return (
    <ul className='MatchRow__Items'>
      {items.map((itemId, i) => (
        <li key={i}>
          <Item itemId={itemId} width='100%' />
        </li>
      ))}
    </ul>
  );
}

Items.propTypes = {
  /** array with items that the summoner bought during the game */
  items: PropTypes.array
};

export default Items;
