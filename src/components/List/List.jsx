//styles
import styles from "./List.module.css"

export default function List({ data, children }) {
	return <ul className={styles.list}>{children(data)}</ul>
}
