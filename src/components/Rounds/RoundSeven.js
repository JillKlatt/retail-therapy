import Villain from '../Player/Villain/Villain'
import Card from '../Player/Card/Card'
import './Round.css'



function RoundSeven(props) {

    return (
        <div className='round'>    
            <div className='villain'>
                <Villain name={"Villain Number Seven!"} description={"V Scary"}/>
            </div>
            <div className='card-row'>
            <Card answer={"incorrect"} choice={"Wrong Answer"} buttonChoice={"Run Away!"} outcome={"You Ran Away!"} setCurrentRound={props.setCurrentRound}/> 
            <Card answer={"correct"} choice={"This is the right answer"} buttonChoice={"Fight!"} outcome={"Stay And Fight!"} setCurrentRound={props.setCurrentRound}/>
            </div>
        </div>
        )
}

export default RoundSeven