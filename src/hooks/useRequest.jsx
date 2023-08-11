// utils
import { useEffect } from "react"
import { useState } from "react"
//services
import { request } from "../service/request"

export function useRequest({ url, sendApprove = true, body = null, method = "GET", finallyAction = () => {} }) {
	const [stateLoading, setStateLoading] = useState(true)
	const [data, setData] = useState([])
	const [error, setError] = useState()

	useEffect(() => {
		if (sendApprove) {
			;(async () => {
				try {
					const response = await request(url, method, body)
					setData(response)
				} catch (error) {
					console.log(error)
					setError(error)
				} finally {
					finallyAction()
					setStateLoading(false)
				}
			})()
		}
	}, [body, url])

	return { stateLoading: !sendApprove && stateLoading ? false : stateLoading, data, error }
}
