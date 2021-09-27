import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import { formatDate } from '@fullcalendar/react';
import "./fullcalendar.css"

let str = formatDate(new Date(), {
    month: '2-digit',
    year: 'numeric',
    day: '2-digit'
  });

export default class Newfullcal0endar extends React.Component {
    
    state = {
        events: [
            {title: str, date: "2021-09-27"},
            {title: "Event 1", date: "2021-09-28"},
            {title: "Event 2", date: "2021-09-30"}
        ]
    }

  render() {
    return (
    
      <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        fixedWeekCount= {false}
        showNonCurrentDates= {false}
        firstDay= {1}
        dateClick= {this.handleDateClick}
        selectable={true}
        plugins= {[
           dayGridPlugin,
           interactionPlugin 
        ]}
        headerToolbar={{
            left: '',
            center: 'title',
            right: 'prev,next'
          }}
        select={this.handleSelectedDates}
        events={this.state.events}
      />
    )
  } 
  
}