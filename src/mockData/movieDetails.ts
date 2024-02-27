import { IMovie } from "@/interfaces/movie.interface"

interface IMovieMockData {
	[key: string]: IMovie
}

export const MOVIE_DETAIL_INFO: IMovieMockData = {
	hdg3n12x92w: {
		id: "hdg3n12x92w",
		name: "Orion and the Dark",
		path: "/images/upcoming_1.jpg",
		description:
			"The thing Orion fears the most is the dark. When the embodiment of his worst fear pays a visit, Dark whisks Orion away on a roller-coaster ride around the world to prove there is nothing to be afraid of at night.",
		releasedDate: 2024,
		duration: 99,
		genre: ["Animation", "Family", "Comedy", "Fantasy"],
		casts: [
			"Jacob Tremblay",
			"Paul Walter Hauser",
			"Angela Bassett",
			"Colin Hanks",
			"Natasia Demetriou",
			"Golda Rosheuvel",
		],
	},
	xf51hss923: {
		id: "xf51hss923",
		name: "Badland Hunters",
		path: "/images/upcoming_2.jpg",
		description:
			"After a major earthquake, Seoul, South Korea, transforms into an apocalyptic wasteland where everything from civilization to law and order has collapsed.",
		releasedDate: 2024,
		duration: 107,
		genre: ["Science Fiction", "Action", "Drama"],
		casts: [
			"Ma Dong-seok",
			"Lee Hee-jun",
			"Lee Jun-young",
			"Roh Jeong-eui",
			"Ahn Ji-hye",
			"Park Ji-hoon",
		],
	},
}
