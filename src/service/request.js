export async function request(url, method, body) {
	const response = await fetch(url, {
		method,
		body: JSON.stringify(body || undefined),
		headers: {
			"Content-Type": "application/json"
		}
	})
	const data = await (method != "GET" ? response.text() : response.json())

	return data
}
