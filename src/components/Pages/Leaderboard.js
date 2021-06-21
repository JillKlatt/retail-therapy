import React from 'react'
import { getLeaders } from '../Actions/index'
import { manageLeaders } from '../Reducers/manageLeaders'

function Leaderboard() {
    // console.log()

    function loadLeaders() {
        const leaders = getLeaders(dispatch)
        // const leaders = manageLeaders(dispatch)
        // debugger
        leaders.map(<li>{u => u.username}</li>)
    }


    return (
        <div>
            Leaderboard!
            <ul>
                {leaders}
            </ul>
        </div>
    )
} 

export default Leaderboard;