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

        return currentId===activeItem && (!!user.userId===false || activeItem!==2) ? Styles.listItemActive : Styles.listItem;
    }
    render() {
        const {user}=this.props;
        return (
                <ul className={Styles.navbar}>
                    <li className={Styles.listHeader} onClick={()=>this.onHandleClick("/",0)}><h2>B<span>logger</span></h2></li>
                    
                    <li className={this.linkStyle(1)}  onClick={()=>this.onHandleClick("/new-story",1)} style={{marginLeft:"auto"}}>
                        <i aria-hidden="true" className="plus icon"></i>
                        <span className={Styles.listSpan}>New Story</span>
                    </li>
                    <li className={this.linkStyle(2)} onClick={()=>!!user.fullName===false && this.onHandleClick("/login",2)}>
                        <i aria-hidden="true" className="user icon"></i>
                        {
                           !!user.fullName===true ?
                                    <span className={Styles.listSpan}>{user.fullName}</span>:
                                    <span className={Styles.listSpan}>Login</span> 
                        }
                    </li>
                    {
                        !!user.userId && <li className={this.linkStyle(3)} onClick={this.props.logout}>
                                            <i aria-hidden="true" className="log out icon"></i>
                                            <span className={Styles.listSpan}>LogOut</span> 
                                        </li>
                    }
                </ul>
            )
    }
}

const mapStateToProps=state=>({
    user:state.User
})

export default  connect(mapStateToProps,{logout})(withRouter(Navbar));