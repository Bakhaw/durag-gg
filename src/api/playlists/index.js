import axios from 'axios';

import { YOUTUBE_API_BASE_URL } from '../config/constants';
import { YOUTUBE_API_KEY } from '../config/keys';
// import { dummyChannelPlaylists, dummyPlaylist } from '../dummyData';

function fetchAllChannelPlaylists(channelId) {
  let fullData = [];

  // TODO create JSON mocks with api response (node-fs)
  return async function recursiveFetchPlaylists(nextPageToken) {
    const pageUrl = nextPageToken
      ? `${YOUTUBE_API_BASE_URL}/playlists?part=snippet&channelId=${channelId}&maxResults=50&pageToken=${nextPageToken}&key=${YOUTUBE_API_KEY}`
      : `${YOUTUBE_API_BASE_URL}/playlists?part=snippet&channelId=${channelId}&maxResults=50&key=${YOUTUBE_API_KEY}`;

    const { data } = await axios.get(pageUrl);

    fullData = [...fullData, ...data.items];

    if (fullData.length < data.pageInfo.totalResults) {
      return recursiveFetchPlaylists(data.nextPageToken);
    }

    return fullData;
  };
}

export async function fetchPlaylistsByChannelId(channelId) {
  const allPlaylists = fetchAllChannelPlaylists(channelId);
  const fullData = await allPlaylists();

  return fullData;

  // Uncomment this line to return dummy data instead of spamming YouTube API
  // return dummyChannelPlaylists.items;
}

export async function fetchPlaylistById(playlistId) {
  // TODO fetch 10 per 10
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=10&key=${YOUTUBE_API_KEY}`;
  const { data } = await axios.get(url);

  return data.items;

  // Uncomment this line to return dummy data instead of spamming YouTube API
  // return dummyPlaylist.items;
}

export async function mapPlaylistsToChamp(
  champsByName,
  playlists,
  championName
) {
  if (champsByName.length === 0 || playlists.length === 0 || !championName)
    return;

  const checker = value =>
    champsByName.some(champName => value.snippet.title.includes(champName));

  const channelPlaylists = playlists
    .filter(checker)
    .filter(d => d.snippet.localized.title.includes(championName));

  if (channelPlaylists.length === 0) {
    return 'No playlist found for this champions';
  } else {
    const currentPlaylist = await fetchPlaylistById(channelPlaylists[0].id);

    return currentPlaylist;
  }
}
