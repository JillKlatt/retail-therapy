export default function manageInventory(state = {inventory: []}, action){
    switch (action.type){
        case "ADD_TO_INVENTORY":
            return{
            ...state,
            inventory: [...state.inventory, action.payload]
        }
        
        case 'RESET_INVENTORY':
            return {
                ...state,
                inventory: []
            }

        default:
            return state
    }

}