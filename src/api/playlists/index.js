import axios from 'axios';

import { dummyChannelPlaylists, dummyPlaylist } from '../dummyData';
import { API_KEY } from '../keys';

import { BASE_URL } from './constants';

function fetchAllChannelPlaylists(channelId) {
  let fullData = [];

  // TODO create JSON mocks with api response (node-fs)
  return async function recursiveFetchPlaylists(nextPageToken) {
    const pageUrl = nextPageToken
      ? `${BASE_URL}/playlists?part=snippet&channelId=${channelId}&maxResults=50&pageToken=${nextPageToken}&key=${API_KEY}`
      : `${BASE_URL}/playlists?part=snippet&channelId=${channelId}&maxResults=50&key=${API_KEY}`;

    const { data } = await axios.get(pageUrl);

    fullData = [...fullData, ...data.items];

    if (fullData.length < data.pageInfo.totalResults) {
      return recursiveFetchPlaylists(data.nextPageToken);
    }

    return fullData;
  };
}

export async function fetchPlaylistsByChannelId(channelId) {
  // const allPlaylists = fetchAllChannelPlaylists(channelId);
  // const fullData = await allPlaylists();

  // return fullData;

  // Uncomment this line to return dummy data instead of spamming YouTube API
  return dummyChannelPlaylists.items;
}

export async function fetchPlaylistById(playlistId) {
  // TODO fetch 10 per 10
  // const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=10&key=${API_KEY}`;
  // const { data } = await axios.get(url);

  // return data.items;

  // Uncomment this line to return dummy data instead of spamming YouTube API
  return dummyPlaylist.items;
}

export async function mapPlaylistsToChamp(champs, playlists, championName) {
  if (champs.length === 0 || playlists.length === 0 || !championName) return;

  const checker = value => champs.some(e => value.snippet.title.includes(e));

  const channelPlaylists = playlists
    .filter(checker)
    .filter(d => d.snippet.localized.title.includes(championName));

  const currentPlaylist = fetchPlaylistById(channelPlaylists[0].id);

  return currentPlaylist;
}
