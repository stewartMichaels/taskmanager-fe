import { Link, useLocation } from "react-router-dom";

// import assets
import logo from "../../../assets/dashboard/codesandbox.svg";
import board from "../../../assets/dashboard/board.svg";
import analytics from "../../../assets/dashboard/analytics.svg";
import settings from "../../../assets/dashboard/settings.svg";
import logout from "../../../assets/dashboard/logout.svg";

// import styles
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname.includes(path);

  function handleLogout() {
    console.log("Logout logic here");
  }

  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
          <p>Pro Manage</p>
        </div>

        <ul className={styles.menu}>
          <li
            className={
              isActive("/dashboard/board")
                ? `${styles.menuItem} ${styles.active}`
                : styles.menuItem
            }
          >
            <div className={styles.icon}>
              <img src={board} alt="Board" />
              <Link className={styles.linkTitle} to="board">
                Board
              </Link>
            </div>
          </li>

          <li
            className={
              isActive("/dashboard/analytics")
                ? `${styles.menuItem} ${styles.active}`
                : styles.menuItem
            }
          >
            <div className={styles.icon}>
              <img src={analytics} alt="Analytics" />
              <Link className={styles.linkTitle} to="analytics">
                Analytics
              </Link>
            </div>
          </li>

          <li
            className={
              isActive("/dashboard/settings")
                ? `${styles.menuItem} ${styles.active}`
                : styles.menuItem
            }
          >
            <div className={styles.icon}>
              <img src={settings} alt="Settings" />
              <Link className={styles.linkTitle} to="settings">
                Settings
              </Link>
            </div>
          </li>

          <li className={styles.logoutItem}>
            <button className={styles.logoutBtn} onClick={handleLogout}>
              <img src={logout} alt="Logout" />
              Logout
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
