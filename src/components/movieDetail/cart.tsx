import { getTicketState } from "@/redux/cart"
import Image from "next/image"
import {
	MdCalendarToday,
	MdOutlineAccessTime,
	MdOutlineChair,
	MdOutlineLocalMovies,
} from "react-icons/md"
import { useSelector } from "react-redux"

export function InfoRow({
	icon,
	label,
	value,
}: {
	icon?: JSX.Element
	label: string
	value?: string
}) {
	return (
		<div>
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

function TicketCart() {
	const { seats, date, time } = useSelector(getTicketState)

	return (
		<div className="rounded-md flex-[0.3] flex flex-col text-black items-stretch bg-white gap-2 border-l-[0.5px] border-gray-700 p-6 m-12">
			<div className="relative w-full h-[200px] mb-4">
				<Image
					src="/images/upcoming_1.jpg"
					alt="Movie"
					fill
					className="rounded-lg object-top object-cover"
				/>
			</div>
			<div className="flex-1 flex flex-col gap-y-2">
				<InfoRow
					label="Theater"
					value="Monique Max"
					icon={<MdOutlineLocalMovies className="text-red-500" />}
				/>
				<div className="space-y-2 mb-2">
					<InfoRow label="Seats" icon={<MdOutlineChair className="text-red-500" />} />
					{seats.length > 0 ? (
						<div className="flex flex-row gap-3 flex-wrap">
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
				<InfoRow
					label="Date"
					value={date ?? "-"}
					icon={<MdCalendarToday className="text-red-500" />}
				/>
				<InfoRow
					label="Time"
					value={time ?? "-"}
					icon={<MdOutlineAccessTime className="text-red-500" />}
				/>
			</div>
			<div className="flex flex-row bg-red-500 text-white p-4 rounded-md items-center justify-between my-6">
				<p className="font-bold">Total</p>
				<p className="font-bold">$ {seats.length * 8.99}</p>
			</div>
		</div>
	)
}

export default TicketCart
