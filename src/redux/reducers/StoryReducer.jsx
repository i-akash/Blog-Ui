import {GET_STORIES,STORY_PAGE,DELETE_STORY} from '../types/Type'


export default (state={stories:[],total:0},action={})=>{
    switch(action.type){
        case GET_STORIES:return {...state,...action.payload};
        case DELETE_STORY :return {...state,stories:state.stories.filter(story=>story.storyId!==action.payload.storyId),total:state.total-1}
        case STORY_PAGE : return {...state,...action.payload}
        default :return state
    }
}