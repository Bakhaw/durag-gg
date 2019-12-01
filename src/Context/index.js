import React, { createContext, useEffect, useState } from 'react';

import { fetchPlaylistsByChannelId } from '../api/playlists';
import { CHANNEL_ID } from '../api/keys';

export const StateContext = createContext();

export function StateProvider({ children }) {
  const [channelPlaylists, setChannelPlaylists] = useState([]);

  async function getChannelPlaylists() {
    console.log('fetch data context triggered');

    const playlists = await fetchPlaylistsByChannelId(CHANNEL_ID);
    setChannelPlaylists(playlists);
  }

  useEffect(() => {
    getChannelPlaylists();
  }, []);

  return (
    <StateContext.Provider value={{ channelPlaylists }}>
      {children}
    </StateContext.Provider>
  );
}
