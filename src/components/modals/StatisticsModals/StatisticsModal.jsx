// import icons
import { FaCircle } from "react-icons/fa";

// import styles
import styles from "./StatisticsModal.module.css";

const StatisticsModal = () => {
	return (
		<>
			<div className={styles.container}>
				<div className={styles.leftContainer}>
					<div className={styles.list}>
						<div className={styles.tasks}>
							<div className={styles.iconTitle}>
								<FaCircle style={{ color: "#90C4CC", width: "12px" }} />
								<p className={styles.title}>Backlog Tasks</p>
							</div>
							<p className={styles.number}>16</p>
						</div>

						<div className={styles.tasks}>
							<div className={styles.iconTitle}>
								<FaCircle style={{ color: "#90C4CC", width: "12px" }} />
								<p className={styles.title}>To-Do Tasks</p>
							</div>
							<p className={styles.number}>14</p>
						</div>

						<div className={styles.tasks}>
							<div className={styles.iconTitle}>
								<FaCircle style={{ color: "#90C4CC", width: "12px" }} />
								<p className={styles.title}>In-Progress Tasks</p>
							</div>
							<p className={styles.number}>03</p>
						</div>

						<div className={styles.tasks}>
							<div className={styles.iconTitle}>
								<FaCircle style={{ color: "#90C4CC", width: "12px" }} />
								<p className={styles.title}>Completed Tasks</p>
							</div>
							<p className={styles.number}>22</p>
						</div>
					</div>
				</div>

				<div className={styles.rightContainer}>
					<div className={styles.list}>
						<div className={styles.tasks}>
							<div className={styles.iconTitle}>
								<FaCircle style={{ color: "#90C4CC", width: "12px" }} />
								<p className={styles.title}>Low Priority</p>
							</div>
							<p className={styles.number}>16</p>
						</div>

						<div className={styles.tasks}>
							<div className={styles.iconTitle}>
								<FaCircle style={{ color: "#90C4CC", width: "12px" }} />
								<p className={styles.title}>Moderate Priority</p>
							</div>
							<p className={styles.number}>14</p>
						</div>

						<div className={styles.tasks}>
							<div className={styles.iconTitle}>
								<FaCircle style={{ color: "#90C4CC", width: "12px" }} />
								<p className={styles.title}>High Priority</p>
							</div>
							<p className={styles.number}>03</p>
						</div>

						<div className={styles.tasks}>
							<div className={styles.iconTitle}>
								<FaCircle style={{ color: "#90C4CC", width: "12px" }} />
								<p className={styles.title}>Due Date Tasks</p>
							</div>
							<p className={styles.number}>03</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default StatisticsModal;
