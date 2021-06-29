import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import Round from '../Rounds/Round'
import RoundZero from '../Rounds/RoundZero'
import LastRound from '../Rounds/LastRound'
import { villainArray } from '../Rounds/villainArray'
import { rightCardArray, leftCardArray } from '../Rounds/cardArray'

import {resetPoints, resetRound, addLeader } from '../Actions/index'





function Game() {

    const dispatch = useDispatch()

    const resetRoundAC = bindActionCreators(resetRound, dispatch)

    const resetPointsAC = bindActionCreators(resetPoints, dispatch)

    const addLeaderAC = bindActionCreators(addLeader, dispatch)

    const state = useSelector((state) => state)

    let round = useSelector((state) => state.round.round)

    const [currentRound, setCurrentRound] = useState(round)

    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(prev => !prev)
    }

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
        addLeaderAC(state.user)
    }


    function renderRound() {
        if (round === 0){
            return <RoundZero setCurrentRound={setCurrentRound}/>
        }
        for (let i= (round - 1); i < villainArray.length; i++)
            return (
            <Round villains={villainArray[i]} rightCard={rightCardArray[i]} leftCard={leftCardArray[i]} openModal={openModal} setCurrentRound={setCurrentRound}/>
        )
        if (round === (villainArray.length + 1)){
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