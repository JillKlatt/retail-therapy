import Villain from '../Player/Villain/Villain'
import Card from '../Player/Card/Card'
import './Round.css'



function RoundThree(props) {

    return (
        <div className='round'>    
            <div className='villain'>
                <Villain name={"Villain Number Three!"} description={"V Scary"}/>
            </div>
            <div className='card-row'>
            <Card answer={"correct"} choice={"These are both right!"} buttonChoice={"Run Away!"} outcome={"You Ran Away!"} setCurrentRound={props.setCurrentRound}/> 
            <Card answer={"correct"} choice={"These are both right!"} buttonChoice={"Fight!"} outcome={"Stay And Fight!"} setCurrentRound={props.setCurrentRound}/>
            </div>
        </div>
        )
}

export default RoundThree