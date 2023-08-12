//styles
import styles from "./Task.module.css"
//components
import { ButtonWithIcon } from "../ButtonsInputs/ButtonsInputs"

export default function Task({ title, price, id, onEdit, onDelete }) {
	const onEditHandler = () => {
		onEdit(id)
	}
	const onDeleteHandler = () => {
		onDelete(id)
	}

	return (
		<>
			<li className={styles.task}>
				{title} {price}
				<div>
					<ButtonWithIcon icon={<span className="material-symbols-outlined">edit</span>} onClick={onEditHandler} />
					<ButtonWithIcon icon={<span className="material-symbols-outlined">delete</span>} onClick={onDeleteHandler} />
				</div>
			</li>
		</>
	)
}
