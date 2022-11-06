import SideNav, {NavItem, NavIcon, NavText} from "@trendmicro/react-sidenav"
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { useState } from "react";
import { Icon } from '@iconify/react';

import styles from "./UserSidebar.module.css"
import logo from '../../../../assets/images/Logo.png'

function UserSidebar({children}) {
    const [open, setOpen] = useState(false)
    console.log(open)
    return ( 
        <div>        

            <SideNav
                    onToggle={
                        ()=>setOpen(!open)
                    }
                    className = {styles.Nav}
                    style={{backgroundColor:"#05386B",
                            maxWidth:"20%"  ,
                            height:"100%",
                            position:"fixed",
                            overflow: "scroll"
                    }}
                >
                <SideNav.Toggle />
                
                {open && 
                    <div>
                        <img src={logo} alt=""
                            style={{width:'80%'}}
                        />
                        
                        <div    
                            className="mb-5"
                            style={{
                                color:"white",
                                fontSize:"1.2rem" 
                        }}>Hello, User</div>
                    </div>
                }
                <SideNav.Nav defaultSelected="home" >

                    <NavItem eventKey="home">
                        <NavIcon>
                        <Icon icon="noto-v1:woman-farmer-light-skin-tone" width="30" height="30" />
                        </NavIcon>
                        <NavText>
                            Khu vườn
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="history">
                        <NavIcon>
                        <Icon icon="ant-design:history-outlined" color="white" width="30" height="30" />
                        </NavIcon>
                        <NavText>
                            Lịch sử
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="planning">
                        <NavIcon>
                         <Icon icon="icon-park-outline:plan" color="white" width="30" height="30" />
                        </NavIcon>
                        <NavText>
                            Lên kế hoạch
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="forumn">
                        <NavIcon>
                            <Icon icon="material-symbols:forum-outline" color="white" width="30" height="30" />
                        </NavIcon>
                        <NavText>
                            Diễn đàn
                        </NavText>
                    </NavItem>


                    <NavItem eventKey="charts">
                        <NavIcon>
                        <Icon icon="carbon:idea" color="white" width="30" height="30" />
                        </NavIcon>
                        <NavText>
                            Góp ý
                        </NavText>
                    </NavItem>

                    
                    {open && 
                        <img src={logo} alt=""
                            style={{width:'80%'}}
                        />                        
                    }

                    <NavItem>
                        <NavIcon>
                        <Icon icon="codicon:sign-out" color="white" width="30" height="30" />
                        </NavIcon>

                        <NavText>
                            Sign Out
                        </NavText>
                    </NavItem>
                    </SideNav.Nav>
            </SideNav>

            <div className="container">
                <div className = "content">{children}</div>
            </div>

        </div>
    );
}

export default UserSidebar;