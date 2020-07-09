import React, { Component } from 'react'
import UserStories from '../../listings/stories/UserStories'
import UserContainer from '../../common/container/UserContainer'
export default class UserPage extends Component {
    render() {
        return (
            <div>
                <UserContainer/>
                <UserStories/>
            </div>
        )
    }
}
