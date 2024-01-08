import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <>
            <ul className="d-flex gap-2 p-3">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/contact-list'>Contact List</Link></li>
            </ul>
        </>
    )
}
