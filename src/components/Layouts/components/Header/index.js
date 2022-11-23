import SideNav, {NavItem, NavIcon, NavText} from "@trendmicro/react-sidenav"
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { useState } from "react";
import { Icon } from '@iconify/react';
import {CreateNewField, Filter, LoadArea} from '../../../../api/operator_in_map';
import styles from './Header.module.css';
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
        <button onClick={LoadArea}>Vùng</button>
        <button onClick={CreateNewField}>Tạo khu vực</button>
        <NavLink to='/see' activeStyle>
        Xem khu vực
        </NavLink>
        <button onClick={() => Filter('temp')} >Nhiệt độ</button>
        <button onClick={() => Filter('moist')} >Độ ẩm</button>
        <button onClick={() => Filter('pump')} >Máy bơm</button>
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