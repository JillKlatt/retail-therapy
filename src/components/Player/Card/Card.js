import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeRound } from '../../Actions/index'
import './Card.css'

function Card(props) {

    const state = useSelector((state) => state)
    const round = state.round

    const dispatch = useDispatch()
  
    const changeRoundAC = bindActionCreators(changeRound, dispatch)

    const renderOutcome = () => {
        alert(props.outcome)
        changeRoundAC()
        }


    return(
        <div >
            <div className='card-container'>
            {props.choice}
            </div>
            <button onClick={renderOutcome}>{props.buttonChoice}</button>
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