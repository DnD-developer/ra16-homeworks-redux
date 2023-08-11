import "./PostInfoButtons.css"

export function ButtonsManipulationPosts({ text, color = "blue", onClick }) {
	const classes = `buttons-manipulation-posts ${color}`

	return (
		<>
			<button className={classes} onClick={onClick}>
				{text}
			</button>
		</>
	)
}

export function PanelForButtonsManipulationPosts({ children }) {
	return (
		<>
			<div className="panel-for-buttons-manipulation-posts">{children}</div>
		</>
	)
}
