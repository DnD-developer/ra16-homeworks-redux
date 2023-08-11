//utils
import { useNavigate } from "react-router-dom"
// hooks
import { useRequest } from "../../hooks/useRequest"
//constants
import { pathRouters } from "../../shared/postInfo/pathRouters"
import { pathServer } from "../../shared/postInfo/pathServer"
//components
import PostInfoList from "../../components/PostInfoList/PostInfoList"
import PostInfoItem from "../../components/PostInfoItem/PostInfoItem,"
import { PanelForButtonsManipulationPosts, ButtonsManipulationPosts } from "../../components/PostInfoButtons/PostInfoButtons"

export default function HomePage() {
	const { stateLoading, data } = useRequest({ url: pathServer.home })
	const navigate = useNavigate()

	if (stateLoading) {
		return <h1>Загрузка</h1>
	}

	return (
		<>
			<PanelForButtonsManipulationPosts>
				<ButtonsManipulationPosts
					text="Создать пост"
					onClick={() => {
						navigate(pathRouters.createPostPage)
					}}
				/>
			</PanelForButtonsManipulationPosts>
			<PostInfoList data={data}>
				{posts => {
					if (posts.length > 0) {
						return posts.map(({ id, content, created }) => <PostInfoItem key={id} id={id} content={content} created={created} />)
					}

					return <PostInfoItem key={0} content={"нет постов"} id={0} created={Date.now()} />
				}}
			</PostInfoList>
		</>
	)
}
