import { combineReducers } from 'redux'
import manageUser from './manageUser'

const reducers = combineReducers({
    //key value pair
    user: manageUser
})

export default reducers