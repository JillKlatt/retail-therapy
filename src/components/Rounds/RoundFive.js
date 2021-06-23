import Villain from '../Player/Villain/Villain'
import Card from '../Player/Card/Card'



function RoundFive(props) {

    return (
    <div>    
    <Villain name={"Villain Number Five!"}/>
    <Card choice={"Run Away!"} outcome={"You Ran Away!"} setCurrentRound={props.setCurrentRound}/> 
    <Card choice={"Fight!"} outcome={"Stay And Fight!"} setCurrentRound={props.setCurrentRound}/>
    </div>
    )
}

export default RoundFive