//utils
import { Route, Routes } from "react-router-dom"
//constant
import { pathRouters } from "../shared/CarsInfo/pathRouters"
//components
import HomePage from "../pages/CarsInfo/Homepage"
import DriftPage from "../pages/CarsInfo/Driftpage"
import ForzaPage from "../pages/CarsInfo/ForzaPage"
import TimeAttackPage from "../pages/CarsInfo/TimeAttackPage"

import Menu from "../components/Menu/Menu"

export function CarsInfo() {
	const pages = [
		{ page: <HomePage />, path: pathRouters.homePage },
		{ page: <DriftPage />, path: pathRouters.driftPage },
		{ page: <TimeAttackPage />, path: pathRouters.timeAttackPage },
		{ page: <ForzaPage />, path: pathRouters.forzaPage }
	]
	return (
		<div className="page">
			<Menu />
			<Routes>
				{pages.map(({ page, path }, i) => (
					<Route key={i} path={path} element={page} />
				))}
			</Routes>
		</div>
	)
}
