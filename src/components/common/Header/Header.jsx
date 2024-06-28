import moment from "moment";

// import styles
import styles from "./Header.module.css";

const Header = () => {
  let name = "John";

  return (
    <>
      <div className={styles.header}>
        <div className={styles.leftTitle}>Welcome! {name}</div>
        <div className={styles.rightDate}>
          {moment().format("DD MMM, YYYY")}
        </div>
      </div>
    </>
  );
};

export default Header;
