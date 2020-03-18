import React, { Component } from 'react'

//redux 
import {connect} from 'react-redux'

//css 
import Styles from './UserContainer.module.css'

class UserContainer extends Component {
    render() {
        const {userId,fullName}=this.props.user
        return (
            <div className={Styles.userContainer}>
                <h3>User ID   : {userId}</h3>
                <h4>Full Name : {fullName}</h4>
            </div>
        )
    }
}

const mapStateToProps=state=>({
    user:state.User
})

export default  connect(mapStateToProps)(UserContainer);