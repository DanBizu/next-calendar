"use client";

import { MONTHS, WEEKDAYS } from "@/constants/calendar";
import { getFirstDayOfMonth, getMonthDaysCount } from "@/util/calendar";

type Props = {
  className: string;
};

import { useState } from "react";

const Calendar = (props: Props) => {
  const { className } = props;
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  const firstDayOfMonth = getFirstDayOfMonth(month, year);

  const prevMonth = month > 0 ? month - 1 : 11;
  const nextMonth = month < 11 ? month + 1 : 0;

  const goPrevMonth = () => {
    setCurrentDate(
      new Date(`${MONTHS[prevMonth]} 1, ${prevMonth === 11 ? year - 1 : year}`)
    );
  };

  const goNextMonth = () => {
    setCurrentDate(
      new Date(`${MONTHS[nextMonth]} 1, ${nextMonth === 0 ? year + 1 : year}`)
    );
  };

  console.log(currentDate.toDateString());

  const currentMonthDaysCount = getMonthDaysCount(month, year);
  const prevMonthDaysCount = getMonthDaysCount(prevMonth, year);
  console.log({ prevMonth, prevMonthDaysCount, nextMonth });


  return (
    <div className={"calendar".concat((className ? ` ${className}` : ""))}>
      <div className="calendar__header flex justify-evenly">
        <button id="prev-month" className="p-8" onClick={goPrevMonth}>
          ‹
        </button>
        <div id="month-year" className="py-8">{`${MONTHS[month]} ${year}`}</div>
        <button id="next-month" className="p-8" onClick={goNextMonth}>
          ›
        </button>
      </div>
      <div className="calendar__body">
        <div className="calendar-body__weekdays grid grid-cols-7 grid-flow-row">
          {WEEKDAYS.map((dayName) => (
            <div key={dayName} className="justify-self-center"><span>{dayName}</span></div>
          ))}
        </div>

        <div className="calendar-body__grid grid grid-rows-5 grid-cols-7 grid-flow-row">
          {/* ============ PREVIOUS MONTH ============ */}
          {Array.from({ length: firstDayOfMonth }, (_, i) => (
            <div key={i} className="calendar-body__grid__cell calendar-body__grid__cell--disabled justify-self-center p-4">
              <span>{prevMonthDaysCount - firstDayOfMonth + i + 1}</span>
            </div>
          ))}

          {/* ============ CURRENT MONTH - ACTIVE DATES ============ */}
          {Array.from({length: currentMonthDaysCount}, (_, i) => (
            <div key={i} className="calendar-body__grid__cell justify-self-center p-4">
              <span>{i + 1}</span>
            </div>
          ))}

          {/* ============ NEXT MONTH ============ */}
          {Array.from({ length: 5 * 7 - firstDayOfMonth - currentMonthDaysCount}, (_, i) => (
            <div key={i} className="calendar-body__grid__cell calendar-body__grid__cell--disabled justify-self-center p-4">
              <span>{i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
