// hooks
import useNewPost from "../../hooks/useNewPost"
//constants
import { pathRouters } from "../../shared/postInfo/pathRouters"
import { pathServer } from "../../shared/postInfo/pathServer"
//Components
import { PanelForButtonsManipulationPosts, ButtonsManipulationPosts } from "../../components/PostInfoButtons/PostInfoButtons"
import { PostInfoNewPost } from "../../components/PostInfoNewPost/PostInfoNewPost"

export default function CreatePostPage() {
	const { stateLoading, inputNewPost, setInputNewPost, onNewPost } = useNewPost({ url: pathServer.home, pageUrl: pathRouters.homePage })

	const onCreate = () => {
		onNewPost()
	}

	if (stateLoading) {
		return (
			<>
				<h1>Загрузка</h1>
			</>
		)
	}

	return (
		<>
			<PostInfoNewPost text={inputNewPost} onChange={setInputNewPost} />

			<PanelForButtonsManipulationPosts>
				<ButtonsManipulationPosts text="Опубликовать пост" onClick={onCreate} />
			</PanelForButtonsManipulationPosts>
		</>
	)
}
