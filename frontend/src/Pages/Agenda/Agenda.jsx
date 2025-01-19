import React, { useState } from 'react'
import * as H from '../Home/Styles'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';

export const Agenda = () => {
    const [events, setEvents] = useState([])

    const handleDateClick = (arg) => {
        alert(arg.dateStr)
    }

    return (
        <H.section style={{padding: '10px'}}>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                dateClick={handleDateClick}
                selectable={true}
            />
        </H.section>
    )
}
