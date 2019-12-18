import React from 'react';
import PropTypes from 'prop-types';

function Videos({ playlist }) {
  return (
    <ul>
      {playlist.map(video => (
        <li key={video.id}>
          <iframe
            id='ytplayer'
            title={video.snippet.title}
            type='text/html'
            src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}?autoplay=0`}
            frameBorder='0'
          />
        </li>
      ))}
    </ul>
  );
}

Videos.propTypes = {
  /** playlist array containing videos */
  playlist: PropTypes.array
};

export default Videos;
