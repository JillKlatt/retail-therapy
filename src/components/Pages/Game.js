import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import RoundZero from '../Rounds/RoundZero'
import RoundOne from '../Rounds/RoundOne'
import RoundTwo from '../Rounds/RoundTwo'
import RoundThree from '../Rounds/RoundThree'
import RoundFour from '../Rounds/RoundFour'
import RoundFive from '../Rounds/RoundFive'
import RoundSix from '../Rounds/RoundSix'
import RoundSeven from '../Rounds/RoundSeven'



function Game() {

    const state = useSelector((state) => state)
    
    const [user, setUser] = useState(state.user)

    const round = useSelector((state) => state.round.round)

    const [currentRound, setCurrentRound] = useState(round)

    console.log(round)

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
    //Will change round to start at one after adding a "Begin" button

    function renderRounds() {
        switch(round){
            case 0:
                console.log(round)
                return <RoundZero setCurrentRound={setCurrentRound}/>

            case 1:                
                console.log(round)
                return <RoundOne setCurrentRound={setCurrentRound}/>

            case 2:
                console.log(round)
                return <RoundTwo setCurrentRound={setCurrentRound}/>

            case 3:
                console.log(round)
                return <RoundThree setCurrentRound={setCurrentRound}/>

            case 4:
                console.log(round)
                return <RoundFour setCurrentRound={setCurrentRound}/>

            case 5:
                console.log(round)
                return <RoundFive setCurrentRound={setCurrentRound}/>

            case 6:
                console.log(round)
                return <RoundSix setCurrentRound={setCurrentRound}/>
            
            case 7:
                console.log(round)
                return <RoundSeven setCurrentRound={setCurrentRound}/>

            default:
                return `Something's wrong, round is currently: ${round}`
        }
    }

    return (
        <div>
            For right now, the game will not hold your place, so don't click away after you've started!
            <br></br>
            {renderRounds()}
            <br></br>
            <button onClick={submitGame}> Finish Game & Submit Score!</button>
        </div>
    )
} 

export default Game;