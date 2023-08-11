import { NavLink } from "react-router-dom"

export default function MenuItem({ customeClass, activeCustomClass, text, path }) {
	return (
		<NavLink className={({ isActive }) => (isActive ? `${customeClass} ${activeCustomClass}` : customeClass)} to={path}>
			{text}
		</NavLink>
	)
}
