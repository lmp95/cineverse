/* eslint-disable no-unused-vars */

export enum SEAT_STATUS {
	AVAILABLE = 1,
	UNAVAILABLE = 2,
	NO_SEAT = -1,
	RESERVED = 3,
}
export enum SEAT_TYPE {
	DOUBLE = "double",
	SINGLE = "single",
}

export const THEATER_SEATS = [
	{
		row: "a",
		seats: [
			{
				no: 1,
				status: SEAT_STATUS.NO_SEAT,
			},
			{
				no: 2,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 3,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 4,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 5,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 6,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 7,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 8,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 9,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 10,
				status: SEAT_STATUS.NO_SEAT,
			},
		],
	},
	{
		row: "b",
		seats: [
			{
				no: 1,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 2,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 3,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 4,
				status: SEAT_STATUS.RESERVED,
			},
			{
				no: 5,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 6,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 7,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 8,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 9,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 10,
				status: SEAT_STATUS.AVAILABLE,
			},
		],
	},
	{
		row: "c",
		seats: [
			{
				no: 1,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 2,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 3,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 4,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 5,
				status: SEAT_STATUS.RESERVED,
			},
			{
				no: 6,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 7,
				status: SEAT_STATUS.RESERVED,
			},
			{
				no: 8,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 9,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 10,
				status: SEAT_STATUS.AVAILABLE,
			},
		],
	},
	{
		row: "d",
		seats: [
			{
				no: 1,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 2,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 3,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 4,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 5,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 6,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 7,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 8,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 9,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 10,
				status: SEAT_STATUS.AVAILABLE,
			},
		],
	},
	{
		row: "e",
		seats: [
			{
				no: 1,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 2,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 3,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 4,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 5,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 6,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 7,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 8,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 9,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 10,
				status: SEAT_STATUS.RESERVED,
			},
		],
	},
	{
		row: "f",
		seats: [
			{
				no: 1,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 2,
				status: SEAT_STATUS.RESERVED,
			},
			{
				no: 3,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 4,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 5,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 6,
				status: SEAT_STATUS.RESERVED,
			},
			{
				no: 7,
				status: SEAT_STATUS.RESERVED,
			},
			{
				no: 8,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 9,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 10,
				status: SEAT_STATUS.AVAILABLE,
			},
		],
	},
	{
		row: "g",
		seats: [
			{
				no: 1,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 2,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 3,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 4,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 5,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 6,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 7,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 8,
				status: SEAT_STATUS.RESERVED,
			},
			{
				no: 9,
				status: SEAT_STATUS.RESERVED,
			},
			{
				no: 10,
				status: SEAT_STATUS.AVAILABLE,
			},
		],
	},
	{
		row: "h",
		seats: [
			{
				no: 1,
				status: SEAT_STATUS.RESERVED,
			},
			{
				no: 2,
				status: SEAT_STATUS.NO_SEAT,
			},
			{
				no: 3,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 4,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 5,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 6,
				status: SEAT_STATUS.RESERVED,
			},
			{
				no: 7,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 8,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 9,
				status: SEAT_STATUS.NO_SEAT,
			},
			{
				no: 10,
				status: SEAT_STATUS.AVAILABLE,
			},
		],
	},
	{
		row: "i",
		seats: [
			{
				no: 1,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 2,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 3,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 4,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 5,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 6,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 7,
				status: SEAT_STATUS.RESERVED,
			},
			{
				no: 8,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 9,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 10,
				status: SEAT_STATUS.AVAILABLE,
			},
		],
	},
	{
		row: "s",
		seats: [
			{
				no: 1,
				status: SEAT_STATUS.NO_SEAT,
			},
			{
				no: 2,
				status: SEAT_STATUS.AVAILABLE,
				type: SEAT_TYPE.DOUBLE,
			},
			{
				no: 3,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 4,
				status: SEAT_STATUS.NO_SEAT,
			},
			{
				no: 5,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 6,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 7,
				status: SEAT_STATUS.NO_SEAT,
			},
			{
				no: 8,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 9,
				status: SEAT_STATUS.AVAILABLE,
			},
			{
				no: 10,
				status: SEAT_STATUS.NO_SEAT,
			},
		],
	},
]

export type SEAT = {
	no: number
	row?: string
	status: SEAT_STATUS
}

export const MONTHS = {
	0: "JAN",
	1: "FEB",
	2: "MAR",
	3: "APR",
	4: "MAY",
	5: "JUN",
	6: "JUL",
	7: "AUG",
	8: "SEP",
	9: "OCT",
	10: "NOV",
	11: "DEC",
}

export const SHOW_TIMES = ["9:00", "12:30", "14:45", "18:00", "21:30"]
