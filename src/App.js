import logo from './logo.svg';
import './App.css';
import pageReducer from './components/reducers/pageReducer';
import Welcome from './components/Pages/Welcome'
import React, {useState} from 'react';


function App() {

  const [page, setPage] = useState("welcome")

  return (
    <div className="App">
      <header className="App-header">
    //     <div>
    //     <nav>
    //         <button onClick={() => setPage("welcome")}>Welcome</button>
    //         <button onClick={() => setPage("game")}>Let's Play!</button>
    //         <button onClick={() => setPage("leaderboard")}>View Leaderboard</button>
    //         <button onClick={() => setPage("about")}>About</button>
    //     </nav>
    //     <div>
    //         {pageReducer()}
    //     </div>
    // </div>
    // )
        
      </header>
    </div>
  );
}

export default App;
