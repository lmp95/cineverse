"use client"

import Slide from "@/components/landing/Slide"
import { SLIDE_DATA } from "@/mockData/slideData"
import { useRef } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io"
import { A11y, Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react"

import NowShowingMovies from "./(sections)/nowShowingMovies"

export default function Home() {
	const swiperRef = useRef<SwiperClass>()

	return (
		<>
			<section className="relative w-screen h-screen">
				<Swiper
					modules={[Navigation, Autoplay, EffectFade, Pagination, A11y]}
					spaceBetween={0}
					onBeforeInit={(swiper) => {
						swiperRef.current = swiper
					}}
					autoplay={{
						delay: 5000,
						pauseOnMouseEnter: true,
					}}
					loop
					allowTouchMove={false}
					slidesPerView={1}
					effect="fade"
					pagination={{
						clickable: true,
						renderBullet: function (_, className) {
							return renderToStaticMarkup(
								<div
									className={`${className} rounded-sm bg-red-500 w-[42px] h-[4px]`}
								/>
							)
						},
					}}
					scrollbar={{ draggable: true }}>
					{SLIDE_DATA.map((slide, index) => (
						<SwiperSlide key={index}>
							<Slide slideData={slide} />
						</SwiperSlide>
					))}
				</Swiper>
				<div className="absolute top-1/2 -translate-y-[50%] left-0 right-0 z-10 m-auto flex flex-row justify-between px-4">
					<button
						className="border-[1px] px-3 group hover:border-red-500 hover:text-red-500 duration-200"
						onClick={() => swiperRef.current?.slidePrev()}>
						<IoIosArrowRoundBack size={32} />
					</button>
					<button
						className="border-[1px] px-3 group hover:border-red-500 hover:text-red-500 duration-200"
						onClick={() => swiperRef.current?.slideNext()}>
						<IoIosArrowRoundForward size={32} />
					</button>
				</div>
			</section>
			<NowShowingMovies />
		</>
	)
}
