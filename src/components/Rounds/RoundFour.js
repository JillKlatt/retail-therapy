import Villain from '../Player/Villain/Villain'
import Card from '../Player/Card/Card'



function RoundFour(props) {

    return (
    <div>    
    <Villain name={"Villain Number Four!"}/>
    <Card choice={"Run Away!"} outcome={"You Ran Away!"} setCurrentRound={props.setCurrentRound}/> 
    <Card choice={"Fight!"} outcome={"Stay And Fight!"} setCurrentRound={props.setCurrentRound}/>
    </div>
    )
}

export default RoundFour