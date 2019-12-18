import React from 'react';
import PropTypes from 'prop-types';

import { queueTypeLabels } from '../../../../api/config/constants';

function GeneralInfos({ gameDuration, queue, win }) {
  return (
    <div className='MatchRow__GeneralInfos'>
      <p className='QueueType'>{queueTypeLabels[queue]}</p>
      <p
        className='MatchStatus'
        style={{
          color: win ? '#1a78ae' : '#c6443e'
        }}
      >
        {win ? 'Victory' : 'Defeat'}
      </p>
      <p className='MatchDuration'>{Math.round(gameDuration / 60)} mins</p>
    </div>
  );
}

GeneralInfos.propTypes = {
  /** game total length */
  gameDuration: PropTypes.number,
  /** queue ID corresponding to a queue type label */
  queue: PropTypes.number,
  /** game status to display victory or defeat */
  win: PropTypes.bool
};

export default GeneralInfos;
