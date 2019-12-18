import { DDRAGONS_BASE_URL } from '../config/constants';
import getSummonerSpellsJSON from './summonerSpells';

/**
 * Returns the url corresponding to a summoner spell icon
 *
 * @param summonerSpellId {string} - the id of the summoner spell
 */
export function getSummonerSpellById(summonerSpellId) {
  const summonerSpell = Object.values(getSummonerSpellsJSON.data).filter(
    summ => summ.key === summonerSpellId.toString()
  );

  const { full: sprite } = summonerSpell[0].image;

  return `${DDRAGONS_BASE_URL}/9.24.1/img/spell/${sprite}`;
}
