//styles
import "./Menu.css"
//constants
import { pathRouters } from "../../shared/CarsInfo/pathRouters"
//components
import MenuItem from "../MenuItem/MenuItem"

export default function Menu() {
	const pages = [
		{ pageName: "Главная страница", path: pathRouters.homePage },
		{ pageName: "Дрифт - такси", path: pathRouters.driftPage },
		{ pageName: "Time Attac", path: pathRouters.timeAttackPage },
		{ pageName: "Forza Karting", path: pathRouters.forzaPage }
	]
	return (
		<nav className="menu">
			{pages.map(({ pageName, path }, i) => (
				<MenuItem key={i} customeClass="menu__item" activeCustomClass="menu__item-active" text={pageName} path={path} />
			))}
		</nav>
	)
}
