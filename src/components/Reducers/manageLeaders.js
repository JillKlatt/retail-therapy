// function manageLeaders(state = {
//     leaders: []
// }, action) {
//     switch (action.type){
//         case 'GET_LEADERS':
//             console.log(action.payload)
//             return {
//                 ...state,
//                 leaders: [...state.leaders, ...action.payload]
//             }
//         default:
//             return state
// }}

// export default manageLeaders()

export default function manageLeaders(state = {leaders: []}, action){
    switch (action.type){
        case 'GET_LEADERS':
            //console.log(`Action: ${action.payload}`)
            return {
                ...state, 
                leaders: action.payload
            }

        case 'ADD_LEADER':
            // debugger
            return {
                ...state,
                leaders: [...state.leaders, action.payload]
            }

        default:
            return state
    }

}

