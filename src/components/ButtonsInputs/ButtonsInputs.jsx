// styles
import buttonsInputs from "./buttonsinputs.module.css"

export function ButtonWithText({ text, onClick }) {
	const onClickHansler = () => {
		onClick()
	}

	return (
		<button className={buttonsInputs.button} onClick={onClickHansler}>
			{text}
		</button>
	)
}

export function ButtonWithIcon({ icon, onClick }) {
	return (
		<button className={buttonsInputs.button} onClick={onClick}>
			{icon}
		</button>
	)
}

export function Input({ input, onChange }) {
	const onChangeHandler = ({ target }) => {
		const { value } = target
		onChange(value)
	}

	return <input className={buttonsInputs.input} value={input} onChange={onChangeHandler} />
}
