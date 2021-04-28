import React from 'react';

export const Search = ({setSearch}) => {
  return (
    <div className={'game-header__search'}>
      <input type="text" placeholder={'Search...'} onChange={event => setSearch(event.target.value)}/>
    </div>
  )
}