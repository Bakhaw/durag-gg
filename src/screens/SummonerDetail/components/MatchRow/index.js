import React from 'react';
import PropTypes from 'prop-types';

import { fetchChampionById } from '../../../../api/champions';

import ChampionSprite from '../../../../components/ChampionSprite';
import SummonerSpell from '../../../../components/SummonerSpell';

import GeneralInfos from './GeneralInfos';
import Items from './Items';
import KDA from './KDA';

function MatchRow({ activeChampion, matchDetails, summonerInfos }) {
  const { key } = activeChampion;
  const { gameDuration, queue } = matchDetails;
  const {
    assists,
    deaths,
    item0,
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
    kills,
    spell1Id,
    spell2Id,
    win
  } = summonerInfos;

  const items = [item0, item1, item2, item6, item3, item4, item5];
  const currentChampion = fetchChampionById(key);

  return (
    <>
      <GeneralInfos gameDuration={gameDuration} queue={queue} win={win} />

      <div className='MatchRow__MatchSettings'>
        <ChampionSprite champion={currentChampion} type='rounded' width={52} />
        <div>
          <SummonerSpell summonerSpellId={spell1Id} width={26} />
          <SummonerSpell summonerSpellId={spell2Id} width={26} />
        </div>
      </div>

      <KDA assists={assists} deaths={deaths} kills={kills} />

      <Items items={items} />
    </>
  );
}

MatchRow.propTypes = {
  /** object with active champion infos */
  activeChampion: PropTypes.object,
  /** object with match details (gameId, gameDuration,  participants, queue, etc.)  */
  matchDetails: PropTypes.object,
  /** object with summoner account infos  */
  summonerInfos: PropTypes.object
};

export default MatchRow;
