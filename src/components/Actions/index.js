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