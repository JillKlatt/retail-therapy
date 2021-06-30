export const createUser = (userInput) => {
    return {
        type: "ADD_USER",
        payload: userInput
    }
}

export const addPoint = (amount) => {
    return{
        type: "ADD_POINT",
        payload: amount
    }
}


export const changeHP = (amount) => {
    return{
        type: 'CHANGE_HP',
        payload: amount
    }
}

export const changeRound = (round) => {
    return {
        type: "CHANGE_ROUND",
        payload: round
    }
}

export const resetRound = (round) => {
    return {
        type: "RESET_ROUND",
        payload: round
    }
}

export const resetPoints = (points) => {
    return{
        type: 'RESET_POINTS',
        payload: points
    }
}

export const submitGame = (user) => {
    return (dispatch) => {
    fetch("http:///127.0.0.1:3001/users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify({user}),
    })
    .then(resp => resp.json())
    .then(data => {
        dispatch(createUser(data))
    })
    }
}

export const getLeaders = () => {
    return (dispatch) => {
        //console.log(`Dispatch: ${dispatch}`)
        fetch("http:///127.0.0.1:3001/users")
        .then(resp => resp.json())
        .then(data => {
            dispatch({
                type: "GET_LEADERS",
                payload: data
            })
        })
    }
}

export const addLeader = (user) => {
    // console.log(user)
    return{
        type: 'ADD_LEADER',
        payload: user
    }
}