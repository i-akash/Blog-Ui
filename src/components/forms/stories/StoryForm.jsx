import React, { Component } from 'react'

import Header from '../../common/header/Header'
import Button from '../../common/buttons/Button'
import TinyEditor from '../../common/editor/TinyEditor'
import {Form,Message,Transition} from 'semantic-ui-react'
import {DateInput} from 'semantic-ui-calendar-react';
import pureHtml from '../../../pureIt/PureHtml'

//css
import Styles from './StoryForm.module.css'
import Alert from '../../common/alert/Alert'

import {withRouter} from 'react-router-dom'


class StoryForm extends Component {
    
    state={
        title:'',
        editorContent:"",
        date:new Date(),
        
        success:false,
        formError:{}
    }


    componentWillReceiveProps=(nextProps)=>{
        const {story}=nextProps
        if(!!story===true && story!==this.props.story)
            this.setState({title:story.title,editorContent:story.body,date:story.publishedDate});
    }

    onFieldChange=(event)=>{   
        this.setState({[event.target.name]:event.target.value,formError:{}})
    }

    onContentChange=(editorContent)=>this.setState({editorContent,formError:{}})
    
    onDateChange=(event, {name, value})=>{
        console.log(value);
        
        this.setState({[name]:value,formError:{}})
    }

    onSubmit=(event)=>{
        event.preventDefault();
        let {title,editorContent,date}=this.state
        editorContent=pureHtml(editorContent)
        this.props.onSubmitStory({title,body:editorContent,publishedDate:date})
                  .then(res=>this.setState({success:true}))
                  .catch(err=>this.setState({loading:false,formError:err.response.data.errors}));
    }

    render() {
        const {header,btnText}=this.props
        const {date,title,editorContent,loading,success,formError}=this.state

        return (
            <div className={Styles.formContainer}>
                <Form loading={loading} onSubmit={this.onSubmit}>
                    <Header 
                        header={header}
                    />

                   <Alert header={`${header} Confirmation`} 
                                    text={`${header} Success`} 
                                    btn1="Home" click1={()=>this.props.history.push("/")} 
                                    btn2="Continue" click2={()=>this.setState({success:!success})} open={success}/>
                        
                        <Transition visible={!!formError.message} animation='fade' duration={800}>
                                <Message>{formError.message}</Message>
                        </Transition>
                        <Form.Field>
                            <Form.Input
                            required
                            name="title"
                            value={title}
                            onChange={this.onFieldChange}
                            placeholder="Title"
                            error={ !!formError.Title && {
                                content:formError.Title[0],
                                pointing: 'below'
                              }}
                            /> 
                        </Form.Field>
                        {formError.Body && <Message>{ formError.Body[0]}</Message>}
                            <TinyEditor onContentChange={this.onContentChange} content={editorContent}/>
                        <DateInput
                            name="date"
                            placeholder="Date"
                            value={date}
                            iconPosition="left"
                            onChange={this.onDateChange}
                            dateFormat="YYYY-MM-DD"
                            error={ !!formError.PublishedDate && {
                                content:formError.PublishedDate[0],
                                pointing: 'below'
                              }}
                            />
                        <Button text={btnText}/>
                </Form>
            </div>
        )
    }
}

export default withRouter(StoryForm)