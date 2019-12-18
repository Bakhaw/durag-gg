import { fetchSummoner } from '../../api/summoner';
import { fetchSummonerLeague } from '../../api/leagues';
import { fetchSummonerMatches, fetchMatchById } from '../../api/game';
import { fetchChampionById } from '../../api/champions';

/**
 * Get summoner details
 *
 * @param summonerName {string} - the name used on the summoner account
 */
export async function getSummonerDetail(summonerName) {
  const accountInfos = await fetchSummoner(summonerName);
  const rankInfos = await fetchSummonerLeague(accountInfos.id, null, true);
  const matches = await getSummonerMatches(accountInfos.accountId);

  const summonerDetail = {
    accountInfos,
    matches,
    rankInfos
  };

  return summonerDetail;
}

/**
 * Get recent summoner matches
 *
 * @param accountId {string} - encrypted account ID
 */
async function getSummonerMatches(accountId) {
  const { matches } = await fetchSummonerMatches(accountId);
  const activeChampionAndMatchDetails = await addActiveChampionAndMatchDetails(
    matches
  );
  const result = addSummonerInfos(activeChampionAndMatchDetails);

  return result;
}

/**
 * Replace matches fetched from Riot API with activeChampion and matchDetails
 * to remove non-used datas
 *
 * @param matches {array} - array of objects corresponding to summoner matches list
 */
async function addActiveChampionAndMatchDetails(matches) {
  const result = matches.map(async match => ({
    activeChampion: fetchChampionById(match.champion),
    matchDetails: {
      queue: match.queue,
      ...(await fetchMatchById(match.gameId))
    }
  }));

  return Promise.all(result);
}

/**
 * Populate matches with summonerInfos used for items and runes
 *
 * @param matches {array} - array of objects corresponding to summoner matches list
 */
function addSummonerInfos(matches) {
  const result = matches.map(match => {
    const summoner = match.matchDetails.participants.filter(
      player => player.championId.toString() === match.activeChampion.key
    )[0];

    return {
      ...match,
      summonerInfos: {
        spell1Id: summoner.spell1Id,
        spell2Id: summoner.spell2Id,
        ...summoner.stats
      }
    };
  });

  return result;
}
