import Villain from '../Player/Villain/Villain'
import Card from '../Player/Card/Card'



function RoundZero(props) {

    function finishGame() {
        props.submitGame()
    }

    return (
    <div>    
    <Villain name={"Here is where our story begins! There will be backstory and info and wooooo"}/>
    <button onClick={finishGame}> The Game is Over! Click here to submit your score!</button>
    </div>
    )
}

export default RoundZero