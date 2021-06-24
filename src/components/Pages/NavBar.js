import React from 'react';
import { Link } from "react-router-dom";

import ScoreCard from './ScoreCard'
import './Page.css'

function NavBar(){

    return(
        <div>
        <div id='nav-bar' className='navbar'>
            <Link to='/game'>
                <h2 id='game'>Let's Play</h2>
            </Link>
            <Link to='/leaderboard'>
                <h2 id='leaderboard'>Leaderboard</h2>
            </Link>
            <Link to='/about'>
                <h2 id='about'>About</h2>
            </Link>
        </div>
            <ScoreCard />
        </div>
    )

   }


export default NavBar