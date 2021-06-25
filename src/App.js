
import './App.css';
import NavBar from './components/Pages/NavBar';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createUser, getLeaders} from './components/Actions/index';
import Form from './components/Form'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Leaderboard from './components/Pages/Leaderboard';
import Game from './components/Pages/Game';
import About from './components/Pages/About';
import Header from './components/Pages/Header';


function App() {


  const state = useSelector((state) => state)

  const dispatch = useDispatch()

  //Get Leaders
  const getLeadersAC = bindActionCreators(getLeaders, dispatch)

  useEffect(() => {
    getLeadersAC()}, []
)

  //Create User 
  const createUserAC = bindActionCreators(createUser, dispatch)

  const [input, setInput] = useState(false)


  function displayUserInfo() {
    if (state.user.username !== ""){
    return (
      <div>
      <NavBar />
      </div>
    )}
    else
      return (
        <div>
        Welcome to this game! Here's where a fun card will go!<br></br>
        Enter Your Name To Begin: {getUserInput()}
        </div>
      )
  }

  function getUserInput() {
    if (!input)
    return <Form createUserAC={createUserAC} setInput={setInput}/> 
  }

  return (
    <div className="App">
      <div className='app-header'>
      <Header />
      </div>
      <Router>
      <header className="App-body">
        {displayUserInfo()}
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
        </Switch>
        
      </header>
      </Router>
    </div>
  );
}

export default App;
