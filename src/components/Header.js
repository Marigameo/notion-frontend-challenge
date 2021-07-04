import React from 'react'
import './header.css'

export default function Header() {
    return (
        <nav className="productNav">
            <div className="logo">YourUni</div>
            <div className="links">
                <a href='/#' className="active">Product</a>
                <a href='/#'>Download</a>
                <a href='/#'>Pricing</a>
            </div>
        </nav>
    )
}
