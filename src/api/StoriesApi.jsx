import {AuthorizedAxios,Axios  as axios } from './settings/Axios'

export default {
    addStory:(story)=>AuthorizedAxios.post("/v1/Stories/story",story).then(response=>response.data),
    updateStory:(story)=>AuthorizedAxios.put("/v1/Stories/story",story).then(response=>response.data),
    getStory:(storyId)=>axios.get(`/v1/Stories/Story/${storyId}`).then(response=>response.data),
    getStoriesPagination:(skip=0,top=50)=>axios.get(`/v1/Stories/stories/${skip}/${top}`).then(response=>response.data),
    getStoriesQuery:(query="")=>axios.get(`/v1/Stories/stories?query=${query}`).then(response=>response.data),
    getStoriesPaginationQuery:(skip=0,top=50,query="")=>axios.get(`/v1/Stories/stories/${skip}/${top}?query=${query}`).then(response=>response.data),
    getUserStories:(userId="",skip=0,top=50,query="")=>axios.get(`/v1/Stories/user-stories/${userId}/${skip}/${top}?query=${query}`).then(response=>response.data),
    deleteStory:(storyId)=>AuthorizedAxios.delete(`/v1/Stories/story/${storyId}`).then(response=>response.data)
}