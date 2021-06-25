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
            <div>
                {renderPoints()}
            </div>
        </div>
    )
}

export default ScoreCard