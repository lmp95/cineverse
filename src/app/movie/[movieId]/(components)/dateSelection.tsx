import { MONTHS, SHOW_TIMES } from "@/mockData/theaterSeats";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

function ChooseDate() {
  const currentDate = dayjs();
  const dateList = Array.from({ length: 7 }).map((_, i) => currentDate.add(i, "day"));
  const [selectedDate, setSelectedDate] = useState<Dayjs>();
  const [selectedTime, setSelectedTime] = useState<string>();

  return (
    <>
      <div className="flex flex-row hover:cursor-pointer justify-between overflow-y-auto gap-3">
        {dateList.map((date) => {
          const day = date.date();
          const month = date.month() + 1;
          let color = "bg-transparent";

          if (selectedDate?.date() === date.date()) color = "bg-red-500";

          return (
            <div
              key={day}
              className={`${color} transition-all duration-200 hover:bg-red-500 hover:border-white border-red-500 border-[1px] p-3 flex items-center rounded-md flex-col`}
              onClick={() => setSelectedDate(date)}
            >
              <p>{day}</p>
              <p className="text-xs pt-2">{MONTHS[month as keyof typeof MONTHS]}</p>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row justify-between mt-6">
        {SHOW_TIMES.map((showTime) => (
          <div
            onClick={() => setSelectedTime(showTime)}
            key={showTime}
            className={`border-[1px] ${
              selectedTime === showTime ? "bg-red-500" : "bg-transparent"
            } rounded-md hover:cursor-pointer px-4 py-1`}
          >
            <p className="text-xs">{showTime}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ChooseDate;
