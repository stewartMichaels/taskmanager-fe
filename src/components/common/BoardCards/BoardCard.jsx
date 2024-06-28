// import assets
import option from "../../../assets/board/option.svg";

// import styles
import styles from "./BoardCard.module.css";

const BoardCard = ({ priority, title }) => {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.priorityOptions}>
          <p>{priority}</p>
          <img src={option} alt="Option" />
        </div>
        <p>{title}</p>
      </div>
    </>
  );
};

export default BoardCard;
