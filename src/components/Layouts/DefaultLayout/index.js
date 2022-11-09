import Header from "../components/Header";
import UserSidebar from "../components/UserSidebar";
import styles from "./DefaultLayout.module.css";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header></Header>

      <UserSidebar></UserSidebar>

      <div className={styles.container}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
