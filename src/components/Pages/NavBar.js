import React from 'react';
import { Link } from "react-router-dom";

import ScoreCard from './ScoreCard'
import './Page.css'
import { Navbar, NavbarLink } from 'styled-navbar-component';
import { Nav } from 'styled-nav-component';

function NavBar(){

    return(
        <div>
        {/* <Navbar expandXL> */}
        <Nav start>
        <div id='nav-bar' className='navbar'>
            <Link to='/game'>
                <NavbarLink id='game'>Let's Play</NavbarLink>
            </Link>
            <Link to='/leaderboard'>
                <NavbarLink light id='leaderboard'>Leaderboard</NavbarLink>
            </Link>
            <Link to='/about'>
                <NavbarLink light id='about'>About</NavbarLink>
            </Link>
   </div>
            </Nav>

        {/* </Navbar> */}
            <ScoreCard />
        </div>
    )

   }


export default NavBar