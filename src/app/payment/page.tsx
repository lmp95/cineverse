"use client"

import FilledButton from "@/components/common/FilledButton"
import IconButton from "@/components/common/IconButton"
import Inputfield from "@/components/common/Inputfield"
import Typography from "@/components/common/Typography"
import { useRouter } from "next/navigation"
import { IoArrowBack } from "react-icons/io5"

function Payment() {
	const router = useRouter()

	return (
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
				<Inputfield label="Email address" fullWidth />
				<Inputfield label="Name on card" fullWidth />
				<div className="flex flex-row gap-2">
					<Inputfield
						className="flex-1"
						label="Card Number"
						fullWidth
						placeholder="**** **** **** ****"
					/>
					<Inputfield className="w-[120px]" label="Expiry" placeholder="MM/YY" />
					<Inputfield className="w-[120px]" label="CCV" placeholder="***" />
				</div>
				<Inputfield label="Billing address" fullWidth />
				<Inputfield label="Phone" fullWidth />
				<Inputfield label="State" fullWidth />
				<FilledButton variant="primary">Pay Now</FilledButton>
			</div>
			<div className="flex-[0.5]">
				<Typography variant="title" bold>
					Ticket Summary
				</Typography>
			</div>
		</div>
	)
}

export default Payment
