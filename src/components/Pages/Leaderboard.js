import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'


function Leaderboard(props) {

    // useEffect(() => {
    //     props.getLeaders()}, []
    // )

    let leaders = useSelector((state) => state.leaders.leaders)
    console.log(`Leaders: ${leaders}`)

    function renderLeaders(){
      
        return (leaders.map((leader, index) => <li key={index}>{leader.username} - {leader.points}</li>)
       )
    }


    return(
        <div>
            <ol>
            {renderLeaders()}
            </ol>
        </div>
    )

} 

export default Leaderboard;

    // ## Currently storing leaders in store, can store locally: 

    // function renderLeaders() {
    //     props.getLeaders()}
    // }
    // const [leaders, setLeaders] = useState([])

    // useEffect(() => {
    //     fetch("http:///127.0.0.1:3001/users")
    //     .then(resp => resp.json())
    //     .then(data => {
 
    //         setLeaders(data)
    //     }) }, [])

    // return (
    //     <div>
    //         Leaderboard!
    //         <ol>
    //             {renderLeaders()}
    //         </ol>
    //     </div>
    // )