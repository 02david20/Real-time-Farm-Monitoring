import SideNav, {NavItem, NavIcon, NavText} from "@trendmicro/react-sidenav"
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { useState } from "react";
import { Icon } from '@iconify/react';

import React from 'react';
import {
    Nav,
    NavLink,
    // Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from '../../../Navbar/NavbarElements';
// import styles from "./UserSidebar.module.css"
// import logo from '../../../../assets/images/Logo.png'
// https://www.geeksforgeeks.org/create-a-responsive-navbar-using-reactjs/

function Header() {
    return ( 
        <>
    <Nav>
    {/* <Bars /> */}

    <NavMenu>
        <NavLink to='/anoun' activeStyle>
        Thông báo
        </NavLink>
        <NavLink to='/notic' activeStyle>
        Tin nhắn
        </NavLink>
        <NavLink to='/home' activeStyle>
        Trang chủ
        </NavLink>
        <NavLink to='/region' activeStyle>
        Vùng
        </NavLink>
        <NavLink to='/newspace' activeStyle>
        Tạo khu vực
        </NavLink>
        <NavLink to='/see' activeStyle>
        Xem khu vực
        </NavLink>
        <NavLink to='/nhietdo' activeStyle>
        Nhiệt độ
        </NavLink>
        <NavLink to='/doam' activeStyle>
        Độ ẩm
        </NavLink>
        <NavLink to='/maybom' activeStyle>
        Máy bơm
        </NavLink>
        {/* Second Nav */}
        {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
    </NavMenu>
    {/* <NavBtn>
        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
    </NavBtn> */}
    </Nav>
    </>
    );
}

export default Header;