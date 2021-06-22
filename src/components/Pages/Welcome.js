import React, { useState } from 'react';
import {
    BrowserRouter as Router,
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
            <span><Link to='/game' onClick={() => setPage("game")}>Let's Play!</Link></span>
            <span class="navigationSpace"/>
            <Link to='/leaderboard' onClick={() => setPage("leaderboard")}>Leaderboard   </Link>
            <span class="navigationSpace"/>
            <Link to='/about' onClick={() => setPage("about")}>About</Link>
            <span class="navigationSpace"/>
        </nav>
        <div>
            {switchPage()}
        </div>
    </div>

    </Router>
    )
} 

export default Welcome;