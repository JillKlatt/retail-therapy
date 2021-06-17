export default function manageUser(state = {
    username: "",
    points: "",
}, action) {
    switch (action.type){
        case 'ADD_USER':
            return {
                ...state,
                username: "New"
            }
        default:
            return state; 
    }
}