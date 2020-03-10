import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

//css
import Styles from './Navbar.module.css'

//redux
import {connect} from 'react-redux'


class Navbar extends Component {
    constructor(props){
        super(props)
        this.state={
            activeItem:-1
        }
    }

    onHandleClick=(path,name)=>{
       this.setState({activeItem:name})
       this.props.history.push(path) 
    }

    linkStyle=(currentId)=>{
        const {activeItem}=this.state
        return currentId===activeItem ? Styles.listItemActive : Styles.listItem;
    }
    render() {
        const {user}=this.props;
        return (
                <ul className={Styles.navbar}>
                    <li className={Styles.listHeader} onClick={()=>this.onHandleClick("/",0)}><h2>B<span>logger</span></h2></li>
                    
                    <li className={this.linkStyle(1)}  onClick={()=>this.onHandleClick("/new-story",1)} style={{marginLeft:"auto"}}>
                        <i aria-hidden="true" class="plus icon"></i>
                        <span className={Styles.listSpan}>New Story</span>
                    </li>
                    <li className={this.linkStyle(2)} onClick={()=>this.onHandleClick("/login",2)}>
                        <i aria-hidden="true" class="user icon"></i>
                        {
                           !!user.fullName===true ?
                                    <span className={Styles.listSpan}>{user.fullName}</span>:
                                    <span className={Styles.listSpan}>Login</span> 
                        }
                    </li>
                </ul>
            )
    }
}

const mapStateToProps=state=>({
    user:state.User
})

export default  connect(mapStateToProps)(withRouter(Navbar));