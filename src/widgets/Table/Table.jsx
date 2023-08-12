//utils
import uuid4 from "uuid4"
//styles
import styles from "./Table.module.css"
//hooks
import useInput from "../../hooks/useInput"
//context
import { useTasksContext } from "../../context/Tasks.context"
//actions
import { saveTaskAction, editTaskAction, deleteTaskAction, saveEditIdAction, clearEditIdAction } from "../../actions/tasks.action"
//conponents
import InputPanel from "../../components/InputPanel/InputPanel"
import { Input, ButtonWithText } from "../../components/ButtonsInputs/ButtonsInputs"
import List from "../../components/List/List"
import Task from "../../components/Task/Task"

export default function Table() {
	const [nameInput, onNameInput] = useInput("")
	const [priceInput, onPriceInput] = useInput("")

	const [{ editId, tasksList }, dispatch] = useTasksContext()

	const onCancle = () => {
		onNameInput("")
		onPriceInput("")
		dispatch(clearEditIdAction())
	}

	const onDelete = id => {
		dispatch(deleteTaskAction(id))
		onCancle()
	}

	const onEdit = id => {
		const currentTask = tasksList.find(task => task.id === id)
		onNameInput(currentTask.title)
		onPriceInput(currentTask.price)
		dispatch(saveEditIdAction(id))
	}

	const onSave = () => {
		if (nameInput && priceInput) {
			const task = {
				id: editId || uuid4(),
				title: nameInput,
				price: priceInput
			}

			dispatch(editId ? editTaskAction(task) : saveTaskAction(task))
			dispatch(clearEditIdAction())
			onCancle()
		}
	}

	return (
		<div className={styles.table}>
			<InputPanel>
				<Input onChange={onNameInput} input={nameInput} />
				<Input onChange={onPriceInput} input={priceInput} />
				<ButtonWithText text={"Save"} onClick={onSave} />
				{nameInput || priceInput ? <ButtonWithText text={"Cancle"} onClick={onCancle} /> : <></>}
			</InputPanel>
			<List data={tasksList}>{list => list.map(task => <Task key={task.id} onDelete={onDelete} onEdit={onEdit} {...task} />)}</List>
		</div>
	)
}
