import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import TaskDetails from "./pages/TaskDetails/TaskDetails.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

// import components
import Analytics from "./components/Statistics/Statistics.jsx";
import Settings from "./components/Settings/Settings.jsx";
import Board from "./components/Board/Board.jsx";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/dashboard/*" element={<Dashboard />} />
					<Route path="/settings" element={<Settings />} />
					<Route path="/analytics" element={<Analytics />} />
					<Route path="/taskdetails" element={<TaskDetails />} />
					<Route path="/board" element={<Board />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
