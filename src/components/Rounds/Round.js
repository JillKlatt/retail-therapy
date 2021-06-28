import Villain from '../Player/Villain/Villain'
import Card from '../Player/Card/Card'
import './Round.css'
import { Modal } from '../Player/Card/Modal';
import { useState } from 'react'



function Round(props) {

    return (
    <div className='round'>    
        <div className='villain'>
            <Villain name={props.villains.name} description={props.villains.description}/>

        </div>
        <div className='card-row'>
            <Card openModal={props.openModal} answer={props.rightCard.answer} choice={props.rightCard.choice} buttonChoice={props.rightCard.buttonChoice} outcome={props.rightCard.outcome} />
            <Card openModal={props.openModal} answer={props.leftCard.answer} choice={props.leftCard.choice} buttonChoice={props.leftCard.buttonChoice} outcome={props.leftCard.outcome} />
        </div>
    </div>
    )
}

export default Round