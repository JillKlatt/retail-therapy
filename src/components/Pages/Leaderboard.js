import React, { useState, useEffect } from 'react'
// import { getLeaders } from '../Actions/index'
// import manageLeaders from '../Reducers/manageLeaders.js'
// import { bindActionCreators } from 'redux'
// // import { getLeaders } from './components/Actions/index'
// import { useSelector, useDispatch } from 'react-redux'

function Leaderboard() {

    const [leaders, setLeaders] = useState([])

    useEffect(() => {
        fetch("http:///127.0.0.1:3001/users")
        .then(resp => resp.json())
        .then(data => {
 
            setLeaders(data)
        }) }, [])

    function renderLeaders(){
        // Move to backend
        // const sortedLeaders = leaders.sort((a, b) => (a.points < b.points) ? 1 : -1)
        
        return (leaders.map((leader, index) => <li key={index}>{leader.username} - {leader.points}</li>)
        )}

    return (
        <div>
            Leaderboard!
            <ol>
                {renderLeaders()}
            </ol>
        </div>
    )
} 

export default Leaderboard;

// console.log()
    // const dispatch = useDispatch()
    // const loadLeaders = bindActionCreators(getLeaders, dispatch)

    // console.log(loadLeaders())
    // const leaders = manageLeaders()
    // console.log(leaders)


    // function loadLeaders() {
    //     const leaders = manageLeaders("GET_LEADERS")
        // debugger
        // const leaders = getLeaders()
        // console.log(leaders)
        // const leaders = manageLeaders(dispatch)
        // debugger
        // leaders.map(<li>{u => u.username}</li>)
    // }