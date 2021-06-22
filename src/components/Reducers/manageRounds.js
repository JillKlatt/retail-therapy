export default function manageRounds(state = {round: 0}, action){
    switch (action.type){
        case 'CHANGE_ROUND':
            console.log(action)
            return {
                    ...state,
                    round: state.round + 1
                }

        default:
            return state
    }

}

//                round: [state.round, action.payload]