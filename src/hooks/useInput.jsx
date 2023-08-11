//utils
import { useState } from "react"

export default function useInput(value = "") {
	const [inputValue, setInput] = useState(value)

	const onInput = text => {
		setInput(text)
	}

	return [inputValue, onInput]
}
