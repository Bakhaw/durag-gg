import { fetchChampionById } from '../../api/champions';
import { fetchLiveGame } from '../../api/game';
import { fetchSummoner } from '../../api/summoner';
import { fetchSummonerLeague } from '../../api/leagues';

export async function getLiveGameWithAllInfos(summonerName) {
  const liveGame = await getLiveGame(summonerName);

  if (!liveGame) return 'No live game found';

  const liveGameWithActiveChamps = await mapChampionsToPlayersChampionId(
    liveGame.participants
  );

  const { blueTeam, redTeam } = await splitPlayersByTeam(
    liveGameWithActiveChamps
  );

  const result = {
    blueTeam: await populateTeamsWithRanks(
      blueTeam,
      liveGame.gameQueueConfigId
    ),
    redTeam: await populateTeamsWithRanks(redTeam, liveGame.gameQueueConfigId)
  };

  return result;
}

async function getLiveGame(summonerName) {
  const summoner = await fetchSummoner(summonerName);
  const liveGame = await fetchLiveGame(summoner.id);

  return liveGame;
}

export function mapChampionsToPlayersChampionId(players) {
  const newPlayers = players.map(player => ({
    ...player,
    activeChampion: fetchChampionById(player.championId)
  }));

  return newPlayers;
}

async function splitPlayersByTeam(players) {
  const blueTeam = players.filter(player => player.teamId === 100);
  const redTeam = players.filter(player => player.teamId === 200);

  const playersByTeam = {
    blueTeam,
    redTeam
  };

  return playersByTeam;
}

async function populateTeamsWithRanks(team, gameQueueConfigId) {
  const newTeam = team.map(async player => {
    const rankInfos = await fetchSummonerLeague(
      player.summonerId,
      gameQueueConfigId
    );

    const newPlayer = {
      ...player,
      rankInfos
    };

    return newPlayer;
  });

  return Promise.all(newTeam);
}
