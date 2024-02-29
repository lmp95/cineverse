import { calculateTotalPrice } from "@/helpers"
import { SEAT } from "@/mockData/theaterSeats"
import { PayloadAction, createSlice } from "@reduxjs/toolkit"

import { RootState } from "./store"

// import { RootState } from "./store"

export interface TicketState {
	theater: string | null
	seats: SEAT[]
	time: string | null
	date: string | null
	subtotal: number
	tax: number
	total: number
}

const initialState: TicketState = {
	theater: null,
	seats: [],
	time: null,
	date: null,
	subtotal: 0,
	tax: 0,
	total: 0,
}

export const ticketSlice = createSlice({
	name: "ticket",
	initialState,
	reducers: {
		setSeats: (state, actions: PayloadAction<SEAT[]>) => {
			const { subtotal, taxAmount, total } = calculateTotalPrice(actions.payload.length)
			state.subtotal = subtotal
			state.tax = taxAmount
			state.total = total
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
