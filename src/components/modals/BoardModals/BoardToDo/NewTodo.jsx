import { useState, useMemo } from "react";
import styles from "./ToDo.module.css";
function NewTodo() {
	const [selectedDate, setSelectedDate] = useState(null);
	const [selectedPriority, setSelectedPriority] = useState("moderate");
	const [title, setTitle] = useState("");
	const [tasklist, setTasklist] = useState([]);
	const [taskCounter, setTaskCounter] = useState(0);
	const handlePriorityChange = (event) => {
		setSelectedPriority(event.target.value);
	};
	const handleDateChange = (event) => {
		setSelectedDate(event.target.value);
	};
	const handleAddTask = () => {
		setTaskCounter((prev) => prev + 1);
		setTasklist((prev) => {
			return [
				...prev,
				{ key: taskCounter, isChecked: false, title: "No work to be done." },
			];
		});
	};
	const handleSubmit = async (event) => {
		event.preventDefault();
		const formData = {
			title: title,
			priority: selectedPriority,
			deadline: selectedDate,
			tasklist: tasklist,
		};
		try {
			const response = await fetch("http://localhost:8080/tasks/create", {
				method: "POST",
				credentials: "include",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});
			const data = await response.json();
			console.log(data);
		} catch (error) {
			console.log("Error: ", error);
		}
	};
	return (
		<div className={styles.container}>
			<input
				type="text"
				name="title"
				placeholder="Title"
				value={title}
				onChange={(event) => setTitle(event.target.value)}
			/>
			<section>
				<span>Priority: </span>
				<label>
					<input
						type="radio"
						name="priority"
						value="high"
						checked={selectedPriority === "high"}
						onChange={handlePriorityChange}
					/>
					HIGH PRIORITY
				</label>
				<label>
					<input
						type="radio"
						name="priority"
						value="moderate"
						checked={selectedPriority === "moderate"}
						onChange={handlePriorityChange}
					/>
					MODERATE PRIORITY
				</label>
				<label>
					<input
						type="radio"
						name="priority"
						value="low"
						checked={selectedPriority === "low"}
						onChange={handlePriorityChange}
					/>
					LOW PRIORITY
				</label>
			</section>
			<section>{AddTaskModal(tasklist, setTasklist)}</section>
			<button type="button" onClick={handleAddTask}>
				{" "}
				ADD TASK
			</button>
			<input
				type="date"
				name="deadline"
				value={selectedDate}
				onChange={handleDateChange}
			/>

			<button type="button" onClick={(event) => handleSubmit(event)}>
				SAVE
			</button>
		</div>
	);
}

export default NewTodo;

const AddTaskModal = (tasklist, setTasklist) => {
	const handleTaskChange = (index, event) => {
		setTasklist((prev) => {
			return prev.map((item, i) => {
				return i === index ? { ...item, title: event.target.value } : item;
			});
		});
	};
	const handleCheckboxChange = (index, event) => {
		const { checked } = event.target;
		setTasklist((prev) => {
			return prev.map((item, i) => {
				return i === index ? { ...item, isChecked: checked } : item;
			});
		});
	};
	const handleRemoveTask = (index, event) => {
		const newTasklist = tasklist
			.slice(0, index)
			.concat(tasklist.slice(index + 1));
		setTasklist(newTasklist);
	};

	const mappedData = useMemo(() => {
		return tasklist?.map((element, index) => {
			// console.log(tasklist);
			return (
				<section
					className={styles.tasklist_container}
					key={tasklist[index].key}
				>
					<div className="">
						<input
							type="checkbox"
							checked={tasklist[index]?.isChecked}
							onChange={(event) => handleCheckboxChange(index, event)}
						/>
						<input
							type="text"
							value={tasklist[index]?.title}
							onChange={(event) => handleTaskChange(index, event)}
						/>
					</div>
					<section className="">
						<button
							type="button"
							onClick={(event) => handleRemoveTask(index, event)}
						>
							X
						</button>
					</section>
				</section>
			);
		});
	}, [tasklist]);

	return mappedData;
};
