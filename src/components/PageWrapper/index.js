import React from 'react';
import PropTypes from 'prop-types';

import Loader from '../Loader';

function PageWrapper({ children, isLoading }) {
  return <div className='PageWrapper'>{isLoading ? <Loader /> : children}</div>;
}

PageWrapper.propTypes = {
  /** HTML|JSX elements */
  children: PropTypes.node,
  /** a loading state */
  isLoading: PropTypes.bool
};

export default PageWrapper;
