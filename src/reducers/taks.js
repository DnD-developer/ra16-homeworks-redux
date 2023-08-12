export function createNewTasks(state, action) {
	switch (action.type) {
		case "saveTask":
			return [...state, action.payload]
		case "editTask":
			const updateTaskList = state.map(task => {
				if (task.id === action.payload.id) {
					return {
						...action.payload
					}
				}

				return task
			})
			return updateTaskList

		default:
			return state
	}
}

export function updateEditId(state, action) {
	switch (action.type) {
		case "saveId":
			return action.payload
		case "clearId":
			return null
		default:
			return state
	}
}

export function manipulationsTasks(state, action) {
	switch (action.type) {
		case "deleteTask":
			return state.filter(({ id }) => id !== action.payload)
		default:
			return state
	}
}
