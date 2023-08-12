export const deleteTaskAction = id => {
	return {
		type: "deleteTask",
		payload: id
	}
}

export const saveTaskAction = task => {
	return {
		type: "saveTask",
		payload: task
	}
}

export const editTaskAction = task => {
	return {
		type: "editTask",
		payload: task
	}
}

export const saveEditIdAction = id => {
	return {
		type: "saveId",
		payload: id
	}
}

export const clearEditIdAction = () => {
	return {
		type: "clearId"
	}
}

export const searchTasksAction = text => {
	return {
		type: "search",
		payload: text
	}
}

export const updateDataSearchTasksAction = tasksList => {
	return {
		type: "updateData",
		payload: tasksList
	}
}
