import React, { Component } from 'react'

import Header from '../../common/header/Header'
import Button from '../../common/buttons/Button'
import TinyEditor from '../../common/editor/TinyEditor'
import {Form,Message} from 'semantic-ui-react'
import {
    DateInput,
  } from 'semantic-ui-calendar-react';
import Styles from './StoryForm.module.css'

export default class StoryForm extends Component {
    
    state={
        title:'',
        editorContent:"",
        date:new Date(),
    }

    onFieldChange=(event)=>{   
        this.setState({[event.target.name]:event.target.value,formError:{}})
    }
    onContentChange=(editorContent)=>this.setState({editorContent})
    onDateChange=(date)=>this.setState({date})
    
    onSubmit=(event)=>{
        event.preventDefault();
        const {title,editorContent,date}=this.state
        this.props.onAddStory({title,body:editorContent,publishedDate:date});
    }

    render() {
        const {header}=this.props
        const {date,title,loading,status}=this.state

        return (
            <div className={Styles.formContainer}>
                <Form loading={loading} onSubmit={this.onSubmit}>
                    <Header 
                        header={header}
                    />
                    {!!status && <Message>{status}</Message>}
                        <Form.Field>
                            <Form.Input
                            required
                            name="title"
                            value={title}
                            onChange={this.onFieldChange}
                            placeholder="Title"
                            /> 
                        </Form.Field>
                        <TinyEditor onContentChange={this.onContentChange}/>
                        <DateInput
                            name="date"
                            placeholder="Date"
                            value={date}
                            iconPosition="left"
                            onChange={this.onDateChange}
                            />
                        <Button text="Add" onClick={this.onSubmit}/>
                </Form>
            </div>
        )
    }
}
