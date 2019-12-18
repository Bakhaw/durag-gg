import React from 'react';
import PropTypes from 'prop-types';

import { getProfileIcon } from '../../api/profileIcons';

function ProfileIcon({ player, showSummonerLevel = true }) {
  return (
    <div className='ProfileIcon'>
      <img
        alt='Profile icon'
        src={getProfileIcon(player.profileIconId)}
        width={120}
      />
      {showSummonerLevel && <span>{player.summonerLevel}</span>}
    </div>
  );
}

ProfileIcon.propTypes = {
  /** object with player infos */
  player: PropTypes.object,
  /** if true, display summoner level with the profile icon */
  showSummonerLevel: PropTypes.bool
};

export default ProfileIcon;
