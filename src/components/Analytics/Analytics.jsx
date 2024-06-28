// import modals
import AnalyticsModal from "../modals/AnalyticsModals/AnalyticsModal.jsx";

// import styles
import styles from "./Analytics.module.css";

const Analytics = () => {
  return (
    <>
      <h1 className={styles.title}>Analytics</h1>
      <div className={styles.container}>
        <AnalyticsModal />
      </div>
    </>
  );
};

export default Analytics;
