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

    return (
        <div>
            <input name="username" type='text' value={username} onChange={onChange}/>
            <input onClick={handleSubmit} type="submit" value="Send to HR"></input>
        </div>
    )

}

export default UsernameInput

