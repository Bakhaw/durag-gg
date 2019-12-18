import React from 'react';
import PropTypes from 'prop-types';

import ProfileIcon from '../../../../components/ProfileIcon';

function ProfileHeader({ player }) {
  return (
    <div className='ProfileHeader'>
      <ProfileIcon player={player} />

      <h1>{player.name}</h1>
    </div>
  );
}

ProfileHeader.propTypes = {
  /** object with player account infos */
  player: PropTypes.object
};

export default ProfileHeader;
