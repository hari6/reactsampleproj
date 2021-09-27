import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import newcalendar from './newcalendar'
// import reportWebVitals from './reportWebVitals';
// import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import Newfullcalendar from './fullcalendar'


ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* Hello World! */}
    <Newfullcalendar/>
    {/* <Calendar />
    <App /> */}
    {/* <NewCalendar /> */}
  </React.StrictMode>,
  document.getElementById('root')
);



// import dayjs from "dayjs";
// import "./index.css";


// const weekday = require("dayjs/plugin/weekday");
// const weekOfYear = require("dayjs/plugin/weekOfYear");

// dayjs.extend(weekday);
// dayjs.extend(weekOfYear);

// document.getElementById("root").innerHTML = `
// <div class="calendar-month"> 
//   <section class="calendar-month-header">
//   <div class="calendar-header">Work From Office Calendar</div>
//     <section class="calendar-month-header-selectors">
//       <span id="previous-month-selector"><</span>
//       <span id="present-month-selector"><div
//       id="selected-month"
//       class="calendar-month-header-selected-month"
//     ></div></span>
//       <span id="next-month-selector">></span>
//     </section>
//   </section>
// </div>
// `;

// // const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
// const TODAY = dayjs().format("YYYY-MM-DD");

// const INITIAL_YEAR = dayjs().format("YYYY");
// const INITIAL_MONTH = dayjs().format("M");

// let selectedMonth = dayjs(new Date(INITIAL_YEAR, INITIAL_MONTH - 1, 1));
// let currentMonthDays;
// let previousMonthDays;
// let nextMonthDays;

// // const daysOfWeekElement = document.getElementById("days-of-week");

// // WEEKDAYS.forEach((weekday) => {
// //   const weekDayElement = document.createElement("li");
// //   daysOfWeekElement.appendChild(weekDayElement);
// //   weekDayElement.innerText = weekday;
// // });

// // createCalendar();
// initMonthSelectors();

// function createCalendar(year = INITIAL_YEAR, month = INITIAL_MONTH) {
//   const calendarDaysElement = document.getElementById("calendar-days");

//   document.getElementById("selected-month").innerText = dayjs(
//     new Date(year, month - 1)
//   ).format("MMMM YYYY");

//   removeAllDayElements(calendarDaysElement);

//   currentMonthDays = createDaysForCurrentMonth(
//     year,
//     month,
//     dayjs(`${year}-${month}-01`).daysInMonth()
//   );

//   previousMonthDays = createDaysForPreviousMonth(year, month);

//   nextMonthDays = createDaysForNextMonth(year, month);

//   const days = [...previousMonthDays, ...currentMonthDays, ...nextMonthDays];

//   days.forEach((day) => {
//     appendDay(day, calendarDaysElement);
//   });
// }

// function appendDay(day, calendarDaysElement) {
//   const dayElement = document.createElement("li");
//   const dayElementClassList = dayElement.classList;
//   dayElementClassList.add("calendar-day");
//   const dayOfMonthElement = document.createElement("span");
//   dayOfMonthElement.innerText = day.dayOfMonth;
//   dayElement.appendChild(dayOfMonthElement);
//   calendarDaysElement.appendChild(dayElement);

//   if (!day.isCurrentMonth) {
//     dayElementClassList.add("calendar-day--not-current");
//   }

//   if (day.date === TODAY) {
//     dayElementClassList.add("calendar-day--today");
//   }
// }

// function removeAllDayElements(calendarDaysElement) {
//   let first = calendarDaysElement.firstElementChild;

//   while (first) {
//     first.remove();
//     first = calendarDaysElement.firstElementChild;
//   }
// }

// function getNumberOfDaysInMonth(year, month) {
//   return dayjs(`${year}-${month}-01`).daysInMonth();
// }

// function createDaysForCurrentMonth(year, month) {
//   return [...Array(getNumberOfDaysInMonth(year, month))].map((day, index) => {
//     return {
//       date: dayjs(`${year}-${month}-${index + 1}`).format("YYYY-MM-DD"),
//       dayOfMonth: index + 1,
//       isCurrentMonth: true
//     };
//   });
// }

