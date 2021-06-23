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
                <div className='villain-title'>
                    {this.name}
                </div>
                <div className='villian-body'>
                    {this.description}
                </div>
            </div>
        )
    }

}

export default Villain