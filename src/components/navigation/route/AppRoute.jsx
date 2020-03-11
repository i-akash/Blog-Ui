  
import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from '../../page/home/Home'
import LoginPage from '../../page/auth/LoginPage'
import RegisterPage from '../../page/auth/RegistrationPage'
import StoryCreation from '../../page/stories/StoryCreation'
import StoryEdit from '../../page/stories/StoryEdit'
import Story from '../../page/stories/Story'

export default function AppRoute(){
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            
            <Route path="/login" exact component={LoginPage}/>
            <Route path="/register" exact component ={RegisterPage}/>

            <Route path="/new-story" exact component ={StoryCreation}/>
            <Route path="/edit-story/:storyId" exact component ={StoryEdit}/>
            <Route path="/story/:storyId" exact component={Story}/>
            
        </Switch>
    )
}