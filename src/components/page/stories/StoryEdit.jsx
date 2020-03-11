import React, { Component } from 'react'
import StoryForm from '../../forms/stories/StoryForm'
import storyApi from '../../../api/StoriesApi'

export default class StoryEdit extends Component {
    
    state={
        story:{}
    }

    onUpdateStory=(story)=>{
        const {storyId}=this.props.match.params
        return storyApi.updateStory({...story,storyId})
    }
    componentWillMount=()=>{
        const {storyId}=this.props.match.params
        storyApi.getStory(storyId).then(story=>this.setState({story}))
    }
    
    render() {
        const {story}=this.state
        return (
            <div>
                 <StoryForm header="Update Story" onSubmitStory={this.onUpdateStory} btnText="Update Story" story={story}/>
            </div>
        )
    }
}
