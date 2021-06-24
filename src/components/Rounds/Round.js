import Villain from '../Player/Villain/Villain'
import Card from '../Player/Card/Card'
import './Round.css'



function Round(props) {

    console.log(props)

    return (
    <div className='round'>    
        <div className='villain'>
            <Villain name={props.villains.name} description={props.villains.description}/>

        </div>
        <div className='card-row'>
            <Card answer={props.cards.answer} choice={props.cards.choice} buttonChoice={props.cards.buttonChoice} outcome={props.cards.outcome} />
        </div>
    </div>
    )
}

export default Round