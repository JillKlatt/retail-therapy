import Villain from '../Player/Villain/Villain'
import Card from '../Player/Card/Card'
import './Round.css'



function RoundFive(props) {

    return (
        <div className='round'>    
            <div className='villain'>
                <Villain name={"Villain Number Five!"} description={"V Scary"}/>
            </div>
            <div className='card-row'>
                <Card choice={"This is too scary!"} buttonChoice={"Run Away!"} outcome={"You Ran Away!"} setCurrentRound={props.setCurrentRound}/> 
                <Card choice={"You can take em!"} buttonChoice={"Fight!"} outcome={"Stay And Fight!"} setCurrentRound={props.setCurrentRound}/>
            </div>
        </div>
        )
}

export default RoundFive