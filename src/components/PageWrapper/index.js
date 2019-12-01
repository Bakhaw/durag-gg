import React from 'react';

import Loader from '../Loader';

function PageWrapper({ children, isLoading }) {
  return <div className='PageWrapper'>{isLoading ? <Loader /> : children}</div>;
}

export default PageWrapper;
