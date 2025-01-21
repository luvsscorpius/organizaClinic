import React, { useState } from 'react';
import * as H from '../Home/Styles';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

export const Agenda = () => {
    const [events, setEvents] = useState([]);
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    const handleDateClick = (arg) => {
        alert(arg.dateStr);
    };

    return (
        <H.section style={{ padding: '10px' }}>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                dateClick={handleDateClick}
                selectable={true}
            />

            <Button onClick={handleOpen} variant="gradient">
                Open Modal
            </Button>
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Its a simple modal.</DialogHeader>
                <DialogBody>
                    The key to more success is to have a lot of pillows. Put it this way,
                    it took me twenty five years to get these plants, twenty five years of
                    blood sweat and tears, and I&apos;m never giving up, I&apos;m just
                    getting started. I&apos;m up to something. Fan luv.
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" color="green" onClick={handleOpen}>
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </H.section>
    );
};
