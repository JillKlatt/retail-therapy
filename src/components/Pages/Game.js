import React from 'react'
import { useSelector } from 'react-redux'
// import { submitGame } from '../Actions/index'


function Game() {


    const state = useSelector((state) => state)
    console.log(state.user)

    function submitGame() {
        debugger
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

    }
    // function finishGame() {
    //     submitGame()
    // }


    return (
        <div>
            Here's where the game will go! Woooo! <br></br>
            <button onClick={submitGame}>Submit Score!</button>
        </div>
    )
} 

export default Game;