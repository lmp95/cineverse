import { object, string } from "zod"

export const PaymentValidation = object({
	email: string({
		required_error: "Please enter email address.",
		invalid_type_error: "Invalid email address.",
	}).email("Invalid email address."),
	cardName: string({
		required_error: "Please enter card name.",
		invalid_type_error: "Invalid name.",
	}).min(1, "Card name is required."),
	cardNumber: string({
		required_error: "Card number is required.",
		invalid_type_error: "Invalid card number.",
	})
		.max(16, "Invalid card number.")
		.min(16, "Invalid card number.")
		.refine((val) => Number.isFinite(Number(val)), {
			message: "Invalid card number.",
		}),
	expiry: string({
		required_error: "Expiry is required.",
		invalid_type_error: "Expiry must be number.",
	})
		.max(3, "Invalid expiry date.")
		.min(3, "Invalid expiry date.")
		.refine((val) => Number.isFinite(Number(val)), {
			message: "Invalid expiry date.",
		}),
	ccv: string({
		required_error: "CCV is required.",
		invalid_type_error: "CCV must be number.",
	})
		.max(3, "Invalid CCV.")
		.min(3, "Invalid CCV.")
		.refine((val) => Number.isFinite(Number(val)), {
			message: "Invalid CCV.",
		}),
	address: string({
		required_error: "Please enter address.",
		invalid_type_error: "Invalid address.",
	}).min(1, "Address is required."),
	phone: string({
		required_error: "Phone number is required.",
		invalid_type_error: "Phone number must be number.",
	})
		.min(8, "Phone number is required.")
		.refine((val) => Number.isFinite(Number(val)), {
			message: "Invalid phone number.",
		}),
	state: string({
		required_error: "Please enter state.",
		invalid_type_error: "Invalid state.",
	}).min(1, "State is required."),
})
