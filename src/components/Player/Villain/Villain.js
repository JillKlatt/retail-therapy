import React from 'react';
import './Villain.css'

function Villain({name, description}) {

    return (
        <div className='villain-container'>
            <div className='villain-content'>
                <div className='villain-title'>
                    <h3>{name}</h3>
                </div>
                <div className='villain-body'>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )

}

export default Villain