"use client"

import IconButton from "@/components/common/IconButton"
import TicketCart from "@/components/movieDetail/cart"
import SeatSelection from "@/components/movieDetail/seatSelection"
import { MOVIE_DETAIL_INFO } from "@/mockData/movieDetails"
import Error from "next/error"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { IoArrowBack } from "react-icons/io5"

import ChooseDate from "../../../components/movieDetail/dateSelection"

export default function MovieDetail({ params }: { params: { movieId: string } }) {
	const router = useRouter()
	const movieDetail = MOVIE_DETAIL_INFO[params.movieId]

	if (!movieDetail) {
		return <Error statusCode={404} />
	}

	const { path } = movieDetail

	return (
		<section style={{ backgroundImage: `url(${path})` }} className={`relative flex bg-cover`}>
			<div className="absolute z-[1] w-full h-full bg-gradient-to-b from-black/75 to-black" />
			<div className="z-10 flex w-full flex-row">
				<IconButton
					onClick={() => router.back()}
					className="ml-6 mt-6 text-white self-start"
					icon={<IoArrowBack size={24} />}
				/>
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
				<TicketCart movieDetail={movieDetail} />
			</div>
		</section>
	)
}
