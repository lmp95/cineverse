"use client"

import TicketCart from "@/components/movieDetail/cart"
import SeatSelection from "@/components/movieDetail/seatSelection"
import Image from "next/image"

import ChooseDate from "../../../components/movieDetail/dateSelection"

export default function MovieDetail() {
	return (
		<section className="flex items-stretch flex-row bg-[#181818]">
			<div className="max-w-[35%] m-auto py-[75px]">
				<ChooseDate />
				<div className="h-[50px] mb-6 relative">
					<Image src="/images/theater_screen.svg" alt="Screen" fill />
				</div>
				<SeatSelection />
				<div className="flex flex-row text-xs gap-3 mt-6 justify-center">
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
			<TicketCart />
		</section>
	)
}
