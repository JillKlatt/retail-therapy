import { useState } from 'react' 
import '../App.css'
import styled from 'styled-components'

function UsernameInput(props) {

    const [username, setUsername] = useState("")

    const onChange = e => {
        setUsername(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.createUserAC(username)
        setUsername("")
        props.setInput(true)
    }

    // const Input = styled.input`
    //     padding: 0.5em;
    //     margin: 0.5em;
    //     background: papayawhip;
    //     border: none;
    //     border-radius: 3px;
    // `;

    // const FeatureButton = styled.button`
    //     background: transparent;
    //     font-family:Verdana, Geneva, Tahoma, sans-serif;
    //     border-radius: 3px;
    //     border: 2px solid black;
    //     color: blue;
    //     margin: 0 1em;
    //     padding: 0.25em 1em;
    //     &:hover{
    //         color: red;

    //     }
    // `;


    return (
        <div>
            <input name="username" type='text' value={username} onChange={onChange}/>
            <input onClick={handleSubmit} type="submit" value="Send to HR"></input>
        </div>
    )

}

export default UsernameInput

