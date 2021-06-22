import { combineReducers } from 'redux'
import manageUser from './manageUser'
import manageLeaders from './manageLeaders'
import manageRounds from './manageRounds'

const reducers = combineReducers({
    //key value pair
    user: manageUser,
    leaders: manageLeaders,
    round: manageRounds
})

export default reducers