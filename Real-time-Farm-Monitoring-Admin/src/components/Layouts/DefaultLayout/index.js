import AdminSidebar from "../components/AdminSidebar";
import styles from "./DefaultLayout.module.css";

function DefaultLayout({ children }) {
  return (
    <div>
      <AdminSidebar />

      <div className={styles.container}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
