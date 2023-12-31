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
import Search from "../../components/Search/Search"
import useSearch from "../../hooks/useSearch"

export default function Table() {
	const [{ editId, searchTasks, dataTasks }, dispatch] = useTasksContext()

	const [nameInput, onNameInput] = useInput("")
	const [priceInput, onPriceInput] = useInput("")

	const [searchInput, onSearchInput, loadSearch, onSearchCancle] = useSearch(dispatch, dataTasks)

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
		const currentTask = dataTasks.find(task => task.id === id)
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
			onCancle()
		}
	}

	return (
		<div className={styles.table}>
			<Search onChange={onSearchInput} input={searchInput} onClick={onSearchCancle} load={loadSearch} />
			<InputPanel>
				<Input onChange={onNameInput} input={nameInput} />
				<Input onChange={onPriceInput} input={priceInput} />
				<ButtonWithText text={"Save"} onClick={onSave} />
				{nameInput || priceInput ? <ButtonWithText text={"Cancle"} onClick={onCancle} /> : <></>}
			</InputPanel>
			<List data={searchInput ? searchTasks : dataTasks}>
				{list => list.map(task => <Task key={task.id} onDelete={onDelete} onEdit={onEdit} {...task} />)}
			</List>
		</div>
	)
}
