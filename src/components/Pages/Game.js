import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import Round from '../Rounds/Round'
import LastRound from '../Rounds/LastRound'
import { villainArray } from '../Rounds/villainArray'
import { cardArray } from '../Rounds/cardArray'





function Game() {

    const state = useSelector((state) => state)

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
        .then(data => {
            alert(data)})
        // setUser("")
    }


    function renderRound() {
        for (let i=round; i < 3; i++)
        return <Round villains={villainArray[i]} cards={cardArray[i]} setCurrentRound={setCurrentRound}/>
        if (round === 4){
            return <LastRound submitGame={submitGame}/>
        }
    }

    return (
        <div>
            <br></br>
            {renderRound()}
            <br></br>
            {/* <button onClick={submitGame}> Finish Game & Submit Score!</button> */}
        </div>
    )
} 

export default Game;