
import Card from '../Player/Card/Card'
import './Round.css'

function RoundZero({setCurrentRound}) {

    return (
    <div>    
    <Card choice={"You find yourself transported via portal to just outside your local Discount Grocery Store. By choosing one of the provided options, navigate through the store to accomplish tasks and eventually save your friends and coworkers from the Big Boss"} buttonChoice={"Begin Game!"} outcome={"Here We Go!"} inventory={''}setCurrentRound={setCurrentRound}/> 
    </div>
    )
}

export default RoundZero