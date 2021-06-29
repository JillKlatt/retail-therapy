export default function manageRounds(state = {round: 0}, action){
    switch (action.type){
        case 'CHANGE_ROUND':
            return {
                    ...state,
                    round: state.round + 1
                }
        
        case 'RESET_ROUND':
            return {
                ...state,
                round: 0
            }

        default:
            return state
    }

}

//                round: [state.round, action.payload]