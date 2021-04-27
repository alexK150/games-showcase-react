import React from 'react';

function Sort({handleSort}) {
  return (
    <select defaultValue='sort' onChange={handleSort}>
      <option value="sort">Sort</option>
      <option value="higher">Start from higher rating to lower</option>
      <option value="lower">Start from lower rating to higher</option>
    </select>
  );
}

export default Sort;