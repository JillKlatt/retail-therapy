import React, { useState } from 'react';

import Leaderboard from './Leaderboard';
import Game from './Game';
import About from './About'

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
        <div>
        <nav>
            <button onClick={() => setPage("game")}>Let's Play!</button>
            <button onClick={() => setPage("leaderboard")}>View Leaderboard</button>
            <button onClick={() => setPage("about")}>About</button>
        </nav>
        <div>
            {switchPage()}
        </div>
    </div>
    )
} 

export default Welcome;