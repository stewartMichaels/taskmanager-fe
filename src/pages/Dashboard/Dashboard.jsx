import { Routes, Route, Navigate } from "react-router-dom";

// import components
import Sidebar from "../../components/common/Sidebar.jsx/Sidebar.jsx";
import Analytics from "../../components/Statistics/Statistics.jsx";
import Settings from "../../components/Settings/Settings.jsx";
import Board from "../../components/Board/Board.jsx";

// import styles
import styles from "./Dashboard.module.css";

const Dashboard = () => {
	// function handleLogout() {
	//   console.log("Logout logic here");
	// }
	return (
		<>
			<div className={styles.container}>
				<div className={styles.sidebar}>
					<Sidebar />
				</div>

				<div className={styles.content}>
					<Routes>
						<Route path="/" element={<Navigate replace to="board" />} />
						<Route path="board" element={<Board />} />
						<Route path="analytics" element={<Analytics />} />
						<Route path="settings" element={<Settings />} />
					</Routes>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
