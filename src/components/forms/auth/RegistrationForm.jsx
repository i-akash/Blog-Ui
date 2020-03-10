import React, { Component } from 'react'
import {Form,Message} from 'semantic-ui-react'
import Button from '../../common/buttons/Button'
import './Form.css'
import api from '../../../api/AuthApi'
import Header from '../../common/header/Header'
import authApi from '../../../api/AuthApi'

export default class RegistrationForm extends Component {
    state={
        fullName:"",
        userId:"",
        password:"",
        confirmPassword:"",

        loading:false,
        success:false,
        error:false,
        status:"",
        formError:{

        }
    }

    onChange=(event)=>{
        
        this.setState({[event.target.name]:event.target.value,formError:{}})
    }
    onSubmit=(event)=>{
        event.preventDefault()
        let formError=this.onValidate()

        this.setState({loading:true,formError})
        if(Object.keys(formError).length===0){
            let {fullName,userId,password}=this.state
            fullName=fullName.split(' ')
            let firstName=fullName[0]
            let lastName=fullName[1]

            authApi.register({userId,firstName,lastName,password})    
                .then(resp=>{
                    this.setState({loading:false})
                    this.props.onSuccess();
                })
                .catch(err=>this.setState({loading:false,formError:err.response.data.errors}))    
        }
    }


    onValidate=()=>{
        let error={}
        const {password,confirmPassword}=this.state
        if(password!==confirmPassword)error.confirmPassword="password didn't match"
        return error
    }
     

    render() {
        const {fullName,userId,password,confirmPassword,formError,status}=this.state
        return (
            <Form onSubmit={this.onSubmit}>
                <Header 
                    header="Register"
                />
                {!!status && <Message>{status}</Message>}
                <Form.Field>
                    <Form.Input
                        required
                        placeholder="Full Name"
                        name="fullName"
                        value={fullName}
                        onChange={this.onChange}
                        error={ !!formError.FirstName && {
                            content:formError.FirstName[0],
                            pointing: 'below'
                          }}
                     /> 
                </Form.Field>
                <Form.Field>
                    <Form.Input
                        required
                        placeholder="User Id"
                        name="userId" 
                        value={userId}
                        onChange={this.onChange}

                        error={ !!formError.UserId && {
                            content:formError.UserId[0],
                            pointing: 'below'
                          }}
                     /> 
                </Form.Field>
                <Form.Field >
                    <Form.Input type="password" 
                        required
                        name="password"
                        value={password}
                        onChange={this.onChange}
                        placeholder="password"
                        error={ !!formError.Password && {
                            content:formError.Password[0],
                            pointing: 'below'
                          }}
                    /> 
                </Form.Field>
                <Form.Field>
                    <Form.Input type="password" 
                        required
                        error={!!formError.confirmPassword && {content:formError.confirmPassword,pointing:'below'}}
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.onChange}
                        placeholder="confirm paswword"
                        autoComplete="new-password"
                    /> 
                </Form.Field>
                <Button text="register"/>
            </Form>
        )
    }
}