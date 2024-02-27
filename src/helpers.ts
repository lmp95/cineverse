import dayjs, { Dayjs } from "dayjs"

export function convertDateFormat(date: Dayjs, format: string): string {
	if (date.isValid()) {
		return dayjs(date).format(format)
	}
	return "Invalid Date"
}
