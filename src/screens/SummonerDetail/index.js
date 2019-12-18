import React, { useEffect, useState } from 'react';

import PageWrapper from '../../components/PageWrapper';

import { getSummonerDetail } from './operations';

import Matches from './components/Matches';
import ProfileHeader from './components/ProfileHeader';
import ProfileRank from './components/ProfileRank';

function SummonerDetail({ match }) {
  const { summonerName } = match.params;
  const [summonerDetail, setSummonerDetail] = useState(undefined);

  async function fetchData() {
    const summonerDetail = await getSummonerDetail(summonerName);
    setSummonerDetail(summonerDetail);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const isLoading = summonerDetail === undefined;

  return (
    <PageWrapper isLoading={isLoading}>
      <div className='SummonerDetail'>
        <ProfileHeader player={summonerDetail && summonerDetail.accountInfos} />
        <div className='SummonerDetailContent'>
          <ProfileRank rank={summonerDetail && summonerDetail.rankInfos} />
          <Matches matches={summonerDetail && summonerDetail.matches} />
        </div>
      </div>
    </PageWrapper>
  );
}

export default SummonerDetail;
