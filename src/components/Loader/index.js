import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

function Loader() {
  return (
    <div className='Loader'>
      <CircularProgress size={40} />
    </div>
  );
}

export default Loader;
