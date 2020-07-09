import React from 'react'
import {Dropdown} from 'semantic-ui-react';

import './MenuDropdown.css'

export default class MenuDropdown extends React.Component{

    constructor(props){
        super(props)
        this.dropRef=React.createRef()
    }

    onSelect=(path)=>{
        this.dropRef.current.close()
        this.props.onClick(path)
    }
    render(){
            const {list,icon}=this.props
            return (
                <Dropdown  item simple pointing='top right' icon={icon} ref={this.dropRef} closeOnBlur className='icon'>
                    <Dropdown.Menu>
                        {
                            list.map((task,index)=>
                                    <Dropdown.Item  key={index} 
                                                    icon={task.icon} 
                                                    text={task.name}  
                                                    onClick={()=>this.onSelect({name:task.name,path:task.path})}/>
                            )
                        }
                    </Dropdown.Menu>
                </Dropdown>
            )
        }
}