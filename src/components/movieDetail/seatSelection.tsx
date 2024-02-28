import { SEAT, SEAT_STATUS, THEATER_SEATS } from "@/mockData/theaterSeats"
import { getTicketState, setSeats } from "@/redux/cart"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

type SelectedSeats = SEAT[]
const MAX_SEATS = 5

function SeatSelection() {
	const dispatch = useDispatch()
	const { seats } = useSelector(getTicketState)
	const [selectedSeats, setSelectedSeats] = useState<SelectedSeats>([...seats])

	const addSeat = (seat: SEAT) => {
		if (seat.status === SEAT_STATUS.AVAILABLE) {
			const foundIndex = selectedSeats?.findIndex(
				(selected) => selected.row === seat.row && selected.no === seat.no
			)
			if (foundIndex > -1) {
				selectedSeats.splice(foundIndex, 1)
			} else {
				if (selectedSeats.length >= MAX_SEATS) return
				selectedSeats.push(seat)
			}
			dispatch(setSeats([...selectedSeats]))
			setSelectedSeats([...selectedSeats])
		}
	}
	return (
		<>
			{THEATER_SEATS.map(({ row, seats }) => (
				<div key={row} className="flex flex-row items-center gap-4">
					<p className="text-xs">{row.toLocaleUpperCase()}</p>
					<div className="flex flex-row flex-1 items-center gap-4 justify-center py-4">
						{seats.map((seat) => {
							let color = "bg-gray-700"
							if (seat.status === SEAT_STATUS.NO_SEAT) color = "opacity-0"
							if (seat.status === SEAT_STATUS.RESERVED) color = "bg-red-500"
							if (
								selectedSeats.find(
									(selectedSeat) =>
										selectedSeat.row === row && selectedSeat.no === seat.no
								)
							) {
								color = "bg-green-500"
							}

							return (
								<div
									key={row + seat.no}
									onClick={() => addSeat({ ...seat, row })}
									className={`flex ${color} items-center hover:cursor-pointer justify-center border-[0.5px] rounded-sm w-[32px] h-[32px]`}></div>
							)
						})}
					</div>
				</div>
			))}
		</>
	)
}

export default SeatSelection
