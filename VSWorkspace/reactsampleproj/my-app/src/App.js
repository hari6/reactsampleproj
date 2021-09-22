import React from "react";
import ReactDOM from "react-dom";

import FullCalendar from "@fullcalendar/react";

import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";

import "./App.css";

class App extends React.Component {
  calendarComponentRef = React.createRef();
  state = {
    events: [
      { id: 1, title: "event 1", date: "2019-12-01" },
      {
        title: "event 2",
        start: "2019-12-01",
        end: "2019-12-05",
        allDay: true,
        HostName: "William"
      },
      {
        title: "event 3",
        start: "2019-12-05",
        end: "2019-12-07",
        allDay: true
      },
      {
        title: "event 4",
        start: "2019-12-05",
        end: "2019-12-07",
        allDay: true
      },
      {
        title: "event 5",
        start: "2021-09-21",
        end: "2021-09-21",
        allDay: true
      },
      {
        title: "event 6",
        start: "2021-09-22",
        end: "2021-09-22",
        allDay: true
      }
    ]
  };

  handleDateClick = (arg) => {
    alert(arg.dateStr);
  };

  handleSelectedDates = (info) => {
    alert("selected " + info.startStr + " to " + info.endStr);
    const title = prompt("What's the name of the title");
    console.log(info);
    if (title != null) {
      const newEvent = {
        title,
        start: info.startStr,
        end: info.endStr
      };
      const data = [...this.state.events, newEvent];
      this.setState({ events: data });
      console.log("here", data);
    } else {
      console.log("nothing");
    }
  };

  render() {
    return (
      <div>
        <FullCalendar
          ref={this.calendarComponentRef}
          defaultView="dayGridMonth"
          dateClick={this.handleDateClick}
          displayEventTime={true}
          header={{
            // left: "",
            // center: "",
            // right: "prev, next"
          }}
          selectable={true}
          plugins={[
            dayGridPlugin,
            interactionPlugin,
            timeGridPlugin,
            resourceTimeGridPlugin
          ]}
          eventClick={(event) => {
            console.log(event.event._def.publicId);
          }}
          events={this.state.events}
          select={this.handleSelectedDates}
          eventLimit={3}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


// import React, { Component } from "react";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";
// import "./App.css";
// import "react-big-calendar/lib/css/react-big-calendar.css";

// const localizer = momentLocalizer(moment);

// class App extends Component {
//   state = {
//     events: [
//       {
//         start: moment().toDate(),
//         end: moment()
//           .add(1, "days")
//           .toDate(),
//         title: "Some title"
//       }
//     ]
//   };

//   <ol
//   id="days-of-week"
//   class="day-of-week"
// /></ol>

// <ol
//   id="calendar-days"
//   class="days-grid"
// >
// </ol>

//   render() {
//     return (
//       <div className="App">
//         <Calendar
//           localizer={localizer}
//           defaultDate={new Date()}
//           defaultView="month"
//           events={this.state.events}
//           style={{ height: "100vh" }}
//         />
//       </div>
//     );
//   }
// }

export default App;

