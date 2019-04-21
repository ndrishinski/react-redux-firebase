import authReducer from './authReducer'
import projectReducer from './projectReducer'
import {combineReducers} from 'redux'

const reducer = combineReducers({
    auth: authReducer,
    project: projectReducer
})

export default reducer