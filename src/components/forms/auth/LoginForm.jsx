import React, { Component } from 'react'
import {Form,Message,Transition} from 'semantic-ui-react'
import Button from '../../common/buttons/Button'
import Header from '../../common/header/Header'
import {login} from '../../../redux/actions/UserAction'

// css
import './Form.css'

// redux
import {connect} from 'react-redux'

class LoginForm extends Component {
    state={
        userId:"",
        password:"",
     
        loading:false,
        status:"",
        formError:{

        }
    }

    onChange=(event)=>{   
        this.setState({[event.target.name]:event.target.value,formError:{}})
    }

    onSubmit=(event)=>{
        event.preventDefault()

        this.setState({loading:true})

        const {userId,password}=this.state
        
        this.props.login({userId,password})
            .then(resp=>this.props.onLogin())
            .catch(err=>this.setState({loading:false,status:err.response.data.errors.message}))
    }
    

    render() {
        const {userId,password,loading,status}=this.state
        return (
               <Form loading={loading} inverted onSubmit={this.onSubmit}>
                   <Header 
                    header="Login"
                   />
                   <Transition visible={!!status} animation='fade' duration={800}>
                        <Message>{status}</Message>
                    </Transition>
                    <Form.Field>
                        <Form.Input
                        required
                        name="userId"
                        value={userId}
                        onChange={this.onChange}
                        placeholder="User Id"
                        /> 
                    </Form.Field>
                    <Form.Field>
                        <Form.Input type="password" 
                        required
                        name="password"
                        value={password}
                        onChange={this.onChange}
                        placeholder="password"
                        autoComplete="new-password"
                        /> 
                    </Form.Field>
                    <Button text="login"/>
                </Form> 
            
        )
    }
}


export default connect(null,{login})(LoginForm)