import React, { useState } from 'react'
import { useSelector } from 'react-redux'
// import { submitGame } from '../Actions/index'
import Villain from '../Player/Villain/Villain'
import Card from '../Player/Card/Card'
import RoundOne from '../Rounds/RoundOne'


function Game() {

    const state = useSelector((state) => state)
    
    const [user, setUser] = useState(state.user)
    console.log(state.user)

    function submitGame() {
        // debugger
        fetch("http:///127.0.0.1:3001/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(state.user),
        })
        .then(resp => resp.json())
        .then(data => console.log(data))
        setUser("")
    }

    //case action statement about which round


    return (
        <div>
            Here's where the game will go! Woooo! <br></br>
        {RoundOne}
            <button onClick={submitGame}>Submit Score!</button>
        </div>
    )
} 

export default Game;