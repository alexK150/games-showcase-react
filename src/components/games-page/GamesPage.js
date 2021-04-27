import React, {useState} from 'react';
import GameItem from "../game-item/Game-Item";
import {Pagination} from "../pagination/Pagination";

function GamesPage({games}) {
  const [gamesPerPage, setGamesPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  // Logic of getting current page games
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

  const paginate = (pageNum) => setCurrentPage(pageNum);

  return (
    <div className={'game-container'}>
      <div>
        <Pagination totalGamesNumber={games.length} gamesPerPage={gamesPerPage} paginate={paginate}/>
      </div>
      {
        currentGames.map(game => {
            return <GameItem key={game.id} game={game}/>
          }
        )
      }
    </div>
  );
}

export default GamesPage;