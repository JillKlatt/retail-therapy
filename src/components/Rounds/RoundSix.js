import Villain from '../Player/Villain/Villain'
import Card from '../Player/Card/Card'
import './Round.css'



function RoundSix(props) {

    return (
        <div className='round'>    
            <div className='villain'>
                <Villain name={"Villain Number Six!"} description={"V Scary"}/>
            </div>
            <div className='card-row'>
            <Card answer={"correct"} choice={"Right Answer"} buttonChoice={"Run Away!"} outcome={"You Ran Away!"} setCurrentRound={props.setCurrentRound}/> 
            <Card answer={"incorrect"} choice={"Wrong Answer"} buttonChoice={"Fight!"} outcome={"Stay And Fight!"} setCurrentRound={props.setCurrentRound}/>
            </div>
        </div>
        )
}

export default RoundSix