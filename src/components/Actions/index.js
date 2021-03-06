export const createUser = (userInput) => {
    return {
        type: "ADD_USER",
        payload: userInput
    }
}

export const changePoint = (amount) => {
    return{
        type: "CHANGE_POINT",
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
    return {
        type: 'RESET_POINTS',
        payload: points
    }
}

export const resetHealth = (health) => {
    return {
        type: 'RESET_HEALTH',
        payload: health
    }
}

export const addToInventory = (item) => {
    return {
        type: "ADD_TO_INVENTORY",
        payload: item
    }
}

export const removeFromInventory = (item) => {
    return {
        type: "REMOVE_FROM_INVENTORY",
        payload: item
    }
}

export const resetInventory = (item) => {
    return {
        type: "RESET_INVENTORY",
        payload: item
    }
}

export const submitGame = (user) => {
    return (dispatch) => {
    fetch("https://retail-therapy-api.herokuapp.com/users", {
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
        fetch("https://retail-therapy-api.herokuapp.com/users")
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
    return{
        type: 'ADD_LEADER',
        payload: user
    }
}