// function createDaysForPreviousMonth(year, month) {
//   const firstDayOfTheMonthWeekday = getWeekday(currentMonthDays[0].date);

//   const previousMonth = dayjs(`${year}-${month}-01`).subtract(1, "month");

//   // Cover first day of the month being sunday (firstDayOfTheMonthWeekday === 0)
//   const visibleNumberOfDaysFromPreviousMonth = firstDayOfTheMonthWeekday
//     ? firstDayOfTheMonthWeekday - 1
//     : 6;

//   const previousMonthLastMondayDayOfMonth = dayjs(currentMonthDays[0].date)
//     .subtract(visibleNumberOfDaysFromPreviousMonth, "day")
//     .date();

//   return [...Array(visibleNumberOfDaysFromPreviousMonth)].map((day, index) => {
//     return {
//       date: dayjs(
//         `${previousMonth.year()}-${previousMonth.month() + 1}-${
//           previousMonthLastMondayDayOfMonth + index
//         }`
//       ).format("YYYY-MM-DD"),
//       dayOfMonth: previousMonthLastMondayDayOfMonth + index,
//       isCurrentMonth: false
//     };
//   });
// }

// function createDaysForNextMonth(year, month) {
//   const lastDayOfTheMonthWeekday = getWeekday(
//     `${year}-${month}-${currentMonthDays.length}`
//   );
  
//   const nextMonth = dayjs(`${year}-${month}-01`).add(1, "month");

//   const visibleNumberOfDaysFromNextMonth = lastDayOfTheMonthWeekday
//     ? 7 - lastDayOfTheMonthWeekday
//     : lastDayOfTheMonthWeekday;

//   return [...Array(visibleNumberOfDaysFromNextMonth)].map((day, index) => {
//     return {
//       date: dayjs(
//         `${nextMonth.year()}-${nextMonth.month() + 1}-${index + 1}`
//       ).format("YYYY-MM-DD"),
//       dayOfMonth: index + 1,
//       isCurrentMonth: false
//     };
//   });

// }

// function getWeekday(date) {
//   return dayjs(date).weekday();
// }

// function initMonthSelectors() {
//   document
//     .getElementById("previous-month-selector")
//     .addEventListener("click", function () {
//       selectedMonth = dayjs(selectedMonth).subtract(1, "month");
//       createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"));
//     });

//   document
//     .getElementById("present-month-selector")
//     .addEventListener("click", function () {
//       selectedMonth = dayjs(new Date(INITIAL_YEAR, INITIAL_MONTH - 1, 1));
//       createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"));
//     });

//   document
//     .getElementById("next-month-selector")
//     .addEventListener("click", function () {
//       selectedMonth = dayjs(selectedMonth).add(1, "month");
//       createCalendar(selectedMonth.format("YYYY"), selectedMonth.format("M"));
//     });
// }







// import React, { Component } from 'react'
// import { render } from 'react-dom'
// import BigCalendar from 'react-big-calendar'
// import moment from 'moment'
// import events from './events'
// import 'react-big-calendar/lib/css/react-big-calendar.css'

// moment.locale('en-GB')
// BigCalendar.momentLocalizer(moment)

// const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

// const Toolbar = ({ events, setEvents }) => props => (
//   <div> 
//     <button onClick={() => {
//       events.pop()
//       setEvents(events)
//     }}>Delete Last Event</button>
//   </div>
// )

// class MyCalendar extends Component {
//   render() {
//     const { events, setEvents } = this.props

//     return (
//       <div style={{ height: 600 }}>
//         <BigCalendar
//           events={events}
//           views={allViews}
//           defaultDate={new Date(2015, 3, 1)}
//           components={{
//             toolbar: Toolbar({ events, setEvents })
//           }}
//         />
//       </div>
//     )
//   }
// }

// class App extends Component {
//   state = { events }

//   setEvents = events => {
//     this.setState({ events })
//   }

//   render() {
//     return (
//       <MyCalendar 
//         events={this.state.events} 
//         setEvents={this.setEvents}
//       />
//     )
//   }
// }

// render(<App />, document.getElementById('root'))


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
