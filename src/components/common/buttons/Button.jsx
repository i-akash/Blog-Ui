import React from 'react'

export default function Button({text,onClick,clsName,disabled=false}) {
    return (
    <button class="ui green tiny button" disabled={disabled} onClick={onClick}>{text}</button>
    );
}
