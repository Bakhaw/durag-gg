import React from 'react';

import ChampionSprite from '../../../../components/ChampionSprite';
import LeagueEmblem from '../../../../components/LeagueEmblem';
import SummonerSpell from '../../../../components/SummonerSpell';

function TableRow({ player }) {
  const totalGames = player.rankInfos.wins + player.rankInfos.losses;
  const winrate = (player.rankInfos.wins * 100) / totalGames;

  return (
    <li className='TableRow'>
      <div>
        <ChampionSprite champion={player.activeChampion} />
        <SummonerSpell summonerSpellId={player.spell1Id} />
        <SummonerSpell summonerSpellId={player.spell2Id} />
        {player.summonerName}
      </div>

      <div>
        <LeagueEmblem leagueName={player.rankInfos.tier} />
        {player.rankInfos.tier} {player.rankInfos.rank} (
        {player.rankInfos.leaguePoints} LP)
      </div>

      <div>
        {Math.round(winrate)}% ({totalGames} played)
      </div>
    </li>
  );
}

export default TableRow;
