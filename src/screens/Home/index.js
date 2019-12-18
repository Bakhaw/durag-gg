import React from 'react';

import HomeBg from '../../assets/home-bg.svg';

function Home() {
  return (
    <div className='Home' style={{ backgroundImage: `url(${HomeBg})` }}>
      <h1>DURAG.GG</h1>
    </div>
  );
}

export default Home;
