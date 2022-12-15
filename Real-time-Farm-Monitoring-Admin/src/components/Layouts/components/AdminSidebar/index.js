import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

import styles from "./AdminSidebar.module.css";
import logo from "../../../../assets/images/Logo.png";

function AdminSidebar({ children }) {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <div>
      <SideNav
        onToggle={() => setOpen(!open)}
        className={styles.Nav}
        style={{
          backgroundColor: "#05386B",
          maxWidth: "20%",
          height: "100%",
          position: "fixed",
          overflow: "scroll",
        }}
      >
        <SideNav.Toggle />

        {open && (
          <div>
            <img src={logo} alt="" style={{ width: "80%" }} />

            <div
              className="mb-5"
              style={{
                color: "white",
                fontSize: "1.2rem",
              }}
            >
              Hello, Admin
            </div>
          </div>
        )}
        <SideNav.Nav>
          <NavItem eventKey="chart">
            <NavIcon>
              <Link to="/logins-report">
                <Icon
                  icon="ep:histogram"
                  color="white"
                  width="30"
                  height="30"
                />
              </Link>
            </NavIcon>
            <NavText>Thống Kê Truy Cập Người Dùng</NavText>
          </NavItem>

          <NavItem eventKey="feedbacks">
            <NavIcon>
              <Link to="/feedbacks">
                <Icon icon="carbon:idea" color="white" width="30" height="30" />
              </Link>
            </NavIcon>
            <NavText>Góp Ý</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </div>
  );
}

export default AdminSidebar;
