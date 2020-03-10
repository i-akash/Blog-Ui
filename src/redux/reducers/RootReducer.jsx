  
import {combineReducers} from 'redux'
import User from './UserReducer'
import Stories from './StoryReducer'

export default combineReducers({
    User,
    Stories
})