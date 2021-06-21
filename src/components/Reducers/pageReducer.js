import React, { useState } from 'react';

import Welcome from '../Pages/Welcome';
import Leaderboard from '../Pages/Leaderboard';
import Game from '../Pages/Game';
import About from '../Pages/About';


function pageReducer(
    state = {
    }, action
) {

// I think I need to impliment action.type, because that's actually what the reducer is for
// function switchPage() {
    switch (action.type) {
        case "welcome":

            return <Welcome />
        
        case "game":

            return <Game />

        case "leaderboard":
               
            return <Leaderboard />
        
        case "about":
             
            return <About />
    

        default:

            return state;
        }
    }

    // return(
    //     <div>
    //     <nav>
    //         <button onClick={() => setPage("welcome")}>Welcome</button>
    //         <button onClick={() => setPage("game")}>Let's Play!</button>
    //         <button onClick={() => setPage("leaderboard")}>View Leaderboard</button>
    //         <button onClick={() => setPage("about")}>About</button>
    //     </nav>
    //     <div>
    //         {switchPage()}
    //     </div>
    // </div>
    // )
// }

export default pageReducer