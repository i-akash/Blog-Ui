import React, { Component } from 'react'

import TextButton from '../buttons/TextButton'
import  MenuDropdown from '../dropdown/MenuDropdown'
import {withRouter} from 'react-router-dom'
import {formatDate} from '../../common/date/DateFormate'

//redux 
import {connect} from 'react-redux'
import {deleteStory} from '../../../redux/actions/StoriesAction'

// css
import Styles from './StoryContainer.module.css'
import {Header,Transition} from 'semantic-ui-react'
import Alert from '../alert/Alert'


class StoryContainer extends Component {
    constructor(props){
        super(props)

        this.state={
            settingTask:[ 
                {name:"Edit",path:"/edit-story",icon:"edit"},
                {name:"Delete",path:"/delete-story",icon:"delete"},   
            ],
            success:false
        }
    }

    settingDropTask=({name,path})=>{
        const {settingTask}=this.state
        this.setState({...settingTask,[name]:path})
    }

    onRoute=(name,path,id)=>{
        console.log(name,path);
        
        if(name==="Delete")
            {
                this.props.deleteStory(id).then(resp=>this.setState({success:true})).catch(err=>{});
                return ;
            }
        this.props.history.push(`${path}/${id}`);
    }




    render() {
        const {story,readMore}=this.props
        const {user}=this.props
        const {author}=story

        let {settingTask,success}=this.state
        let content=readMore===true && !!story.body===true ? `${story.body.substring(0,1000)}......`:story.body;
        
        return (
        <Transition animation={"fade"} duration={500}>   
            <div className={Styles.storyContainer}>
                    <Alert header="Deletion Status" 
                                        text={`Deleted Successfully`}
                                        btn1="Home"  click1={()=>this.props.history.push('/')}  btn1Visiblity={!readMore}
                                        btn2="Ok" click2={()=>this.setState({success:!success})} open={success} btn2Visiblity={readMore}/>
                    
                    
                    <div>
                        <h3 className={Styles.storyHeader}>{story.title}</h3>
                        <div className={Styles.storyMetaData}>
                            <span>
                            By <label className={Styles.storyBoldMetaData}>{author.firstName+" "+author.lastName}</label> on <label className={Styles.storyBoldMetaData}>{formatDate(story.publishedDate)}</label></span>
                            {
                            !!user.userId && author.userId && user.userId===author.userId &&
                            <MenuDropdown list={settingTask} icon={"setting"} onClick={({name,path})=>this.onRoute(name,path,story.storyId)}/>
                            }
                        </div>
                    </div>
                    

                    <div className={Styles.storyBody} dangerouslySetInnerHTML={{__html:content}}/>
                    
                    
                    {
                        readMore && !!story.body===true && story.body.length>1000 &&  <TextButton text="Read More" onClick={()=>this.onRoute("story","/story",story.storyId)}/>
                    }
            </div>
        </Transition>
        )
    }
}

const mapStateToProps=state=>({
    user:state.User
})
export default   connect(mapStateToProps,{deleteStory})(withRouter(StoryContainer));