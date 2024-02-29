import dayjs, { Dayjs } from "dayjs"

import { TICKET_PRICE } from "./constants"

export function convertDateFormat(date: Dayjs, format: string): string {
	if (date.isValid()) {
		return dayjs(date).format(format)
	}
	return "Invalid Date"
}

export function calculateTotalPrice(totalSeat: number) {
	const subtotal = Number((totalSeat * TICKET_PRICE).toFixed(2))

	const taxAmount = Number(((7 / 100) * subtotal).toFixed(2))
	const total = Number((subtotal + taxAmount).toFixed(2))
	return { subtotal, taxAmount, total }
}
