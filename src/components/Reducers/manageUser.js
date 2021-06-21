export default function manageUser(state = {
    username: "",
    points: 0,
}, action) {
    switch (action.type){
        case 'ADD_USER':
            console.log(action.payload)
            return {
                ...state,
                username: action.payload
            }

        case 'ADD_POINT':
            // debugger
            return {
                ...state,
                points: state.points + 1
            }

        default:
            return state; 
    }
}