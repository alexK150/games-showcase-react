import React from 'react';
import GameItem from "../game-item/Game-Item";

function GamesPage({games}) {

  return (
    <div className={'game-container'}>
      {
        games.map(game => {
           return <GameItem key={game.id} game={game}/>
        }
        )
      }
    </div>
  );
}

export default GamesPage;