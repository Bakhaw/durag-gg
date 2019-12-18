import React, { createContext, useEffect, useState } from 'react';

import { CHANNEL_ID } from '../api/config/keys';
import { fetchPlaylistsByChannelId } from '../api/playlists';

export const StateContext = createContext();

export function StateProvider({ children }) {
  const [channelPlaylists, setChannelPlaylists] = useState([]);

  async function getChannelPlaylists() {
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
