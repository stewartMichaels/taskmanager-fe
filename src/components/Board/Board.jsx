// import components
import Header from "../common/Header/Header";

// import modals
import BoardDateModal from "../modals/BoardModals/BoardDate/BoardDateModal";
import BacklogModal from "../modals/BoardModals/BoardBacklog/BacklogModal";
import ToDo from "../modals/BoardModals/BoardToDo/ToDo";
import InProgress from "../modals/BoardModals/BoardInProgress/InProgress";
import Done from "../modals/BoardModals/BoardDone/Done";

// import assets
import add from "../../assets/board/add-people.svg";

// import styles
import styles from "./Board.module.css";

const Board = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>
            <p>Board</p>
            <button className={styles.addButton}>
              <img src={add} alt="Add People" />
              Add People
            </button>
          </div>

          <div className={styles.dateModal}>
            <BoardDateModal />
          </div>
        </div>

        <div className={styles.tasksContainer}>
          <div className={styles.tasksModals}>
            <div className={styles.tasksModal}>
              <BacklogModal />
            </div>
            <div className={styles.tasksModal}>
              <ToDo />
            </div>
            <div className={styles.tasksModal}>
              <InProgress />
            </div>
            <div className={styles.tasksModal}>
              <Done />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;
