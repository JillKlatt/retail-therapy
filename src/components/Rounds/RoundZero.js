import Villain from '../Player/Villain/Villain'
import Card from '../Player/Card/Card'



function RoundZero(props) {

    return (
    <div>    
    <Villain name={"Here is where our story begins! There will be backstory and info and wooooo"}/>
    <Card choice={"Begin Game!"} outcome={"Here We Go!"} setCurrentRound={props.setCurrentRound}/> 
    </div>
    )
}

export default RoundZero