  
import {combineReducers} from 'redux'
import User from './UserReducer'
import Stories from './StoryReducer'
import Global from './GlobalReducer'

export default combineReducers({
    User,
    Stories,
    Global
})