
import Card from '../Player/Card/Card'
import './Round.css'

function RoundZero(props) {

    return (
    <div>    
    <Card choice={"You find yourself transported via portal to just outside your local Discount Grocery Store. By choosing one of the provided options, navigate through the store to accomplish tasks and eventually save your manager from the Big Boss"} buttonChoice={"Begin Game!"} outcome={"Here We Go!"} setCurrentRound={props.setCurrentRound}/> 
    </div>
    )
}

export default RoundZero