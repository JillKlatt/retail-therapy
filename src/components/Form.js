import { useState, useEffect } from 'react' 

function UsernameInput(props) {

    const [username, setUsername] = useState("")
    const [didUserInput, setDidUserInput] = useState(null)

    const onChange = e => {
        setUsername(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.createUserAC(username)
        setUsername("")
        props.setGame(false)
    }


    useEffect(() => {
        function toggleUserInput(status) {
            setDidUserInput(status.didUserInput)
        }
    }
    )



    return (
        <div>
            <input name="username" value={username} onChange={onChange}/>
            <input onClick={handleSubmit} type="submit" value="Submit"/>
        </div>
    )

}

export default UsernameInput

