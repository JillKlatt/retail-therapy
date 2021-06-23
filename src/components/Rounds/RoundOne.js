import Villain from '../Player/Villain/Villain'
import Card from '../Player/Card/Card'

//somewhere inside here, change round to two!

function RoundOne(props) {

    return (
    <div>    
    <Villain name={"Villain Number One!"}/>
    <Card choice={"This is too scary!"} buttonChoice={"Run Away!"} outcome={"You Ran Away!"} setCurrentRound={props.setCurrentRound}/> 
    <Card choice={"You can take em!"} buttonChoice={"Fight!"} outcome={"Stay And Fight!"} setCurrentRound={props.setCurrentRound}/>
    </div>
    )
}

export default RoundOne