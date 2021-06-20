export default function manageUser(state = {
    username: "",
    points: 0,
}, action) {
    switch (action.type){
        case 'ADD_USER':
            console.log(action.payload)
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