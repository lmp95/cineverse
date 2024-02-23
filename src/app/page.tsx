"use client"

import { SLIDE_DATA } from "@/mockData/slideData"
import Image from "next/image"
import { A11y, Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import UpcomingMovies from "./(sections)/upcomingMovies"

export default function Home() {
	return (
		<>
			<section className="w-screen h-screen">
				<Swiper
					modules={[Navigation, Autoplay, EffectFade, Pagination, A11y]}
					spaceBetween={0}
					autoplay={{
						delay: 5000,
						pauseOnMouseEnter: true,
					}}
					loop
					navigation
					slidesPerView={1}
					effect="fade"
					pagination={{ clickable: true }}
					scrollbar={{ draggable: true }}>
					{SLIDE_DATA.map(({ alt, path }, index) => (
						<SwiperSlide key={index}>
							<div className="w-screen h-screen">
								<Image src={path} alt={alt} fill />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</section>
			<UpcomingMovies />
		</>
	)
}
