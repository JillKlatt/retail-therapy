import { combineReducers } from 'redux'
import manageUser from './manageUser'
import manageLeaders from './manageLeaders'

const reducers = combineReducers({
    //key value pair
    user: manageUser,
    leaders: manageLeaders
})

export default reducers