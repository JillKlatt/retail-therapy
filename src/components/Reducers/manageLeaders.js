
export default function manageLeaders(state = {leaders: []}, action){
    switch (action.type){
        case 'GET_LEADERS':
            return {
                ...state, 
                leaders: action.payload
            }

        case 'ADD_LEADER':
            return {
                ...state,
                leaders: [...state.leaders, action.payload]
            }

        default:
            return state
    }

}

