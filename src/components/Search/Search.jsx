//styles
import styles from "./Search.module.css"
//components
import { ButtonWithText } from "../ButtonsInputs/ButtonsInputs"

export default function Search({ onClick, onChange, input, load }) {
	const onChangeHandler = ({ target }) => {
		const { value } = target

		onChange(value)
	}

	return (
		<div className={styles.search}>
			<input type="text" className={styles.input} value={input} onChange={onChangeHandler} />
			<ButtonWithText text="Cancle" onClick={onClick} />
			{load ? <span className="material-symbols-outlined">sync</span> : <></>}
		</div>
	)
}
