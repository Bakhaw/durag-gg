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
    const { data } = await axios.get(url);
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
  const url = `${RIOT_API_BASE_URL}/match/v5/matches/${matchId}?api_key=${RIOT_API_KEY}`;

  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log('Error', error);
  }
}

/**
 * Fetch all recent games from a summoner using account ID
 *
 * @param puuid {string} - account puuid
 */
export async function fetchSummonerMatches(puuid) {
  const url = `https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=5&api_key=${RIOT_API_KEY}`;

  console.log(url)

  try {
    // const { data } = await axios.get(PROXY_URL + url);
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.log('Error', error);
  }
}
