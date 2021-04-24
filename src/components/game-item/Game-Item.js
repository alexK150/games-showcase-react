import React from 'react';
import {GameCard} from "../games-page/GamesStyles";

function GameItem({game: {name, released, background_image, rating}}) {
  return (
    <GameCard back={background_image}>
      <div className={'game-description'}>
        <div className={'game-title'}>
          <h4>{name}</h4>
        </div>
        <div className={'game-info'}>
          <p>{released}</p>
          <span>{rating}</span>
        </div>
      </div>
    </GameCard>
  )
}

export default GameItem;