import { configureStore } from "@reduxjs/toolkit"

import { ticketReducer } from "./cart"

export const store = configureStore({
	reducer: {
		ticket: ticketReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
