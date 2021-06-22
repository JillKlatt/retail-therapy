export default function manageRounds(state = 0, action){
    switch (action.type){
        case 'ROUND_ONE':
            console.log(action)
            return {
                ...state, 
                round: [...action.payload]
        
            }

        default:
            return state
    }

}