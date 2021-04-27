import React from 'react';
import {withRouter} from 'react-router';
import GamePageItem from "./GamePageItem";

function GamePage(props) {

  let currentGamePage = props.games.filter((game) => {
    return Object.keys(props.match.params).find(key => props.match.params[key] === game.slug);
  })[0]

  return (
    <>
      {
        currentGamePage && <GamePageItem currentGamePage={currentGamePage}/>
      }
    </>
  );
}

export default withRouter(GamePage);
