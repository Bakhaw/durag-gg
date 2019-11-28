import axios from 'axios';

const apiKey = 'AIzaSyDSDDDV-6ydLirv7Yj676dhRiNxp-v44sw';

export const playlistsIds = {
  Cassiopeia: 'PLPUygacvheSNqAW7k4LZJIeFHCJfH5-fY'
};

export default {
  GET_PLAYLIST_BY_ID: async playlistId => {
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&key=${apiKey}`;
    const { data } = await axios.get(url);

    return data.items;
  }
};
