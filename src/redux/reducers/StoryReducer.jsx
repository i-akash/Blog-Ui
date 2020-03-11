import {GET_STORIES,CREATE_STORY,EDIT_STORY,DELETE_STORY} from '../types/Type'


export default (state={},action={})=>{
    switch(action.type){
        case GET_STORIES:return action.payload;
        case DELETE_STORY :return {...state,stories:state.stories.filter(story=>story.storyId!==action.payload.storyId)}
        default :return state
    }
}