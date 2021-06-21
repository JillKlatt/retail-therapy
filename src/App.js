// import logo from './logo.svg';
import './App.css';
// import pageReducer from './components/reducers/pageReducer';
import Welcome from './components/Pages/Welcome'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createUser, addPoint } from './components/Actions/index'
import Form from './components/Form'


function App() {

  //Checks state on reload
  const state = useSelector((state) => state)
  console.log(state)

  const dispatch = useDispatch()

  const createUserAC = bindActionCreators(createUser, dispatch)
  // console.log(createUserAC)

  const addPointAC = bindActionCreators(addPoint, dispatch)


  return (
    <div className="App">
      <header className="App-header">
        {state.user.points}
        <Welcome />
        <Form createUserAC={createUserAC}/>
        <button onClick={addPointAC}>One Point!</button>
        
      </header>
    </div>
  );
}

export default App;
