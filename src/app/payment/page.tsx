"use client"

import ControlledField from "@/components/common/ControlledField"
import FilledButton from "@/components/common/FilledButton"
import IconButton from "@/components/common/IconButton"
import Typography from "@/components/common/Typography"
import { PaymentValidation } from "@/validations/payment.validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { FormProvider, useForm } from "react-hook-form"
import { IoArrowBack } from "react-icons/io5"

function Payment() {
	const router = useRouter()

	const hookFormProps = useForm({
		defaultValues: {
			email: "",
			cardName: "",
			cardNumber: "",
			expiry: "",
			ccv: "",
			address: "",
			phone: "",
			state: "",
		},
		mode: "onBlur",
		resolver: zodResolver(PaymentValidation),
	})

	const {
		formState: { isValid },
	} = hookFormProps

	return (
		<FormProvider {...hookFormProps}>
			<div className="flex flex-row gap-x-4 bg-white p-12 pt-[86px] items-start">
				<div className="flex flex-1 mx-72 flex-col gap-2">
					<IconButton
						onClick={() => router.back()}
						className="p-0 py-2 self-start"
						icon={<IoArrowBack size={24} />}
					/>
					<Typography variant="heading2" bold>
						Payment Details
					</Typography>
					<Typography variant="small" uppercase className="text-red-500">
						Enter your payment detials below to purchase
					</Typography>
					<ControlledField name="email" label="Email address" fullWidth />
					<ControlledField name="cardName" label="Name on card" fullWidth />
					<div className="flex flex-row gap-2">
						<ControlledField
							name="cardNumber"
							className="flex-1"
							label="Card Number"
							fullWidth
							placeholder="**** **** **** ****"
						/>
						<ControlledField
							name="expiry"
							className="w-[120px]"
							label="Expiry"
							placeholder="MM/YY"
						/>
						<ControlledField
							name="ccv"
							className="w-[120px]"
							label="CCV"
							placeholder="***"
						/>
					</div>
					<ControlledField name="address" label="Billing address" fullWidth />
					<ControlledField name="phone" label="Phone" fullWidth />
					<ControlledField name="state" label="State" fullWidth />
					<FilledButton disabled={!isValid} variant="primary">
						Pay Now
					</FilledButton>
				</div>
				<div className="flex-[0.5]">
					<Typography variant="title" bold>
						Ticket Summary
					</Typography>
				</div>
			</div>
		</FormProvider>
	)
}

export default Payment
