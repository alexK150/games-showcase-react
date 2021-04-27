import React, {useEffect, useState} from 'react';
import {Route} from "react-router";
import GamesPage from "./components/games-page/GamesPage";
import GamePageItem from "./components/game-page-item/GamePage";
import {gameApi} from "./components/api-info";
// import Login from "./components/login-page/Login";

import './App.css';

function App() {
  const [games, setGames] = useState([]);

  useEffect( () => {
    async function fetchData() {
      const fetchedGames = await fetch(gameApi);
      const gamesData = await fetchedGames.json();
      setGames(gamesData.results);
    }
    fetchData();
  }, [])

  return (
    <div className="App">
      <Route exact path={'/games'}><GamesPage games={games}/></Route>
      <Route path={'/games/:slug'}><GamePageItem games={games}/></Route>
      {/*<Route exact path={'/'}>*/}
      {/*  <Login/>*/}
      {/*</Route>*/}
    </div>
  );
}

export default App;
