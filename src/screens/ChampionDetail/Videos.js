import React from 'react';

function Videos({ playlist }) {
  return (
    <ul>
      {playlist.map(d => (
        <li key={d.id}>
          <iframe
            id='ytplayer'
            title={d.snippet.title}
            type='text/html'
            src={`https://www.youtube.com/embed/${d.snippet.resourceId.videoId}?autoplay=0`}
            frameBorder='0'
          />
        </li>
      ))}
    </ul>
  );
}

export default Videos;
