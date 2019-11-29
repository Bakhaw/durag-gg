import axios from 'axios';

import dummyPlaylist from '../dummyPlaylist';
import { API_KEY } from '../keys';

export async function fetchChannelPlaylists(channelId) {
  // TODO Find a way to be sure that all champs have their playlists associated
  const firstPageUrl = `https://www.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${channelId}&maxResults=50&key=${API_KEY}`;
  const { data: firstPageData } = await axios.get(firstPageUrl);

  const secondPageDataUrl = `https://www.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=${channelId}&maxResults=50&pageToken=${firstPageData.nextPageToken}&key=${API_KEY}`;
  const { data: secondPageData } = await axios.get(secondPageDataUrl);

  const fullData = [...firstPageData.items, ...secondPageData.items];

  return fullData;
}

export async function fetchPlaylistById(playlistId) {
  // TODO fetch 10 per 10
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=10&key=${API_KEY}`;
  const { data } = await axios.get(url);

  return data.items;

  // Uncomment this line to return dummy data instead of spamming YouTube API
  // return dummyPlaylist.items;
}

export async function mapPlaylistsToChamp(champs, playlists, championName) {
  const checker = value => champs.some(e => value.snippet.title.includes(e));

  const channelPlaylists = playlists
    .filter(checker)
    .filter(d => d.snippet.localized.title.includes(championName));

  const currentPlaylist = fetchPlaylistById(channelPlaylists[0].id);

  return currentPlaylist;
}
