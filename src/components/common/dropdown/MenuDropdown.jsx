import React from 'react'
import {Dropdown} from 'semantic-ui-react';
import './Dropdown.css'

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
                <Dropdown item simple icon={icon} ref={this.dropRef} closeOnBlur>
                    <Dropdown.Menu>
                        {
                            list.map((task,index)=>
                                
                                    <Dropdown.Item 
                                        key={index}
                                        onClick={()=>this.onSelect(task.path)}
                                    >
                                        {task.name}
                                    </Dropdown.Item>
                            )
                        }
                    </Dropdown.Menu>
                </Dropdown>
            )
        }
}