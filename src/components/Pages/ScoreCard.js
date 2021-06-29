import { useSelector } from 'react-redux';
import './Page.css'

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

    function renderNameBadge() {
        return (
        <div>
        <h1 className='name-badge-title'>Hello</h1>
        <p className='name-badge-copy'>My Name Is</p>
        </div>
        )
    }

    return(
        <div className='scorecard'>
            {/* <section className='name-badge' cid='outer'>
            <div>
                {renderNameBadge()}
            </div>
            <canvas className='name-badge-canvas' id='canvas'></canvas>
            </section> */}
            <div className='name-badge'>
                {renderUser()}
            </div>
            <div className='points-badge'>
                <span>{renderPoints()}</span><span>{renderHealth()}</span>
            </div>
        </div>
    )
}

export default ScoreCard