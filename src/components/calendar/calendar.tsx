"use client";

// type Props = {
//   [key:string]: string;
// };

import { useState } from "react";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  return (
    <div className="calendar">
      <div className="calendar__header">
        <button id="prev-month">‹</button>
        <div id="month-year">{`${MONTHS[month]} ${year}`}</div>
        <button id="next-month">›</button>
      </div>
      <div className="calendar__body">
        <div className="calendar-body__weekdays">
          {WEEKDAYS.map((dayName) => (
            <div key={dayName}>{dayName}</div>
          ))}
        </div>
      </div>
      <p>Calendar</p>
    </div>
  );
};

export default Calendar;
