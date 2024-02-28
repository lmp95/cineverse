import { convertDateFormat } from "@/helpers"
import { MONTHS, SHOW_TIMES } from "@/mockData/theaterSeats"
import { getTicketState, setDate, setTime } from "@/redux/cart"
import dayjs, { Dayjs } from "dayjs"
import { useMemo, useState } from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { useDispatch, useSelector } from "react-redux"

import IconButton from "../common/IconButton"

function ChooseDate() {
	const [currentDate, setCurrentDate] = useState(dayjs())
	const dispatch = useDispatch()
	const { date, time } = useSelector(getTicketState)
	const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs(date) || "")
	const [selectedTime, setSelectedTime] = useState<string>(time || "")

	const dateList = useMemo(
		() => Array.from({ length: 7 }).map((_, i) => currentDate.add(i, "day")),
		[currentDate]
	)

	const updateSelectedTime = (date: string) => {
		setSelectedTime(date)
		dispatch(setTime(date))
	}
	const updateSelectedDate = (date: Dayjs) => {
		const formattedDate = convertDateFormat(date, "DD/MM/YYYY")
		setSelectedDate(date)
		dispatch(setDate(formattedDate))
	}

	const goPrevDate = () => {
		if (dayjs(currentDate).isBefore()) {
			return
		}
		const startDate = currentDate.subtract(7, "day")
		setCurrentDate(startDate)
	}

	const goNextDate = () => {
		const startDate = currentDate.add(7, "day")
		setCurrentDate(startDate)
	}

	return (
		<>
			<div className="flex flex-row items-center gap-2">
				<IconButton icon={<IoIosArrowBack size={24} />} onClick={goPrevDate} />
				<div className="flex-1 flex flex-row hover:cursor-pointer justify-between overflow-y-auto gap-3">
					{dateList.map((date) => {
						const day = date.date()
						const month = date.month() + 1
						let color = "bg-transparent"

						if (selectedDate?.date() === date.date()) color = "bg-red-500"

						return (
							<div
								key={day}
								className={`${color} min-w-[56px] transition-all duration-200 hover:bg-red-500 hover:border-white border-red-500 border-[1px] p-3 flex items-center rounded-md flex-col`}
								onClick={() => updateSelectedDate(date)}>
								<p>{day}</p>
								<p className="text-xs pt-2">
									{MONTHS[month as keyof typeof MONTHS]}
								</p>
							</div>
						)
					})}
				</div>
				<IconButton icon={<IoIosArrowForward size={24} />} onClick={goNextDate} />
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
