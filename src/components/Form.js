import { useState } from 'react' 
import '../App.css'

function UsernameInput(props) {

    const [username, setUsername] = useState("")

    const onChange = e => {
        setUsername(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        
        if (username === ""){ alert("The glory of victory means nothing if you're not recognized! Your name cannot be blank!")}
        else {props.createUserAC(username)
        setUsername("")
        props.setInput(true)
        }
    }

    return (
        <div>
            <input name="username" type='text' value={username} onChange={onChange}/>
            <input onClick={handleSubmit} type="submit" value="Send to HR"></input>
        </div>
    )

}

export default UsernameInput

