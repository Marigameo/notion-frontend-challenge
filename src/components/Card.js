import React from 'react'
import './card.css'

export default function Card({ item }) {
    return (
        <div className="card">
            <p className="placeName">{item.CITY} - {item.STABBR}</p>
            <p className="collegeName">{item.INSTNM}</p>
            <a className="link" target="_blank" rel="noreferrer" href={`https://${item.INSTURL}`}>{item.INSTURL}</a>
        </div>
    )
}
