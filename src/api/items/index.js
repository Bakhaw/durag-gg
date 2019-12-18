import { DDRAGONS_BASE_URL } from '../config/constants';

/**
 * Returns the url corresponding to an item icon
 *
 * @param itemId {string} - the item ID
 */
export function getItemIcon(itemId) {
  return `${DDRAGONS_BASE_URL}/9.24.2/img/item/${itemId}.png`;
}
