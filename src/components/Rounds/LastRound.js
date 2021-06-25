import Villain from '../Player/Villain/Villain'
import {Route, Link} from "react-router-dom";
import Leaderboard from '../Pages/Leaderboard';

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