"use client"

import { SEAT, SEAT_STATUS, THEATER_SEATS } from "@/mockData/theaterSeats"
import Image from "next/image"
import { useState } from "react"

import TicketCart from "./(components)/cart"
import ChooseDate from "./(components)/dateSelection"

type SelectedSeats = SEAT[]
const MAX_SEATS = 5

export default function MovieDetail() {
	const [selectedSeats, setSelectedSeats] = useState<SelectedSeats>([])

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
			setSelectedSeats([...selectedSeats])
		}
	}

	return (
		<section className="flex items-stretch flex-row bg-[#181818]">
			<div className="max-w-[35%] m-auto py-[75px]">
				<ChooseDate />
				<div className="h-[50px] mb-6 relative">
					<Image src="/images/theater_screen.svg" alt="Screen" fill />
				</div>
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
				<div className="flex flex-row text-xs gap-3 mt-6">
					<div className="flex flex-row items-center justify-center gap-1">
						<div className="bg-gray-700 rounded-full w-[10px] h-[10px]" />
						<p>Available</p>
					</div>
					<div className="flex flex-row items-center justify-center gap-1">
						<div className="bg-red-500 rounded-full w-[10px] h-[10px]" />
						<p>Unavailable</p>
					</div>
					<div className="flex flex-row items-center justify-center gap-1">
						<div className="bg-green-500 rounded-full w-[10px] h-[10px]" />
						<p>Selected</p>
					</div>
				</div>
			</div>
			<TicketCart seats={selectedSeats} />
		</section>
	)
}
