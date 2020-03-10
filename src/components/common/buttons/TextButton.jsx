import React from 'react';

//css
import styles from './TextButton.module.css'

export default ({text,onClick,clsName=styles.textButton,disabled=false})=>{
    return (
        <button className={clsName} onClick={onClick} disabled={disabled}>{text}</button>
    );
}