import React, { Component } from 'react'
import LoginForm from '../../forms/auth/LoginForm'
import Button from '../../common/buttons/Button'
import './Auth.css'


export default class AuthPage extends Component {
    state={
        login:true,
        alternateText:"you are not a member yet?",
        alternateButton:"Register"
    }

    onRegisterPage=()=>this.props.history.push("/register")
    
    onLogin=()=>this.props.history.push("/")

    render() {
        const {login,alternateText,alternateButton}=this.state

        return (
            <div className="login-page">
                    <div className="heading">
                            <label>{alternateText}</label>
                            <Button text={alternateButton} onClick={this.onRegisterPage}/>
                    </div>
                    <LoginForm onLogin={this.onLogin}/>
            </div>
        )
    }
}