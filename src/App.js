
import './App.css';
import NavBar from './components/Pages/NavBar';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getLeaders} from './components/Actions/index';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";
import Leaderboard from './components/Pages/Leaderboard';
import Game from './components/Pages/Game';
import About from './components/Pages/About';
import Header from './components/Pages/Header';
import Welcome from './components/Pages/Welcome'


function App() {

  const state = useSelector((state) => state)

  const dispatch = useDispatch()

  //Get Leaders
  const getLeadersAC = bindActionCreators(getLeaders, dispatch)

  useEffect(() => {
    getLeadersAC()}, []
)// eslint-disable-line react-hooks/exhaustive-deps

// Doesn't display Navbar unless you're signed in
  function displayUserInfo() {
    if (state.user.username !== ""){
    return (
      <div>
      <NavBar />
      </div>
    )}
    else
      return (
        <div className='app-body'>
       <Welcome />

        </div>
      )
  }

  // Protects routes from being accessed if you're not signed in
  function playerSignedIn() {
    if (state.user.username !== ""){
    return (
      <Switch>
      <Route exact path='/game'>
        <Game />
      </Route>
      <Route exact path='/leaderboard'>
        <Leaderboard/>
      </Route>
      <Route exact path='/about'>
        <About/>
      </Route>
      <Route exact path='/'>
        <Redirect to='/about'/>
      </Route>
    </Switch>
    )}
  }


  return (
        <Router>
    <div className='container'>
    <div className="App" >      

      <header className='App-header'>
      <Header />
      </header>

      <div className="app-body">
        {displayUserInfo()}
        {playerSignedIn()}
      </div>
    
    </div>
    </div>
    </Router>
  );
}

export default App;
