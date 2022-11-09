import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'

function Navbar() {
    return (
        <div className='navbar'>
            <Link to='/manage_farm/tasking' className='tasking'>Lập công việc</Link>
            <Link to='/manage_farm/setting-pump' className='setting-pump'>Thiết lập máy bơm</Link>
        </div>
    )
}

export default Navbar