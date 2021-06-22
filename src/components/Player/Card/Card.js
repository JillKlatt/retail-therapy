import React from 'react';
// import { Modal } from '@material-ui/core/Modal';
// import SimpleModal from '../Modal'

class Card extends React.Component {


    constructor(props){
        super(props);
        this.choice = props.choice
        this.outcome = props.outcome
        this.setRound = props.changeRound
    }

    // function changeRound() {
    //     console.log(this.props)
    //     this.props.setRound("2")
    // }


    renderOutcome = () => {
        // debugger
        alert(this.outcome)
        this.setRound("2")
        }

    render(){
        return(
            <div>
                <button onClick={this.renderOutcome}>{this.choice}</button>
            </div>

        )
    }

}

export default Card