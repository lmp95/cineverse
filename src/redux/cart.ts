import { SEAT } from "@/mockData/theaterSeats"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { RootState } from "./store"

// import { RootState } from "./store"

export interface TicketState {
	theater: string | null
	seats: SEAT[]
	time: string | null
	date: string | null
}

const initialState: TicketState = {
	theater: null,
	seats: [],
	time: null,
	date: null,
}

export const ticketSlice = createSlice({
	name: "ticket",
	initialState,
	reducers: {
		setSeats: (state, actions: PayloadAction<SEAT[]>) => {
			state.seats = actions.payload
		},
		setTime: (state, actions: PayloadAction<string>) => {
			state.time = actions.payload
		},
		setDate: (state, actions: PayloadAction<string>) => {
			state.date = actions.payload
		},
	},
})

export const { setSeats, setDate, setTime } = ticketSlice.actions

export const getTicketState = (state: RootState) => state.ticket

export const ticketReducer = ticketSlice.reducer
