import { useDispatch } from 'react-redux'
import './Card.css'
import ChoiceModal from '../../Modal/ChoiceModal'

function Card(props) {

    const dispatch = useDispatch()

    return(

        <div >
            <div className='card-container background'>
                <div className='column'>
                <div className='card-content'>
                    <p>{props.choice}</p>
                </div>
                <div className='btn'>
                    <ChoiceModal hp={props.hp} answer={props.answer} inventory={props.inventory} outcome={props.outcome} buttonChoice={props.buttonChoice} />
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