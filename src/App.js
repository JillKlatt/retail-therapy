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

  const [game, setGame] = useState(false)

  const dispatch = useDispatch()

  const createUserAC = bindActionCreators(createUser, dispatch)
  // console.log(createUserAC)

  const addPointAC = bindActionCreators(addPoint, dispatch)

  function getUserInput() {
          console.log(game)
    switch (game){
      case false:

 
        return <Form createUserAC={createUserAC}/>


      case true:
        return <Welcome />

        default:
          return <Form createUserAC={createUserAC}/>
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        Current User: {state.user.username} <br></br>
        Current Points: {state.user.points}
        {getUserInput()}
        {/* <Welcome /> */}
        <button onClick={addPointAC}>One Point!</button>


        
      </header>
    </div>
  );
}

export default App;
