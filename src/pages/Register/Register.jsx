import React from "react";
import { useNavigate } from "react-router-dom";

// import icons
import { MdOutlineMailOutline } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineLockClosed } from "react-icons/hi";
import { BiHide } from "react-icons/bi";
import { BiShow } from "react-icons/bi";

// import assets
import artwork from "../../assets/Art.svg";
import backdrop from "../../assets/ArtBack.svg";

// import styles
import styles from "./Register.module.css";

const Register = () => {
  let navigate = useNavigate();

  function handleLogin() {
    navigate("/");
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftContainer}>
          <div className={styles.artContainer}>
            <img className={styles.art} src={artwork} alt="artwork" />
            <img className={styles.backdrop} src={backdrop} alt="backdrop" />
          </div>
          <div className={styles.welcomeText}>
            <p>Welcome aboard my friend</p>
            <p>just a couple of clicks and we start</p>
          </div>
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.title}>Register</div>
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
                <input type="text" placeholder="Email" />
                <div className={styles.iconRight}>
                  <BiShow style={{ color: "white" }} />
                </div>
              </div>

              <div className={styles.inputContainer}>
                <div className={styles.iconLeft}>
                  <HiOutlineLockClosed />
                </div>
                <input type="password" placeholder="Password" />
                <div className={styles.iconRight}>
                  {/* <BiHide /> */}
                  <BiShow />
                </div>
              </div>

              <div className={styles.inputContainer}>
                <div className={styles.iconLeft}>
                  <HiOutlineLockClosed />
                </div>
                <input type="password" placeholder="Confirm Password" />
                <div className={styles.iconRight}>
                  {/* <BiHide /> */}
                  <BiShow />
                </div>
              </div>

              <div className={styles.buttonContainer}>
                <button className={styles.registerBtn}>Register</button>
              </div>
            </div>
          </div>
          <div className={styles.registerSection}>
            <p>Have an account?</p>
            <div className={styles.buttonContainer}>
              <button className={styles.loginBtn} onClick={handleLogin}>
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
