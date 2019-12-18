import axios from 'axios';

import {
  PROXY_URL,
  RIOT_API_BASE_URL,
  RANKED_FLEX_QUEUE_ID
} from '../config/constants';
import { RIOT_API_KEY } from '../config/keys';

/**
 * Fetch summoner league
 *
 * @param summonerId {string} - the encrypted summoner ID from Riot API
 * @param queueTypeId {string} - the id corresponding to the queue type
 * @param getBothQueues {boolean} - if true, returns both solo and flex queue
 */
export async function fetchSummonerLeague(
  summonerId,
  queueTypeId,
  getBothQueues = false
) {
  const url = `${RIOT_API_BASE_URL}/league/v4/entries/by-summoner/${summonerId}?api_key=${RIOT_API_KEY}`;

  try {
    const { data } = await axios.get(PROXY_URL + url);
    const filterQueueType = queueType =>
      data.filter(rank => rank.queueType === queueType)[0];

    if (getBothQueues)
      return {
        soloQueue: filterQueueType('RANKED_SOLO_5x5'),
        flexQueue: filterQueueType('RANKED_FLEX_SR')
      };

    const queueType =
      queueTypeId === RANKED_FLEX_QUEUE_ID
        ? 'RANKED_FLEX_SR'
        : 'RANKED_SOLO_5x5';

    const rank = filterQueueType(queueType);

    return rank;
  } catch (error) {
    throw error;
  }
}
