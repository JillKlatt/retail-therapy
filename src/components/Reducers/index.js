import { combineReducers } from 'redux'
import manageUser from './manageUser'
import manageLeaders from './manageLeaders'
import manageRounds from './manageRounds'
import manageInventory from './manageInventory'

const reducers = combineReducers({
    //key value pair
    user: manageUser,
    leaders: manageLeaders,
    round: manageRounds,
    inventory: manageInventory
})

export default reducers