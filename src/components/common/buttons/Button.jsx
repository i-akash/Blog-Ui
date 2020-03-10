  
import './Button.css'
import React from 'react'

export default function Button({text,onClick,clsName,disabled=false}) {
    return (
        <button id={`custom-button-${disabled}`} className={clsName} onClick={onClick} disabled={disabled}>{text}</button>
    );
}
