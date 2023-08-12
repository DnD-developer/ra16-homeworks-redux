export function createNewTasks(state, action) {
	switch (action.type) {
		case "saveTask":
			return [...state, action.payload]
		case "editTask":
			const updateTasksList = state.map(task => {
				if (task.id === action.payload.id) {
					return {
						...action.payload
					}
				}
				return task
			})
			return updateTasksList

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
			const updateTasksList = state.filter(({ id }) => id !== action.payload)
			return updateTasksList
		default:
			return state
	}
}

export function searchTasks(state, action) {
	switch (action.type) {
		case "search":
			if (action.payload) {
				return state.filter(({ title }) => title.includes(action.payload) || action.payload.includes(title))
			}

			return state
		case "updateData":
			return [...action.payload]
		default:
			return state
	}
}
