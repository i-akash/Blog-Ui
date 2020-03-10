import {GET_STORIES,CREATE_STORY,EDIT_STORY,DELETE_STORY} from '../types/Type'


export default (state=[],action={})=>{
    switch(action.type){
        case GET_STORIES:return action.payload;
        case CREATE_STORY:return [...state.concat(action.payload)]
        default :return state
    }
}