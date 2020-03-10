import React, { Component } from 'react'
import StoryForm from '../../forms/stories/StoryForm'

import storyApi from '../../../api/StoriesApi'

export default class StoryCreation extends Component {
    
    constructor(props){
        super(props)
    }

    
    onAddStory=(story)=>storyApi.addStory(story)

    render() {
        return (
            <div>
                <StoryForm onAddStory={this.onAddStory}/>
            </div>
        )
    }
}
