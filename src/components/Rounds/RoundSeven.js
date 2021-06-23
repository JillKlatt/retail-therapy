import Villain from '../Player/Villain/Villain'
import Card from '../Player/Card/Card'



function RoundSeven(props) {

    return (
    <div>    
    <Villain name={"Villain Number Seven!"}/>
    <Card choice={"Run Away!"} outcome={"You Ran Away!"} setCurrentRound={props.setCurrentRound}/> 
    <Card choice={"Fight!"} outcome={"Stay And Fight!"} setCurrentRound={props.setCurrentRound}/>
    </div>
    )
}

export default RoundSeven