export default function manageUser(state = {
    username: "",
    points: 0,
}, action) {
    switch (action.type){
        case 'ADD_USER':
            return {
                ...state,
                username: action.payload
            }

        case 'ADD_POINT':
            return {
                ...state,
                points: state.points + 1
            }

        case 'RESET_POINTS':
            return {
                ...state,
                points: 0
            }

        default:
            return state; 
    }
}