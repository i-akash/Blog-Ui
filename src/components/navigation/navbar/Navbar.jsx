import React, { Component } from 'react'

//css
import styles from './Navbar.module.css'

class Navbar extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className={styles.Navbar}>
                <ul>
                    <li>Blogger</li>
                </ul>
            </div>
            )
    }
}

export default  Navbar;