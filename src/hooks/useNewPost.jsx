// utils
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import uuid4 from "uuid4"
//hooks
import { useRequest } from "./useRequest"
import useInput from "./useInput"

export default function useNewPost({ postId = "", method = "POST", url, pageUrl }) {
	const [sendApprove, setSendApprove] = useState(false)
	const [body, setBody] = useState({})
	const navigate = useNavigate()

	const transitPage = () => navigate(pageUrl)

	const { stateLoading, data } = useRequest({ url, sendApprove, method, body, finallyAction: transitPage })
	const [inputNewPost, setInputNewPost] = useInput()

	const onNewPost = methodTrigger => {
		if (inputNewPost.trim() || methodTrigger == "DELETE") {
			const id = postId || uuid4()
			setBody({ id, content: inputNewPost })
			setSendApprove(true)
			setInputNewPost("")
		}
	}

	return {
		data,
		stateLoading,
		inputNewPost,
		setInputNewPost,
		onNewPost
	}
}
