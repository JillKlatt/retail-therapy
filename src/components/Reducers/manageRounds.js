export default function manageRounds(state = 0, action){
    switch (action.type){
        case 'CHANGE_ROUND':
            console.log(action)
            return {
                ...state, 
                round: [state.round, action.payload]
        
            }

        default:
            return state
    }

}