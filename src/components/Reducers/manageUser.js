export default function manageUser(state = {
    username: "",
    points: 0,
    health: 50
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
                points: state.points + 10
            }

        case 'RESET_POINTS':
            return {
                ...state,
                points: 0
            }

        case 'CHANGE_HP':
            return {
                ...state,
                health: state.health + action.payload
            }

        default:
            return state; 
    }
}