// import icons
import { MdOutlineMailOutline } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineLockClosed } from "react-icons/hi";
import { BiShow } from "react-icons/bi";

// import styles
import styles from "./SettingsModal.module.css";

const SettingsModal = () => {
  return (
    <>
      <div>
        <div className={styles.form}>
          <div className={styles.formContainer}>
            <div className={styles.inputContainer}>
              <div className={styles.iconLeft}>
                <IoPersonOutline />
              </div>
              <input type="text" placeholder="Name" />
            </div>

            <div className={styles.inputContainer}>
              <div className={styles.iconLeft}>
                <MdOutlineMailOutline />
              </div>
              <input type="text" placeholder="Update Email" />
              <div className={styles.iconRight}>
                <BiShow style={{ color: "white" }} />
              </div>
            </div>

            <div className={styles.inputContainer}>
              <div className={styles.iconLeft}>
                <HiOutlineLockClosed />
              </div>
              <input type="password" placeholder="Old Password" />
              <div className={styles.iconRight}>
                {/* <BiHide /> */}
                <BiShow />
              </div>
            </div>

            <div className={styles.inputContainer}>
              <div className={styles.iconLeft}>
                <HiOutlineLockClosed />
              </div>
              <input type="password" placeholder="New Password" />
              <div className={styles.iconRight}>
                {/* <BiHide /> */}
                <BiShow />
              </div>
            </div>

            <div className={styles.buttonContainer}>
              <button className={styles.updateBtn}>Update</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsModal;
