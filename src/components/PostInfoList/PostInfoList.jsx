import "./PostInfoList.css"

export default function PostInfoList({ children, data }) {
	return <ul className="post-info-list">{children(data)}</ul>
}
