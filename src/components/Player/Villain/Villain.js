import React from 'react';
import './Villain.css'

class Villain extends React.Component {

    constructor(props){
        super(props);
        this.name = props.name
        this.description = props.description
    }

    render(){
        return(
            <div className='villain-container'>
                <div className='villain-content'>
                    <div className='villain-title'>
                        <h3>{this.name}</h3>
                    </div>
                    <div className='villain-body'>
                        <p>{this.description}</p>
                    </div>
                </div>
            </div>
        )
    }

}

export default Villain