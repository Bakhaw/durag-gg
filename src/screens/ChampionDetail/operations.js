import {
  fetchAllChampionsNames,
  fetchChampionDetail
} from '../../api/champions';
import {
  fetchChannelPlaylists,
  mapPlaylistsToChamp
} from '../../api/playlists';
import { CHANNEL_ID } from '../../api/keys';

export async function getChampionDetail(championName) {
  const data = await fetchChampionDetail(championName);
  return data;
}

export async function getPlaylistByChampionName(championName) {
  const champsByName = await fetchAllChampionsNames();
  const channelPlaylists = await fetchChannelPlaylists(CHANNEL_ID);

  const data = await mapPlaylistsToChamp(
    champsByName,
    channelPlaylists,
    championName
  );

  return data;
}
