import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

function SearchSummoner({ history }) {
  const [searchInput, setSearchInput] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    history.push(`/summoner-detail/${searchInput}`);
  }

  function handleInputChange(e) {
    setSearchInput(e.target.value);
  }

  return (
    <div className='SearchSummoner'>
      <form onSubmit={onSubmit}>
        <input
          autoFocus
          onChange={handleInputChange}
          placeholder='Search a summoner'
        />
      </form>
    </div>
  );
}

export default withRouter(SearchSummoner);
