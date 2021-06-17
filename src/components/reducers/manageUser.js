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

        case 'ADD_POINT':
            return {
                ...state,
                points: (prevPoints => prevPoints += 1)
            }
        default:
            return state; 
    }
}