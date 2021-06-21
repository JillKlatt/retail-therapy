import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Leaderboard from './Leaderboard';
import Game from './Game';
import About from './About'
// import Form from '../Form'

function Welcome() {

    const [page, setPage] = useState("about")

    function switchPage(){
    switch (page) {
        
        case "game":

            return <Game />

        case "leaderboard":
               
            return <Leaderboard />
        
        case "about":
             
            return <About />
    
        default:

            return <About />;
        }
    }


    return (
        <Router>
        <div>
        <nav>
            <Link to='/' onClick={() => setPage("game")}>Let's Play!</Link>
            <Link to='/leaderboard' onClick={() => setPage("leaderboard")}>Leaderboard!</Link>
            <Link to='/about' onClick={() => setPage("about")}>About</Link>
        </nav>
        <div>
            {switchPage()}
        </div>
    </div>
    </Router>
    )
} 

export default Welcome;