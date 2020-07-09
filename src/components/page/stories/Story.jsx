import React, { Component } from 'react'
import StoryContainer from '../../common/container/StoryContainer'
import storyApi from '../../../api/StoriesApi'
import StoryPlaceHolder from '../../common/placeholder/StoryPlaceHolder'

export default class Story extends Component {

    state={
        story:{}
    }
    componentWillMount(){
        const {storyId}=this.props.match.params
        storyApi.getStory(storyId).then(story=>this.setState({story}))
    }

    render() {
        const {story}=this.state
        return (
            <div>
                {
                 !!story.author===true ?
                 <StoryContainer readMore={false} story={story}/>
                 :
                 <StoryPlaceHolder number={1}/>
                }
            </div>
        )
    }
}
