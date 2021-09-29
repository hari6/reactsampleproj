// import Calendar from 'react-calendar'
// import 'react-calendar/dist/Calendar.css';


// export default function App() {
//   return (
//     <>
//       <Calendar />
//     </>
//   )
// }

import { useState } from "react";
import Calendar, { CalendarDayHeader } from "./calendar.js";
import "./App.css";

export default function App() {
  const [yearAndMonth, setYearAndMonth] = useState([2021, 9]);
  return (
    <div className="App">
      <Calendar
        yearAndMonth={yearAndMonth}
        onYearAndMonthChange={setYearAndMonth}
        renderDay={(calendarDayObject) => (
          <div>
            <CalendarDayHeader calendarDayObject={calendarDayObject} />
          </div>
        )}
      />
    </div>
  );
}
