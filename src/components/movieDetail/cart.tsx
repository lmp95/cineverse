import { IMovie } from "@/interfaces/movie.interface"
import { getTicketState } from "@/redux/cart"
import Image from "next/image"
import { useRouter } from "next/navigation"
import {
	MdCalendarToday,
	MdOutlineAccessTime,
	MdOutlineChair,
	MdOutlineLocalMovies,
} from "react-icons/md"
import { useSelector } from "react-redux"

import FilledButton from "../common/FilledButton"
import Typography from "../common/Typography"

function TicketInfo({
	icon,
	label,
	value,
	noMargin = false,
}: {
	icon?: JSX.Element
	label: string
	value?: string
	noMargin?: boolean
}) {
	return (
		<div className={`${noMargin ? "my-0" : "my-3"}`}>
			<div className="flex flex-row items-center">
				{icon}
				<p className={`${icon ? "pl-2" : "pl-0"} text-xs text-gray-500 tracking-wider`}>
					{label.toLocaleUpperCase()}
				</p>
			</div>
			<p className="text-sm pt-1 text-gray-700 font-semibold">{value}</p>
		</div>
	)
}

export function RowData({
	label,
	value,
	isBold = false,
}: {
	label: string
	value: string
	isBold?: boolean
}) {
	return (
		<div
			className={`${isBold ? "font-bold" : "font-normal"} my-1 text-sm flex flex-row items-center justify-between`}>
			<p>{label}</p>
			<p>{value}</p>
		</div>
	)
}

function TicketCart({ movieDetail }: { movieDetail: IMovie }) {
	const ticketPrice = 5.99
	const router = useRouter()
	const { seats, date, time } = useSelector(getTicketState)
	const { name, path } = movieDetail

	return (
		<div className="flex-[0.3] flex flex-col text-black items-stretch m-12">
			<div className="flex-1 flex flex-col rounded-xl bg-white border-l-[0.5px] border-gray-700 p-6">
				<div className="relative w-full h-[200px] mb-4">
					<Image
						src={path}
						alt="Movie"
						sizes="100%"
						fill
						className="rounded-lg object-top object-cover"
					/>
				</div>
				<Typography bold variant="subtitle">
					{name}
				</Typography>
				<div className="flex-1 gap-y-3">
					<TicketInfo
						label="Theater"
						value="Monique Max"
						icon={<MdOutlineLocalMovies className="text-red-500" />}
					/>
					<div className="mb-2">
						<TicketInfo
							label="Seats"
							noMargin
							icon={<MdOutlineChair className="text-red-500" />}
						/>
						{seats.length > 0 ? (
							<div className="flex flex-row gap-3 flex-wrap mt-1">
								{seats.map(({ row, no }) => (
									<p
										key={`${row}-${no}`}
										className="text-xs min-w-[56px] text-center py-1 text-black rounded-sm bg-gray-300">
										{`${row}-${no}`.toLocaleUpperCase()}
									</p>
								))}
							</div>
						) : (
							<p className="text-sm">Please select seats.</p>
						)}
					</div>
					<TicketInfo
						label="Date"
						value={date ?? "-"}
						icon={<MdCalendarToday className="text-red-500" />}
					/>
					<TicketInfo
						label="Time"
						value={time ?? "-"}
						icon={<MdOutlineAccessTime className="text-red-500" />}
					/>
				</div>
				<RowData label="Subtotal" value={`$ ${(seats.length * ticketPrice).toFixed(2)}`} />
				<RowData
					label="Total"
					isBold
					value={`$ ${(seats.length * ticketPrice).toFixed(2)}`}
				/>
			</div>
			<div className="bg-white relative p-4 rounded-xl border-t-gray-600 border-dashed border-t-[1px]">
				<div className="absolute -top-[18px] -left-[8px] bg-black -ml-[16px] w-[36px] h-[36px] rounded-full"></div>
				<div className="absolute -top-[18px] -right-[8px] bg-black -mr-[16px] w-[36px] h-[36px] rounded-full"></div>
				<FilledButton onClick={() => router.push("/payment")} variant="primary">
					Checkout
				</FilledButton>
			</div>
		</div>
	)
}

export default TicketCart
