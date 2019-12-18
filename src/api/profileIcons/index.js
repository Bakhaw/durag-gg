import { DDRAGONS_BASE_URL } from '../config/constants';

/**
 * Returns the url corresponding to a profile icon
 *
 * @param iconId {string} - the profile icon ID
 */
export function getProfileIcon(iconId) {
  return `${DDRAGONS_BASE_URL}/9.24.2/img/profileicon/${iconId}.png`;
}
