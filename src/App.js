// import logo from './logo.svg';
import './App.css';
// import pageReducer from './components/reducers/pageReducer';
import Welcome from './components/Pages/Welcome'
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createUser, addPoint, getLeaders } from './components/Actions/index'
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

  // function getUserInput() {
  //         console.log(game)
  //   switch (game){
  //     case false:

  //       return <Form createUserAC={createUserAC}/>
  //       //After form is submitted setGame(true)


  //     case true:
  //       return <Welcome />

  //       default:
  //         return <Form createUserAC={createUserAC}/>
  //   }
  // }

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
        Enter Your Name: {getUserInput()}
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
