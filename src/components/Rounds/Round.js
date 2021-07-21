import Villain from '../Player/Villain/Villain'
import Card from '../Player/Card/Card'
import './Round.css'

const Round = ({villains, rightCard, leftCard}) => {

    const { answer, buttonChoice, choice, hp, outcome, inventory } = rightCard
    const { lAnswer, lButtonChoice, lChoice, lHp, lOutcome, lInventory } = leftCard
    const { name, description } = villains


    return (
    <div className='round'>    
        <div className='villain'>
            <Villain name={name} description={description}/>

        </div>
        <div className='card-row'>
            <Card hp={hp} answer={answer} choice={choice} buttonChoice={buttonChoice} outcome={outcome} inventory={inventory}/>
            <Card hp={lHp} answer={lAnswer} choice={lChoice} buttonChoice={lButtonChoice} outcome={lOutcome} inventory={lInventory}/>
        </div>
    </div>
    )
}

export default Round