import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav"
import { Dropdown,Card } from "react-bootstrap";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { useState } from "react";
import { Icon } from '@iconify/react';
import { CreateNewField, Filter, LoadArea } from '../../../../api/operator_in_map';
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
                    <Dropdown className="d-inline mx-2">
                        <Dropdown.Toggle id="dropdown-autoclose-true">
                            Thông báo
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#">
                                <Card>
                                    <Card.Body> <Icon icon="material-symbols:warning" color="red" width="30" height="30"/>Có vấn đề xảy ra với Sensor Nhiệt độ ID:1</Card.Body>
                                </Card>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <Card>
                                    <Card.Body><Icon icon="mdi:warning-circle-outline" color="#e28743" width="40" height="30" />Máy bơm ID:20 sắp hết nước</Card.Body>
                                </Card>
                            </Dropdown.Item>
                            <Dropdown.Item href="#">
                                <Card>
                                    <Card.Body><Icon icon="mdi:warning-circle-outline" color="#e28743" width="40" height="30" />Đã 10p chưa nhận được tín hiệu của Sensor ID:12</Card.Body>
                                </Card>
                            </Dropdown.Item>

                        </Dropdown.Menu>
                    </Dropdown>


                    <button onClick={LoadArea}>Vùng</button>
                    <button onClick={CreateNewField}>Tạo khu vực</button>

                    <button onClick={() => Filter('temp')} >Nhiệt độ</button>
                    <button onClick={() => Filter('moist')} >Độ ẩm</button>
                    <button onClick={() => Filter('pump')} >Máy bơm</button>
                    <NavLink to='/field/setting' style={{color: "white"}}>
                        Cài đặt
                    </NavLink>
                    <NavLink to='/field/dashboard' style={{color: "white"}} >
                        Dashboard
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