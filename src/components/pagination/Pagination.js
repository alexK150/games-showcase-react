import React from 'react';
import {Link} from "react-router-dom";

export const Pagination = ({gamesPerPage, totalGamesNumber, paginate}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalGamesNumber / gamesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={'game-header__pagination'}>
      <ul className={'pagination-ul'}>
        {pageNumbers.map((number) => (
          <li key={number}>
            <Link to={`/`} onClick={() => paginate(number)}>
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}