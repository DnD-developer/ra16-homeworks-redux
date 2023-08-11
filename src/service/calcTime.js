import dayjs from "dayjs"

export default function calcTime(date) {
	const nowTime = dayjs()
	const releaseTime = dayjs(date)

	const passedSinceReleaseDate = nowTime.diff(releaseTime, "h")

	switch (true) {
		case passedSinceReleaseDate == 0:
			return `${nowTime.diff(releaseTime, "m")} минут назад`
		case passedSinceReleaseDate > 0 && passedSinceReleaseDate < 24:
			return `${nowTime.diff(releaseTime, "h")} часов назад`
		default:
			return `${nowTime.diff(releaseTime, "d")} дней назад`
	}
}
