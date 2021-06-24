import Villain from '../Player/Villain/Villain'

function LastRound(props) {

    function finishGame() {
        props.submitGame()
    }

    return (
    <div>    
    <Villain name={props.villains.name} description={props.villains.description}/>
    <button onClick={finishGame}> The Game is Over! Click here to submit your score!</button>
    </div>
    )
}

export default LastRound