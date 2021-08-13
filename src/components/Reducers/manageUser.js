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

        case 'CHANGE_POINT':
            return {
                ...state,
                points: state.points + action.payload
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

        case 'RESET_HEALTH':
            return {
                ...state,
                health: 50
            }

        default:
            return state; 
    }
}