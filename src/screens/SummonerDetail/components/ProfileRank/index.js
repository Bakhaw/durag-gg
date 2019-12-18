import React from 'react';
import PropTypes from 'prop-types';

import RankCard from './RankCard';

/** Summoner ranks (solo and flex) showed in the SummonerDetail screen */
function ProfileRank({ rank = {} }) {
  return (
    <div>
      <RankCard rank={rank.soloQueue} />
      <RankCard rank={rank.flexQueue} />
    </div>
  );
}

ProfileRank.propTypes = {
  /** object with soloQueue and flexQueue details */
  rank: PropTypes.object
};

export default ProfileRank;
