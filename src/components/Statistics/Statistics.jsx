// import modals
import StatisticsModal from "../modals/StatisticsModals/StatisticsModal.jsx";

// import styles
import styles from "./Statistics.module.css";

const Statistics = () => {
	return (
		<>
			<h1 className={styles.title}>Statistics</h1>
			<div className={styles.container}>
				<StatisticsModal />
			</div>
		</>
	);
};

export default Statistics;
