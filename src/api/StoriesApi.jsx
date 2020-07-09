import axios from './Axios'

let config=()=>({
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("jwtToken")}`
    }
})

export default {
    addStory:(story)=>axios.post("/v1/Stories/story",story,config()).then(response=>response.data),
    updateStory:(story)=>axios.put("/v1/Stories/story",story,config()).then(response=>response.data),
    getStory:(storyId)=>axios.get(`/v1/Stories/Story/${storyId}`).then(response=>response.data),
    getStoriesPagination:(skip=0,top=50)=>axios.get(`/v1/Stories/stories/${skip}/${top}`).then(response=>response.data),
    getStoriesQuery:(query="")=>axios.get(`/v1/Stories/stories?query=${query}`).then(response=>response.data),
    getStoriesPaginationQuery:(skip=0,top=50,query="")=>axios.get(`/v1/Stories/stories/${skip}/${top}?query=${query}`).then(response=>response.data),
    getUserStories:(userId="",skip=0,top=50,query="")=>axios.get(`/v1/Stories/user-stories/${userId}/${skip}/${top}?query=${query}`).then(response=>response.data),
    deleteStory:(storyId)=>axios.delete(`/v1/Stories/story/${storyId}`,config()).then(response=>response.data)
}