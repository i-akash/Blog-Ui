import React, { Component } from 'react'
import RegisterForm from '../../forms/auth/RegistrationForm'
import Button from '../../common/buttons/Button'
import './Auth.css'

export default class AuthPage extends Component {
    state={
        login:true,
        alternateText:"you are a member already?",
        alternateButton:"Login"
    }

    gotoLoginPage=()=>this.props.history.push("/login")

    render() {
        const {login,alternateText,alternateButton}=this.state
        return (
            <div className="login-page">
                    <div className="heading">
                            <label>{alternateText}</label>
                            <Button text={alternateButton} onClick={this.gotoLoginPage}/>
                    </div>
                    <RegisterForm onSuccess={this.gotoLoginPage} />
            </div>
        )
    }
}