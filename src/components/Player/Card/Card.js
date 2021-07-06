import { useDispatch } from 'react-redux'
import { addPoint, changeRound, changeHP } from '../../Actions/index'
import './Card.css'

function Card(props) {

    const dispatch = useDispatch()

    const renderOutcome = () => {
        alert(props.outcome)
        dispatch(changeRound())
            if (props.answer === 'correct'){ dispatch(addPoint())}
            if (props.hp !== undefined){ dispatch(changeHP(props.hp))}
        }

    return(

        <div >
            <div className='card-container background'>
                <div className='column'>
                <div className='card-content'>
                    <p>{props.choice}</p>
                </div>
                <div className='btn'>
                    <button onClick={renderOutcome}>{props.buttonChoice}</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Card

// class Card extends React.Component {


//     constructor(props){
//         super(props);
//         this.choice = props.choice
//         this.outcome = props.outcome
//         this.setRound = props.setCurrentRound
//     }

//     // function changeRound() {
//     //     console.log(this.props)
//     //     this.props.setRound("2")
//     // }


//     renderOutcome = () => {
//         // debugger
//         alert(this.outcome)
//         this.setRound(1)
//         }

//     render(){
//         return(
//             <div>
//                 <button onClick={this.renderOutcome}>{this.choice}</button>
//             </div>

//         )
//     }

// }

// export default Card