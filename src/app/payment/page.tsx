"use client"

import ControlledField from "@/components/common/ControlledField"
import FilledButton from "@/components/common/FilledButton"
import IconButton from "@/components/common/IconButton"
import Typography from "@/components/common/Typography"
import { getTicketState } from "@/redux/cart"
import { PaymentValidation } from "@/validations/payment.validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { PropsWithChildren } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { IoArrowBack } from "react-icons/io5"
import { useSelector } from "react-redux"

function Payment() {
	const router = useRouter()
	const { seats, date, time, subtotal, tax, total } = useSelector(getTicketState)

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

	const SummaryRow = ({
		label,
		value,
		...props
	}: PropsWithChildren<{ label: string; value?: string | number }>) => {
		return (
			<div className="flex justify-between items-center">
				<Typography variant="small" uppercase>
					{label}
				</Typography>
				{props?.children || (
					<Typography className="text-[14px]" bold>
						{value}
					</Typography>
				)}
			</div>
		)
	}

	return (
		<FormProvider {...hookFormProps}>
			<div className="flex flex-row gap-x-4 bg-gray-50 p-6 pt-[128px] items-start">
				<div className="flex flex-1 ring-1 ring-gray-200 flex-col p-8 rounded-md bg-white gap-2">
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
				<div className="flex-[0.5] bg-white gap-y-2 ring-1 ring-gray-200 rounded-md flex flex-col p-6 self-stretch">
					<Typography variant="subtitle" bold className="text-red-500">
						Ticket Summary
					</Typography>
					<div className="h-[1px] bg-gray-200 w-full my-2" />
					<Typography variant="title" uppercase bold>
						Orion and the Dark
					</Typography>
					<div className="flex-1 pt-4">
						<div className="flex flex-col gap-y-6">
							<SummaryRow label="Seats">
								<div className="flex gap-2 justify-end flex-wrap">
									{seats.map(({ no, row }) => (
										<p
											key={`${row}-${no}`}
											className="text-xs min-w-[56px] text-center py-1 text-white rounded-sm bg-red-500">
											{`${row}-${no}`.toLocaleUpperCase()}
										</p>
									))}
								</div>
							</SummaryRow>
							<SummaryRow label="Total Seats" value={seats.length} />
							<SummaryRow label="Date" value={date!} />
							<SummaryRow label="Show Time" value={time!} />
						</div>
					</div>
					<div className="h-[1px] bg-gray-200 w-full my-2" />
					<SummaryRow label="Tax" value={`$ ${tax}`} />
					<SummaryRow label="Subtotal" value={`$ ${subtotal}`} />
					<SummaryRow label="Total" value={`$ ${total}`} />
				</div>
			</div>
		</FormProvider>
	)
}

export default Payment
