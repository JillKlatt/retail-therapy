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
            <Card answer={"incorrect"} choice={"These are both wrong!"} buttonChoice={"Run Away!"} outcome={"You Ran Away!"} setCurrentRound={props.setCurrentRound}/> 
            <Card answer={"incorrect"} choice={"These are both wrong!"} buttonChoice={"Fight!"} outcome={"Stay And Fight!"} setCurrentRound={props.setCurrentRound}/>
            </div>
        </div>
        )
}

export default RoundFour