//assets
import "./PostInfoItem.css"
//utils
import { useState } from "react"
import { Navigate } from "react-router-dom"
//services
import calcTime from "../../service/calcTime"

export default function PostInfoItem({ id, content, created }) {
	const url = `/posts/${id}`
	const [transit, setTransit] = useState(false)

	const onClickHandler = () => {
		if (id != 0) {
			setTransit(true)
		}
	}

	return (
		<>
			<li className="post-info-item" key={id} onClick={onClickHandler}>
				<p className="post-info-item__date">{calcTime(created)}</p>
				<h2 className="post-info-item__title">{content}</h2>
			</li>
			{transit ? <Navigate to={url} replace={true} /> : <></>}
		</>
	)
}
