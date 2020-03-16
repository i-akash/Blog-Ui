import {GET_STORIES,STORY_PAGE,DELETE_STORY} from '../types/Type'
import storyApi from '../../api/StoriesApi'

//action

const getStoriesAction=data=>({
    type:GET_STORIES,
    payload:data
})

const deleteStoryAction=(data)=>({
    type:DELETE_STORY,
    payload:data
})

export const updateStoryPage=(data)=>({
    type:STORY_PAGE,
    payload:data
})

// Asynchronus action
export const getStoriesPagination=(skip,top)=>dispatch=>storyApi.getStoriesPagination(skip,top)
                                                                .then(stories=>dispatch(getStoriesAction(stories)))

export const getStoriesQuery=(query)=>dispatch=>storyApi.getStoriesQuery(query)
                                                                .then(stories=>dispatch(getStoriesAction(stories)))

export const getStoriesPaginationQuery=(skip,top,query)=>dispatch=>storyApi.getStoriesPaginationQuery(skip,top,query)
                                                                .then(stories=>dispatch(getStoriesAction(stories)))

export const getUserStories=(userId,skip,top,query)=>dispatch=>storyApi.getUserStories(userId,skip,top,query)
                                                                .then(stories=>dispatch(getStoriesAction(stories)))

export const deleteStory=(storyId)=>dispatch=>storyApi.deleteStory(storyId)
                                                                .then(()=>dispatch(deleteStoryAction({storyId})))

