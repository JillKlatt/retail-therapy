import React from 'react';
import { Link } from "react-router-dom";

import ScoreCard from './ScoreCard'
import './Page.css'
import { Navbar, NavbarLink } from 'styled-navbar-component';
import { Nav } from 'styled-nav-component';

function NavBar(){

    return(
        <div>
        <Navbar expandSm light>
            <Nav start>
        {/* <div id='nav-bar' className='navbar'> */}
            <Link to='/game'>
                <NavbarLink light brand id='game'>Let's Play</NavbarLink>
            </Link>
            <Link to='/leaderboard'>
                <NavbarLink light brand id='leaderboard'>Leaderboard</NavbarLink>
            </Link>
            <Link to='/about'>
                <NavbarLink light brand id='about'>About</NavbarLink>
            </Link>
            </Nav>
        {/* </div> */}        
        </Navbar>
            <ScoreCard />
        </div>
    )

   }


export default NavBar