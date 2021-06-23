import Villain from '../Player/Villain/Villain'
import Card from '../Player/Card/Card'

//somewhere inside here, change round to two!

const RoundTwo = (props) => {

    return (
    <div>    
    <Villain name={"You Made it to Villain Number Two!"} description={"V Scary"}/>
    <Card choice={"This is too scary!"} buttonChoice={"Run Away!"} outcome={"You Ran Away!"} setCurrentRound={props.setCurrentRound}/> 
    <Card choice={"You can take em!"} buttonChoice={"Fight!"} outcome={"Stay And Fight!"} setCurrentRound={props.setCurrentRound}/>
    </div>
    )
}

export default RoundTwo