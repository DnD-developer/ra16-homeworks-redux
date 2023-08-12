// utils
import React from "react"
import ReactDOM from "react-dom/client"
//context
import { TasksContextProvider } from "./context/Tasks.context"
//components
import Table from "./widgets/Table/Table"

ReactDOM.createRoot(document.getElementById("root")).render(
	<>
		<TasksContextProvider>
			<Table />
		</TasksContextProvider>
	</>
)
