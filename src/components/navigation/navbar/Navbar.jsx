import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

//css
import Styles from './Navbar.module.css'

//redux
import {connect} from 'react-redux'
import {logout} from '../../../redux/actions/UserAction'


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
        const {user}=this.props;
        
        return currentId===activeItem ? Styles.listItemActive : Styles.listItem;
    }

    getLink=({show,linkIndex,onClick,icon,label,style})=>{
        return show && <li className={this.linkStyle(linkIndex)} onClick={onClick} style={style}>
                                    <i aria-hidden="true" className={`${icon} icon`}></i>
                                    <span className={Styles.listSpan}>{label}</span>
                                </li>
    }

    onlogout=()=>{
        this.setState({activeItem:-1})
        this.props.logout();
    }

    render() {
        const {user}=this.props;
        return (
                <ul className={Styles.navbar}>
                    <li onClick={()=>this.onHandleClick("/",0)}><h2 className={Styles.listHeader}>Blogger</h2></li>
                    {
                        this.getLink({show:!!user.userId,
                                      linkIndex:1,
                                      onClick:()=>this.onHandleClick("/new-story",1),
                                      icon:"plus",
                                      label:"New Story",
                                      style:{"marginLeft":"auto"}})
                    }
                    {
                        this.getLink({show:!!user.userId,
                                      linkIndex:2,
                                      onClick:()=>this.onHandleClick("/user",2),
                                      icon:"user",
                                      label:`${user.fullName}`,
                                      style:{}})
                    }
                    {
                        this.getLink({show:!(!!user.userId),
                                      linkIndex:3,
                                      onClick:()=>this.onHandleClick("/login",3),
                                      icon:"user",
                                      label:"Login",
                                      style:{}})
                    }
                    {
                        this.getLink({show:!!user.userId,
                                      linkIndex:4,
                                      onClick:this.onlogout,
                                      icon:"log out",
                                      label:"LogOut",
                                      style:{}})
                    }
                </ul>
            )
    }
}

const mapStateToProps=state=>({
    user:state.User
})

export default  connect(mapStateToProps,{logout})(withRouter(Navbar));