import React from 'react';
import {GameCard} from "../games-page/GamesStyles";
import {Link} from "react-router-dom";

function GameItem({game}) {
  return (
    <div>
      <GameCard back={game.background_image}>
        <div className={'game-description'}>
          <div className={'game-title'}>
            <h4>{game.name}</h4>
          </div>
          <div className={'game-info'}>
            <p>{game.released}</p>
            <span>{game.rating}</span>
          </div>
          <div className={'game-overview'}>
            <Link to={`games/${game.slug}`}>More info</Link>
          </div>
        </div>
      </GameCard>
    </div>
  )
}

export default GameItem;