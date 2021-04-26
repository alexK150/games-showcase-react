import React from 'react';
import {withRouter} from 'react-router';

function GamePageItem(props) {
  let gamePage = [];
  return (
    <div>
      {gamePage.push(props.games.filter((game)=>{
        return Object.keys(props.match.params).find(key => props.match.params[key] === game.slug);
      }))}
      {console.log(gamePage)}

    </div>
  );
}

export default withRouter(GamePageItem);