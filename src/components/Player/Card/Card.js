import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addPoint, changeRound } from '../../Actions/index'
import './Card.css'

function Card(props) {

    const state = useSelector((state) => state)
    const round = state.round

    const dispatch = useDispatch()
  
    const changeRoundAC = bindActionCreators(changeRound, dispatch)

    const addPointAC = bindActionCreators(addPoint, dispatch)

    const renderOutcome = () => {
        alert(props.outcome)
        changeRoundAC()
            if (props.answer === 'correct'){ addPointAC()}
        }


    return(

        <div >
            {/* <div className='row'> */}

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