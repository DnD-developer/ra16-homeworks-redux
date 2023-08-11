//utils
import { Routes, Route } from "react-router-dom"
//styles
import "./PostInfo.css"
//constatns
import { pathRouters } from "../../shared/postInfo/pathRouters"
//components
import HomePage from "../../pages/postsInfo/HomePage"
import CreatePostPage from "../../pages/postsInfo/CreatePostPage"
import PostPage from "../../pages/postsInfo/PostPage"

export function PostInfo() {
	const pages = [
		{ page: <HomePage />, path: pathRouters.homePage },
		{ page: <CreatePostPage />, path: pathRouters.createPostPage },
		{ page: <PostPage />, path: pathRouters.postPage }
	]

	return (
		<div className="postInfo">
			<Routes>
				{pages.map(({ page, path }, i) => (
					<Route key={i} path={path} element={page} />
				))}
			</Routes>
		</div>
	)
}
