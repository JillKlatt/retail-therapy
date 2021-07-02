import Villain from '../Player/Villain/Villain'
import { Link } from "react-router-dom";

function LastRound(props) {

    function finishGame() {
        props.submitGame()
    }

    function reset() {
        props.playAgain()
    }


    return (
    <div>    
    <Villain name={"You freed your manager but more importantly, saved the world!"}/>
    <Link onClick={finishGame} to='/leaderboard'>Click here to submit your score!</Link>
    <br></br><br></br>
    <button onClick={reset}>Think you can do better? Click here to start over</button>
    </div>
    )
}

export default LastRound