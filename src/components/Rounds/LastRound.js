import Villain from '../Player/Villain/Villain'
import { Link } from "react-router-dom";

function LastRound(props) {

    function finishGame() {
        props.submitGame()
    }


    return (
    <div>    
    <Villain name={"End of the Line Buddy!"}/>
    <Link onClick={finishGame} to='/leaderboard'> The Game is Over! Click here to submit your score!</Link>
    </div>
    )
}

export default LastRound