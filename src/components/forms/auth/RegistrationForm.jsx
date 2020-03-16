import React, { Component } from 'react'
import {Form,Message,Transition} from 'semantic-ui-react'
import Button from '../../common/buttons/Button'

//css
import './Form.css'

import Header from '../../common/header/Header'
import authApi from '../../../api/AuthApi'
import Alert from '../../common/alert/Alert'

import {withRouter} from 'react-router-dom'

class RegistrationForm extends Component {
    state={
        fullName:"",
        userId:"",
        password:"",
        confirmPassword:"",

        loading:false,
        error:false,
        success:false,
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
                .then(resp=>this.setState({loading:false,success:true}))
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
        const {fullName,userId,password,confirmPassword,formError,status,success}=this.state
        return (
            <div className="form-container">
           
            <Form inverted onSubmit={this.onSubmit}>
                <Header 
                    header="Register"
                />
                <Transition visible={!!formError.message} animation='fade' duration={800}>
                                <Message negative list={formError.message}/>
                </Transition>
                <Alert header={`Registration Status`} 
                                    text={`Successfully Registered`} 
                                    btn1="Login" click1={()=>this.props.history.push("/login")}  
                                    btn2="Continue" click2={()=>this.setState({success:!success})} btn2Visiblity={false} open={success}/>
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
            </div>
        )
    }
}


export default withRouter(RegistrationForm);