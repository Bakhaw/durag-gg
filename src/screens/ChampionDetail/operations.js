import {
  fetchAllChampionsNames,
  fetchChampionDetail
} from '../../api/champions';
import { mapPlaylistsToChamp } from '../../api/playlists';

export async function getChampionDetail(championName) {
  const data = await fetchChampionDetail(championName);

  return data;
}

export async function getPlaylistByChampionName(
  channelPlaylists,
  championName
) {
  const champsByName = fetchAllChampionsNames();

  const data = await mapPlaylistsToChamp(
    champsByName,
    channelPlaylists,
    championName
  );

  return data;
}
