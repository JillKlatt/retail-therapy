import Villain from '../Player/Villain/Villain'
import Card from '../Player/Card/Card'



function RoundSix(props) {

    return (
    <div>    
    <Villain name={"Villain Number Six!"}/>
    <Card choice={"Run Away!"} outcome={"You Ran Away!"} setCurrentRound={props.setCurrentRound}/> 
    <Card choice={"Fight!"} outcome={"Stay And Fight!"} setCurrentRound={props.setCurrentRound}/>
    </div>
    )
}

export default RoundSix