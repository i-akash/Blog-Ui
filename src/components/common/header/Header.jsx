import React from 'react'
import Styles from './Header.module.css'

export default ({header})=>{
    return (
        <div className={Styles.customHeader}>
            {header}
        </div>
    )
}