import React from 'react';
import {
    Switch,
    Route,
    Link
  } from "react-router-dom";

import { useSelector } from 'react-redux';
import Leaderboard from './Leaderboard';
import Game from './Game';
import About from './About';
import Welcome from './Header';
import ScoreCard from './ScoreCard'
import './Page.css'

function NavBar(){

    //const [page, setPage] = useState("welcome")
    // const state = useSelector((state) => state)


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
        {/* <div>
        Current User: {state.user.username} <br></br>
        Current Points: {state.user.points}<br></br><br></br>
        </div> */}
        </div>
    )

   }


export default NavBar