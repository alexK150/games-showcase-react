import React from 'react';
import {Route} from "react-router";
import Login from "./components/login-page/Login";

import './App.css';
import GamesPage from "./components/games-page/GamesPage";

function App() {
  return (
    <div className="App">
      <Route path={'/games'}><GamesPage/></Route>
      <Route exact path={'/'}>
        <Login/>
      </Route>
    </div>
  );
}

export default App;
