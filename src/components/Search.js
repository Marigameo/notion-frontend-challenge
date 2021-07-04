import React from 'react'
import './search.css'

export default function Search({filterByName}) {
    return (
        <div className="searchWrapper">
            <input type="text" placeholder="Search..." className="search" onKeyUp={(e) => filterByName(e.target.value)}></input>
        </div>
    )
}
