export default function manageLeaders(state = {
    leaders: []
}, action) {
    switch (action.type){
        case 'GET_LEADERS':
            console.log(action.payload)
            return {
                ...state,
                leaders: action.payload
            }
        default:
            return state
}}