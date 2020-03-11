import React from 'react'

//css 
import './SimpleSearch.css'

export default function SimpleSearch({value,onChange,onClick}){
    return (
        <div class="ui icon input">
            <input type="text" name="query" placeholder="Search..." value={value} onChange={onChange} />
            <i aria-hidden="true" class="search circular inverted link icon" onClick={onClick}></i>
        </div>
    )
}