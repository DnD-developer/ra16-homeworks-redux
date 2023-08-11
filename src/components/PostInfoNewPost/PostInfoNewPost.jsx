import "./PostInfoNewPost.css"

export function PostInfoNewPost({ text, onChange }) {
	const onChangeHandler = ({ target }) => {
		const { value } = target
		onChange(value)
	}
	return (
		<div className="post-info-new-post">
			<input type="text" className="post-info-new-post__input" placeholder="Введите текст" onChange={onChangeHandler} value={text} />
		</div>
	)
}
