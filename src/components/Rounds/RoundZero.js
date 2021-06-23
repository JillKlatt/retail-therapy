import Villain from '../Player/Villain/Villain'
import Card from '../Player/Card/Card'
import './Round.css'



function RoundZero(props) {

    return (
    <div>    
    <Card choice={"Here is where our story begins! There will be backstory and info and wooooo"} buttonChoice={"Begin Game!"} outcome={"Here We Go!"} setCurrentRound={props.setCurrentRound}/> 
    </div>
    )
}

export default RoundZero