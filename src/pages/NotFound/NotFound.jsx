import React from "react";
import { Link } from "react-router-dom";

// import assets
import error from "../../assets/vecteezy-404.jpg";

// import styles
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img className={styles.error} src={error} alt="error" />
        </div>
        <div className={styles.textContainer}>
          <h1>Page not found!</h1>
          <p>The page that you are looking for does not exist.</p>
        </div>
        <div className={styles.buttonContainer}>
          <p>Go to Login?</p>
          <button className={styles.button}>
            <Link className={styles.link} to="/">
              Login
            </Link>
          </button>
        </div>

        <footer className={styles.footer}>
          <a href="https://www.vecteezy.com/free-vector/404">
            404 Vectors by Vecteezy
          </a>
        </footer>
      </div>
    </>
  );
};

export default NotFound;
