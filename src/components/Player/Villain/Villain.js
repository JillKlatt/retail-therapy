import React from 'react';
import './Villain.css'

function Villain(props) {

    return (
        <div className='villain-container'>
            <div className='villain-content'>
                <div className='villain-title'>
                    <h3>{props.name}</h3>
                </div>
                <div className='villain-body'>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    )

}

export default Villain