import { useDispatch } from 'react-redux'
import './Card.css'
import ChoiceModal from '../../Modal/ChoiceModal'

function Card({choice, hp, answer, inventory, outcome, buttonChoice}) {

    const dispatch = useDispatch()

    return(

        <div >
            <div className='card-container background'>
                <div className='column'>
                <div className='card-content'>
                    <p>{choice}</p>
                </div>
                <div className='btn'>
                    <ChoiceModal hp={hp} answer={answer} inventory={inventory} outcome={outcome} buttonChoice={buttonChoice} />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Card
