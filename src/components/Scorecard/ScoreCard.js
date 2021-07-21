import { useSelector } from 'react-redux';
import '../Pages/Page.css'
import Inventory from './Inventory'

function ScoreCard() {
    const state = useSelector((state) => state)

    function renderUser() {
        return `Employee Name: ${state.user.username}`
    }

    function renderPoints() {
        if (state.user.points > 0){
        return `Points: ${state.user.points}`
        }
    }

    function renderHealth() {
        if (state.round.round > 0){
        return `Health: ${state.user.health}`
        }
    }

    return(
        <div className='scorecard'>

            <div className='name-badge'>
                {renderUser()}
            </div>
            <div className='points-badge'>
                <span>{renderPoints()}</span>   <span>{renderHealth()}</span>
            </div>
            <Inventory />
        </div>
    )
}

export default ScoreCard
