export default function manageInventory(state = {inventory: []}, action){
    switch (action.type){
        case "ADD_TO_INVENTORY":
            return {
            ...state,
            inventory: [...state.inventory, action.payload]
        }

        case "REMOVE_FROM_INVENTORY":
            return {
            ...state,
            inventory: [...state.inventory.slice(0, action.payload), ...state.inventory.slice(action.payload + 1)]
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