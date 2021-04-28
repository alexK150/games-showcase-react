import React from 'react';
import Slider from "../new-slider/Slider";

function GamePageItem({currentGamePage}) {
  return (
    <>
      <Slider currentGamePage={currentGamePage}/>
      <div className={'game-page-item__info'}>
        <h1>{currentGamePage.name}</h1>
        <a href={`https://rawg.io/games/${currentGamePage.slug}`}>Look on website {currentGamePage.name}</a>
        <div>Description:
          {
            currentGamePage.genres.map((el) => {
              return <span key={el.id}>{el.name} </span>
            })
          }
        </div>
      </div>
    </>
  );
}

export default GamePageItem;