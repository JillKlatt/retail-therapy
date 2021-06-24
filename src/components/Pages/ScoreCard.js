import { useSelector } from 'react-redux';
import './Page.css'

function ScoreCard() {
    const state = useSelector((state) => state)

    function renderUser() {
        return `Current User: ${state.user.username}`
    }

    function renderPoints() {
        if (state.user.points > 0){
        return `Current Points: ${state.user.points}`
        }
    }

    return(
        <div className='scorecard'>
            <div>
                {renderUser()}
            </div>
            <div>
                {renderPoints()}
            </div>
        </div>
    )
}

export default ScoreCard