import axios from 'axios';

import { PROXY_URL, RIOT_API_BASE_URL } from '../config/constants';
import { RIOT_API_KEY } from '../config/keys';

/**
 * Fetch a summoner profile using his name
 *
 * @param summonerName {string} - the name used on the summoner account
 */
export async function fetchSummoner(summonerName) {
  const url = `${RIOT_API_BASE_URL}/summoner/v4/summoners/by-name/${summonerName}?api_key=${RIOT_API_KEY}`;

  try {
    const { data } = await axios.get(PROXY_URL + url);
    return data;
  } catch (error) {
    throw error;
  }
}
