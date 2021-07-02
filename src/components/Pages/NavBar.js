import React from 'react';
import { NavLink } from "react-router-dom";

import ScoreCard from './ScoreCard'
import './Page.css'

function NavBar(){

    return(
        <div>
        <div id='nav-bar' className='navbar'>
            <NavLink to='/game' activeStyle={{fontWeight: "bold"}} id='game'>Let's Play</NavLink>
            <NavLink to='/leaderboard' activeStyle={{fontWeight: "bold"}} id='leaderboard'>Leaderboard</NavLink>
            <NavLink to='/about'  activeStyle={{fontWeight: "bold"}} id='about'>About</NavLink>
        </div>
            <ScoreCard />
        </div>
    )
   }


export default NavBar