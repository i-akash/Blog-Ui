import React, { Component } from 'react'

import TextButton from '../buttons/TextButton'
import  MenuDropdown from '../dropdown/MenuDropdown'
// css
import Styles from './StoryContainer.module.css'

import pureHtml from '../../../pureIt/PureHtml'

export default class StoryContainer extends Component {
    constructor(props){
        super(props)

        this.state={
            settingTask:[ 
                        {name:"Edit",path:"/edit-post"},
                        {name:"Delete",path:"/delete-post"},   
                ],
        }
    }

    render() {
        const {story,readMore}=this.props
        const {author}=story
        const {settingTask}=this.state
        return (
        <div className={Styles.storyContainer}>
                <div>
                    <h3 className={Styles.storyHeader}>{story.title}</h3>
                    <div className={Styles.storyMetaData}>
                        <span>
                        By <label className={Styles.storyBoldMetaData}>{author.firstName+" "+author.lastName}</label> on <label className={Styles.storyBoldMetaData}>{story.publishedDate}</label></span>
                        <MenuDropdown list={settingTask} icon={"setting"}/>
                    </div>
                </div>
                <div className={Styles.storyBody} dangerouslySetInnerHTML={{__html:pureHtml(story.body)}} />
                {
                    readMore &&  <TextButton text="Read More"/>
                }
        </div>
        )
    }
}
