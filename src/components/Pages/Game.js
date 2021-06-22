import React, { useState } from 'react'
import { useSelector } from 'react-redux'
// import { submitGame } from '../Actions/index'
import Villain from '../Player/Villain/Villain'
import Card from '../Player/Card/Card'
import RoundOne from '../Rounds/RoundOne'
import RoundTwo from '../Rounds/RoundTwo'



function Game() {

    const state = useSelector((state) => state)
    
    const [user, setUser] = useState(state.user)

    const [round, setRound] = useState("1")

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

    function renderRounds() {
        switch(round){
            case "1":                
                console.log(round)
                return <RoundOne setRound={setRound}/>


            case "2":
                console.log(round)
                return <RoundTwo setRound={setRound}/>

            default:
                return "<Welcome />"
        }
    }

    return (
        <div>
            For right now, the game will not hold your place, so don't click away after you've started!
            <br></br>
            {renderRounds()}
            <br></br>
            <button onClick={submitGame}>Submit Score!</button>
        </div>
    )
} 

export default Game;