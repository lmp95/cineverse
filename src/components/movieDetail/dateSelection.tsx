import { convertDateFormat } from "@/helpers"
import { MONTHS, SHOW_TIMES } from "@/mockData/theaterSeats"
import { setDate, setTime } from "@/redux/cart"
import dayjs, { Dayjs } from "dayjs"
import { useState } from "react"
import { useDispatch } from "react-redux"

function ChooseDate() {
	const currentDate = dayjs()
	const dispatch = useDispatch()
	const dateList = Array.from({ length: 7 }).map((_, i) => currentDate.add(i, "day"))
	const [selectedDate, setSelectedDate] = useState<Dayjs>()
	const [selectedTime, setSelectedTime] = useState<string>()

	const updateSelectedTime = (date: string) => {
		setSelectedTime(date)
		dispatch(setTime(date))
	}
	const updateSelectedDate = (date: Dayjs) => {
		const formattedDate = convertDateFormat(date, "DD/MM/YYYY")
		setSelectedDate(date)
		dispatch(setDate(formattedDate))
	}

	return (
		<>
			<div className="flex flex-row hover:cursor-pointer justify-between overflow-y-auto gap-3">
				{dateList.map((date) => {
					const day = date.date()
					const month = date.month() + 1
					let color = "bg-transparent"

					if (selectedDate?.date() === date.date()) color = "bg-red-500"

					return (
						<div
							key={day}
							className={`${color} transition-all duration-200 hover:bg-red-500 hover:border-white border-red-500 border-[1px] p-3 flex items-center rounded-md flex-col`}
							onClick={() => updateSelectedDate(date)}>
							<p>{day}</p>
							<p className="text-xs pt-2">{MONTHS[month as keyof typeof MONTHS]}</p>
						</div>
					)
				})}
			</div>
			<div className="flex flex-row justify-between mt-6">
				{SHOW_TIMES.map((showTime) => (
					<div
						onClick={() => updateSelectedTime(showTime)}
						key={showTime}
						className={`border-[1px] ${
							selectedTime === showTime ? "bg-red-500" : "bg-transparent"
						} rounded-md hover:cursor-pointer px-4 py-1`}>
						<p className="text-xs">{showTime}</p>
					</div>
				))}
			</div>
		</>
	)
}

export default ChooseDate
