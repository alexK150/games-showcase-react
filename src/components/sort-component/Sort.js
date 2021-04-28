import React from 'react';

function Sort({handleSort}) {
  return (
    <div className={'game-header__sort'}>
      <select className={'game-header__sort'} defaultValue='sort' onChange={handleSort}>
        <option value="sort">Sort</option>
        <option value="higher">Start from higher rating to lower</option>
        <option value="lower">Start from lower rating to higher</option>
      </select>
    </div>
  );
}

export default Sort;