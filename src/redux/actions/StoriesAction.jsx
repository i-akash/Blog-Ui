import {GET_STORIES,CREATE_STORY,EDIT_STORY,DELETE_STORY} from '../types/Type'
import storyApi from '../../api/StoriesApi'

//action

const getStoriesAction=data=>({
    type:GET_STORIES,
    payload:data
})


// Asynchronus action
export const getStoriesPagination=(skip,top)=>dispatch=>storyApi.getStoriesPagination(skip,top)
                                                                .then(stories=>dispatch(getStoriesAction(stories)))

export const getStoriesQuery=(query)=>dispatch=>storyApi.getStoriesQuery(query)
                                                                .then(stories=>dispatch(getStoriesAction(stories)))

export const getStoriesPaginationQuery=(skip,top,query)=>dispatch=>storyApi.getStoriesPaginationQuery(skip,top,query)
                                                                .then(stories=>dispatch(getStoriesAction(stories)))

