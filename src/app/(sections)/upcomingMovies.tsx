import { UPCOMING_MOVIES } from "@/mockData/slideData"
import Image from "next/image"
import Link from "next/link"
import { A11y, Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

function UpcomingMovies() {
	return (
		<section className="m-2">
			<h2 className="p-4 text-2xl font-semibold">UPCOMING MOVIES</h2>
			<Swiper
				modules={[Autoplay, A11y]}
				spaceBetween={12}
				loop
				autoplay={{
					delay: 1000,
					pauseOnMouseEnter: true,
				}}
				slidesPerView={7}>
				{UPCOMING_MOVIES.map(({ alt, path, id }) => (
					<SwiperSlide key={id} className="group">
						<div className="relative h-[300px] group-hover:cursor-pointer group-hover:scale-[1.1] transition-all">
							<div className="absolute flex items-end justify-center hover:bg-black/40 w-full h-full z-50">
								<Link
									className="text-xs group-hover:mb-8 group-hover:opacity-100 transition-all duration-300 opacity-0 rounded-sm bg-red-500  px-6 py-1"
									href={`/movie/${encodeURIComponent(id)}`}>
									Buy Ticket
								</Link>
							</div>
							<Image src={path} alt={alt} fill className="rounded-lg" />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}

export default UpcomingMovies
