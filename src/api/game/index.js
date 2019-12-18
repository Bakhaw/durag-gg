import axios from 'axios';

import { PROXY_URL, RIOT_API_BASE_URL } from '../config/constants';
import { RIOT_API_KEY } from '../config/keys';

/**
 * Fetch a live game using a summoner ID
 *
 * @param summonerId {string} - encrypted summoner ID
 */
export async function fetchLiveGame(summonerId) {
  const url = `${RIOT_API_BASE_URL}/spectator/v4/active-games/by-summoner/${summonerId}?api_key=${RIOT_API_KEY}`;

  try {
    const { data } = await axios.get(PROXY_URL + url);
    return data;
  } catch (error) {
    console.log('Error', error);
  }
}

/**
 * Fetch an ended match using a match ID
 *
 * @param matchId {string} - the matchId from the game
 */
export async function fetchMatchById(matchId) {
  const url = `${RIOT_API_BASE_URL}/match/v4/matches/${matchId}?api_key=${RIOT_API_KEY}`;

  try {
    const { data } = await axios.get(PROXY_URL + url);
    return data;
  } catch (error) {
    console.log('Error', error);
  }
}

/**
 * Fetch all recent games from a summoner using account ID
 *
 * @param accountId {string} - encrypted account ID
 */
export async function fetchSummonerMatches(accountId) {
  const url = `${RIOT_API_BASE_URL}/match/v4/matchlists/by-account/${accountId}?endIndex=5&api_key=${RIOT_API_KEY}`;

  try {
    const { data } = await axios.get(PROXY_URL + url);
    return data;
  } catch (error) {
    console.log('Error', error);
  }
}
