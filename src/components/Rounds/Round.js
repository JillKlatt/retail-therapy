import Villain from '../Player/Villain/Villain'
import Card from '../Player/Card/Card'
import './Round.css'



const Round = ({villains, rightCard, leftCard}) => {
    console.log(rightCard)

    const {answer, btn, choice, hp, outcome} = rightCard
    console.log(answer)

    const {name, description} = villains

    return (
    <div className='round'>    
        <div className='villain'>
            <Villain name={name} description={description}/>

        </div>
        <div className='card-row'>
            <Card hp={rightCard.hp} answer={rightCard.answer} choice={rightCard.choice} buttonChoice={rightCard.buttonChoice} outcome={rightCard.outcome} />
            <Card hp={leftCard.hp} answer={leftCard.answer} choice={leftCard.choice} buttonChoice={leftCard.buttonChoice} outcome={leftCard.outcome} />
        </div>
    </div>
    )
}

export default Round