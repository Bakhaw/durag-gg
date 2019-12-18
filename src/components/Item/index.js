import React from 'react';
import PropTypes from 'prop-types';

import { getItemIcon } from '../../api/items';

function Item({ itemId, width }) {
  if (!itemId) return null;

  return <img alt='Item icon' src={getItemIcon(itemId)} width={width} />;
}

Item.propTypes = {
  /** the item ID */
  itemId: PropTypes.number,
  /** item icon width */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default Item;
