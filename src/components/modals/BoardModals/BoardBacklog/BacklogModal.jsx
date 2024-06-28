// import modal
import BoardCard from "../../../common/BoardCards/BoardCard";

// import assets
import collapse from "../../../../assets/board/collapse.svg";

// import styles
import styles from "./BacklogModal.module.css";

const cardData = [
  {
    priority: "High Priority",
    title: "Create a new dashboard",
  },
];

const BacklogModal = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Backlog</h1>
          <img src={collapse} alt="Collapse" />
        </div>
        <div>
          <BoardCard />
        </div>
      </div>
    </>
  );
};

export default BacklogModal;
