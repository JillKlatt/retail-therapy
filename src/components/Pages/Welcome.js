import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createUser} from '../Actions/index';
import Form from '../Form'

function Welcome() {

    const dispatch = useDispatch()

    const createUserAC = bindActionCreators(createUser, dispatch)

    const [input, setInput] = useState(false)

    function getUserInput() {

        if (!input)
        return <Form createUserAC={createUserAC} setInput={setInput}/> 
    }

    return (
        <div>
            <h2>Welcome to your first day at this Unnamed Discount Grocery Store!</h2>
            <p>We're happy to have you aboard our team, remind us of your name?</p>
        <br />
        {getUserInput()}
        </div>
    )
} 

export default Welcome;