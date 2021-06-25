import { useState } from 'react' 

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
            <input name="username" value={username} onChange={onChange}/>
            <input onClick={handleSubmit} type="submit" value="Send to HR"/>
        </div>
    )

}

export default UsernameInput

