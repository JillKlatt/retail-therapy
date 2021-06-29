import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addPoint, changeRound } from '../../Actions/index'
import { Modal } from './Modal';
import './Card.css'

// const Button = styled.button`
//   min-width: 100px;
//   padding: 16px 32px;
//   border-radius: 4px;
//   border: none;
//   background: #141414;
//   color: #fff;
//   font-size: 24px;
//   cursor: pointer;
// `

function Card(props) {
    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(prev => !prev)
    }

    const dispatch = useDispatch()
  
    const changeRoundAC = bindActionCreators(changeRound, dispatch)

    const addPointAC = bindActionCreators(addPoint, dispatch)

    const renderOutcome = () => {
        alert(props.outcome)
        // openModal()
        changeRoundAC()
            if (props.answer === 'correct'){ addPointAC()}
        }

    return(

        <div >
            <Modal outcome={props.outcome} showModal={showModal} setShowModal={setShowModal} /> 
            <div className='card-container'>
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