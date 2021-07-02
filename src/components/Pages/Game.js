import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import Round from '../Rounds/Round'
import RoundZero from '../Rounds/RoundZero'
import LastRound from '../Rounds/LastRound'
import { villainArray } from '../Rounds/villainArray'
import { rightCardArray, leftCardArray } from '../Rounds/cardArray'

import {resetPoints, resetRound, resetHealth, addLeader } from '../Actions/index'


function Game() {

    const dispatch = useDispatch()

    // Binds the action to dispatch (same as doing dispatch(resetRound()) )
    const resetRoundAC = bindActionCreators(resetRound, dispatch)
    const resetPointsAC = bindActionCreators(resetPoints, dispatch)
    const resetHealthAC = bindActionCreators(resetHealth, dispatch)
    const addLeaderAC = bindActionCreators(addLeader, dispatch)

    const state = useSelector((state) => state)

    let round = useSelector((state) => state.round.round)

    const [currentRound, setCurrentRound] = useState(round)

    function submitGame() {
        fetch("http:///127.0.0.1:3001/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(state.user),
        })
        .then(resp => resp.json())
        .then(data => (data))
        finalizeGame()
    }

    const resetGame = () => {
        resetRoundAC()
        resetPointsAC()
        resetHealthAC()
    }

    const finalizeGame = () => {
        resetGame()
        addLeaderAC(state.user)
    }


    function renderRound() {
        if (round === 0){
            return <RoundZero setCurrentRound={setCurrentRound}/>
        }
        for (let i = (round - 1); i < villainArray.length; i++)
            return (
            <Round villains={villainArray[i]} rightCard={rightCardArray[i]} leftCard={leftCardArray[i]} setCurrentRound={setCurrentRound}/>
        )
        if (round === (villainArray.length + 1)){
            return <LastRound submitGame={submitGame} playAgain={resetGame}/>
        }
    }

    return (
        <div>
            <br></br>
            {renderRound()}
        </div>
    )
} 

export default Game;