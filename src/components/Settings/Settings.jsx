// import modals
import SettingsModal from "../modals/SettingsModals/SettingsModal";

// import styles
import styles from "./Settings.module.css";

const Settings = () => {
  return (
    <>
      <h1 className={styles.title}>Settings</h1>

      <div className={styles.container}>
        <SettingsModal />
      </div>
    </>
  );
};

export default Settings;
