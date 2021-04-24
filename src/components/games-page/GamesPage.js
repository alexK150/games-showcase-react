import React, {useEffect, useState} from 'react';
import GameItem from "../game-item/Game-Item";
import {gameApi} from "../api-info";

function GamesPage(props) {
  const [games, setGames] = useState([]);

  useEffect(async () => {
    const fetchedGames = await fetch(gameApi);
    const gamesData = await fetchedGames.json();
    setGames(gamesData.results);
  }, [])
  return (
    <div>
      {
        games.map(game => (
            <GameItem key={game.id}/>
          )
        )
      }
    </div>
  );
}

export default GamesPage;