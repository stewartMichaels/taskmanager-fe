import styles from "./ToDo.module.css";
import { useState } from "react";
import NewTodo from "./NewTodo";
const ToDo = () => {
	const [isActive, setIsActive] = useState(false);
	const handleClick = () => {
		setIsActive((prev) => !prev);
	};
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<section>Todo</section>
				<section>
					<button
						type="button"
						className={styles.add_button}
						onClick={handleClick}
					>
						ADD
					</button>
					{isActive && <NewTodo />}
				</section>
			</div>
		</div>
	);
};

export default ToDo;
