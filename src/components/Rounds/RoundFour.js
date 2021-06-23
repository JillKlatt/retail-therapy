import Villain from '../Player/Villain/Villain'
import Card from '../Player/Card/Card'
import './Round.css'



function RoundFour(props) {

    return (
        <div className='round'>    
            <div className='villain'>
                <Villain name={"Villain Number Four!"} description={"V Scary"}/>
            </div>
            <div className='card-row'>
            <Card answer={"incorrect"} choice={"Wrong Answer: Test One"} buttonChoice={"Run Away!"} outcome={"You Ran Away!"} setCurrentRound={props.setCurrentRound}/> 
            <Card answer={"correct"} choice={"This is the right answer: Test One"} buttonChoice={"Fight!"} outcome={"Stay And Fight!"} setCurrentRound={props.setCurrentRound}/>
            </div>
        </div>
        )
}

export default RoundFour