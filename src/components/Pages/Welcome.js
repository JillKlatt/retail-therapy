import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createUser, getLeaders} from '../Actions/index';
import Form from '../Form'

function Welcome(props) {

    const dispatch = useDispatch()
    const createUserAC = bindActionCreators(createUser, dispatch)

    const [input, setInput] = useState(false)

    function getUserInput() {
        if (!input)
        return <Form createUserAC={createUserAC} setInput={setInput}/> 
      }

    return (
        <div>
        Welcome to this game! Here's where a fun card will go!<br></br>
        Enter Your Name To Begin: {getUserInput()}
        </div>
    )
} 

export default Welcome;