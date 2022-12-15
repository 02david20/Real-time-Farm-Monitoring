import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'

function Navbar() {
    return (
        <div className='settingpumpNavbar'>
            <Link to='/manage_farm/tasking' className='tasking1'>Lập công việc</Link>
            <Link to='/manage_farm/setting-pump' className='setting-pump2'>Thiết lập máy bơm</Link>
        </div>
    )
}

export default Navbar