import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import Round from '../Rounds/Round'
import LastRound from '../Rounds/LastRound'
import { villainArray } from '../Rounds/villainArray'
import { cardArray } from '../Rounds/cardArray'

import {resetPoints, resetRound } from '../Actions/index'





function Game() {

    const dispatch = useDispatch()

    const resetRoundAC = bindActionCreators(resetRound, dispatch)

    const resetPointsAC = bindActionCreators(resetPoints, dispatch)

    const state = useSelector((state) => state)

    let round = useSelector((state) => state.round.round)

    const [currentRound, setCurrentRound] = useState(round)

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
        resetGame()
    }

    const resetGame = () => {
        resetRoundAC()
        resetPointsAC()
    }


    function renderRound() {
        for (let i=round; i < 3; i++)
        return <Round villains={villainArray[i]} cards={cardArray[i]} setCurrentRound={setCurrentRound}/>
        if (round === (villainArray.length)){
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