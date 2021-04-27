import React, {useState} from 'react';
import GameItem from "../game-item/Game-Item";
import {Pagination} from "../pagination/Pagination";
import {Search} from "../search/Search";
import Sort from "../sort-component/Sort";

function GamesPage({games}) {
  const [gamesPerPage, setGamesPerPage] = useState(8);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState('');

  // Logic of getting current page games for pagination
  const indexOfLastGame = currentPage * gamesPerPage;
  const indexOfFirstGame = indexOfLastGame - gamesPerPage;
  const currentGames = games.slice(indexOfFirstGame, indexOfLastGame);

  const paginate = (pageNum) => setCurrentPage(pageNum);

  //Filter Search
  const filteredGames = currentGames.filter((game) => {
    return game.name.toLowerCase().includes(search.toLowerCase()) ||
      game.name.toLowerCase().includes(search.toLowerCase())
  })

  // Sorting
  const handleSort = (e) => {
    console.log(e.target.value)
    setSort(e.target.value);
  }

  if (sort === 'lower') {
    filteredGames.sort((a, b) => {
      return a.rating - b.rating;
    })
  } else if (sort === 'higher') {
    filteredGames.sort((a, b) => {
      return b.rating - a.rating;
    })
  }

  return (
    <div className={'game-container'}>
      <div>
        <Pagination totalGamesNumber={games.length} gamesPerPage={gamesPerPage} paginate={paginate}/>
        <Search setSearch={setSearch}/>
        <Sort handleSort={handleSort}/>
      </div>
      {
        filteredGames.map(game => {
            return <GameItem key={game.id} game={game}/>
          }
        )
      }
    </div>
  );
}

export default GamesPage;