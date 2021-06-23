import Villain from '../Player/Villain/Villain'
import Card from '../Player/Card/Card'



function RoundThree(props) {

    return (
    <div>    
    <Villain name={"Villain Number Three!"} description={"V Scary"}/>
    <Card choice={"This is too scary!"} buttonChoice={"Run Away!"} outcome={"You Ran Away!"} setCurrentRound={props.setCurrentRound}/> 
    <Card choice={"You can take em!"} buttonChoice={"Fight!"} outcome={"Stay And Fight!"} setCurrentRound={props.setCurrentRound}/>
    </div>
    )
}

export default RoundThree