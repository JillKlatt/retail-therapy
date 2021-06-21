export const createUser = (userInput) => {
    return (dispatch) => {
        // debugger
        dispatch({
            type: "ADD_USER",
            payload: userInput
        })
    }
}

export const addPoint = (amount) => {
    return (dispatch) => {
        dispatch ({
            type: "ADD_POINT",
            payload: amount
        })
    }
}

export const getLeaders = () => {
    return (dispatch) => {
        dispatch({type: "LOADING"})

        fetch("http://localhost:3001/users")
        .then(resp => resp.json())
        .then(users => {
            dispatch({
                type: "GET_LEADERS",
                payload: users
            })
        })
    }
}