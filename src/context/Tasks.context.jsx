//utils
import { createContext, useContext, useReducer } from "react"
import combineReducers from "combine-reducers"
import reduceReducers from "reduce-reducers"
// reducers
import { createNewTasks, manipulationsTasks, updateEditId } from "../reducers/taks"

const init = { editId: null, tasksList: [] }

const TasksContext = createContext()

const tasksReducers = reduceReducers(createNewTasks, manipulationsTasks)

const indexReducer = combineReducers({
	editId: updateEditId,
	tasksList: tasksReducers
})

export const useTasksContext = () => {
	return useContext(TasksContext)
}

export const TasksContextProvider = ({ children }) => {
	const [tasks, dispatch] = useReducer(indexReducer, init)

	return <TasksContext.Provider value={[tasks, dispatch]}>{children}</TasksContext.Provider>
}
