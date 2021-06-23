
import './App.css';
import Welcome from './components/Pages/Welcome'
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createUser, addPoint } from './components/Actions/index'
import Form from './components/Form'


function App() {


  const state = useSelector((state) => state)
  //Checks state on reload
  // console.log(state)
  const dispatch = useDispatch()

  //Create User and Test Point Count
  const createUserAC = bindActionCreators(createUser, dispatch)
  const addPointAC = bindActionCreators(addPoint, dispatch)

  const [game, setGame] = useState(true)
  useEffect(() => {

  })

  function getUserInput() {
    if (game)
    return <Form createUserAC={createUserAC} setGame={setGame}/> 
  }

  function displayUserInfo() {
    if (state.user.username !== ""){
    return (
      <div>
      Current User: {state.user.username} <br></br>
      Current Points: {state.user.points}<br></br><br></br>
      <Welcome />
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


  return (
    <div className="App">
      <header className="App-header">
        {displayUserInfo()}
        
        <button onClick={addPointAC}>Add One Point for Test</button>

      </header>
    </div>
  );
}

export default App;
