//utils
import { useState, useEffect } from "react"
//hooks
import useInput from "./useInput"
// actions
import { searchTasksAction, updateDataSearchTasksAction } from "../actions/tasks.action"

export default function useSearch(dispatch, dataTasks) {
	const [searchInput, onSearchInput] = useInput("")
	const [loadSearch, setLoadSearch] = useState(false)

	useEffect(() => {
		setLoadSearch(true)
		dispatch(updateDataSearchTasksAction(dataTasks))
		const timeOutSearch = setTimeout(() => {
			dispatch(searchTasksAction(searchInput))
			setLoadSearch(false)
		}, 300)

		return () => clearTimeout(timeOutSearch)
	}, [searchInput])

	useEffect(() => {
		dispatch(updateDataSearchTasksAction(dataTasks))
	}, [dataTasks])

	const onSearchCancle = () => {
		onSearchInput("")
	}

	return [searchInput, onSearchInput, loadSearch, onSearchCancle]
}
