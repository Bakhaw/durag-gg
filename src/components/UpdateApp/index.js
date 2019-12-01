import React, { useEffect, useState } from 'react';

import SnackBar from './SnackBar';

function UpdateApp() {
  const [hasUpdate, setHasUpdate] = useState(undefined);

  function checkForUpdates() {
    if (window.swObservable) {
      window.swObservable.subscribe(hasUpdate => setHasUpdate(hasUpdate));
    }
  }

  useEffect(() => {
    checkForUpdates();
  });

  const message = hasUpdate
    ? 'A new update is available, please quit and restart the application'
    : 'The application is now cached and ready to use offline';

  return (
    <React.Fragment>
      {hasUpdate !== undefined && <SnackBar message={message} />}
    </React.Fragment>
  );
}

export default UpdateApp;
