import { ISlide } from "@/interfaces/slide.interface"
import Image from "next/image"

import Typography from "../common/Typography"

function Slide({ slideData }: SlideProps) {
	const { alt, path, name, desc, genre } = slideData

	return (
		<>
			<div className="flex w-screen h-screen">
				<Image className="-z-10" src={path} alt={alt} fill />
				<div className="self-end h-1/2 bg-gradient-to-b from-transparent to-black w-full px-32">
					<Typography uppercase variant="heading1" bold className="text-white">
						{name}
					</Typography>
					<div className="flex flex-row gap-2 my-2 flex-wrap max-w-[65%]">
						{genre.map((genreName) => (
							<Typography
								key={genreName}
								variant="small"
								className="text-white tracking-wider bg-red-500 px-2 py-1">
								{genreName}
							</Typography>
						))}
					</div>
					<Typography variant="subtitle" className="text-white max-w-[65%]">
						{desc}
					</Typography>
				</div>
			</div>
		</>
	)
}

export default Slide

interface SlideProps {
	slideData: ISlide
}
