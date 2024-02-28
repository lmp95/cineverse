import { object, string } from "zod"

export const TicketValidation = object({
	theater: string({
		required_error: "Please choose theater.",
		invalid_type_error: "Invalid theater.",
	}),
	// seats: object({
	// 	no: number(),
	// 	row: string().nullable(),
	// 	status: string(),
	// })
	// 	.array()
	// 	.min(1, "Please choose seat."),
	date: string({
		required_error: "Please choose date.",
		invalid_type_error: "Invalid date.",
	}),
	time: string({
		required_error: "Please choose time.",
		invalid_type_error: "Invalid time.",
	}),
})
