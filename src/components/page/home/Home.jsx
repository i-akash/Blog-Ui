import React, { Component } from 'react'

//components
import Stories from '../../listings/stories/Stories'

//css 
import  Styles from './Home.module.css'

export default class Home extends Component {
    render() {
        return (
            <div className={Styles.homeContainer}>
                <Stories/>
            </div>
        )
    }
}
