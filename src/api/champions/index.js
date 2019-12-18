import { DDRAGONS_BASE_URL } from '../config/constants.js';
import championsJSON from './champions.json';

/** Fetch all champions */
export function fetchAllChampions() {
  const champions = Object.values(championsJSON.data).map(champion => champion);

  return champions;
}

/** Fetch all champions and return only their names */
export function fetchAllChampionsNames() {
  const champions = Object.values(championsJSON.data).map(({ name }) => name);

  return champions;
}

/**
 * Fetch a champion using his id
 *
 * @param championId {string} - The id corresponding to the champion key
 */
export function fetchChampionById(championId) {
  const champion = Object.values(championsJSON.data).filter(
    champ => champ.key === championId.toString()
  );

  return champion[0];
}

/**
 * Fetch a champion using his name
 *
 * @param championName {string} - The name corresponding to the champion name
 */
export function fetchChampionDetail(championName) {
  const champion = Object.values(championsJSON.data).filter(
    champion => champion.name === championName
  );

  return champion[0];
}

/**
 * Returns the url corresponding to a champion banner
 *
 * @param championName {string} - the name of the champion
 */
export function getChampionImageBanner(championName) {
  return `${DDRAGONS_BASE_URL}/img/champion/splash/${championName}_0.jpg`;
}

/**
 * Returns the url corresponding to a champion square icon
 *
 * @param championName {string} - the name of the champion
 */
export function getChampionImageSquare(championName) {
  return `${DDRAGONS_BASE_URL}/9.24.1/img/champion/${championName}`;
}
