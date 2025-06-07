import { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import id from "date-fns/locale/id"; // bahasa Indonesia

import "react-big-calendar/lib/css/react-big-calendar.css";

// konfigurasi lokal
const locales = {
    id: id,
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

const MyCalendar = () => {
    const [events] = useState([
        {
            title: "Hari Lahir Pancasila 2025",
            start: new Date(2025, 5, 1),
            end: new Date(2025, 5, 1),
        },
        {
            title: "Meeting",
            start: new Date(2025, 5, 3, 10, 0), // bulan dimulai dari 0, jadi 5 = Juni
            end: new Date(2025, 5, 3, 11, 0),
        },
        {
            title: "Hari Raya Idul Adha 1446",
            start: new Date(2025, 5, 6),
            end: new Date(2025, 5, 6),
        },
        {
            title: "Cuti Bersama Hari Raya Idul Adha 1446H",
            start: new Date(2025, 5, 9),
            end: new Date(2025, 5, 9),
        },
        {
            title: "Liburan",
            start: new Date(2025, 5, 10),
            end: new Date(2025, 5, 10),
        },
        {
            title: "Tahun Baru Hijriyah 1447",
            start: new Date(2025, 5, 27),
            end: new Date(2025, 5, 27),
        },
    ]);

    return (
        <div className="max-w-7xl mx-auto h-screen">
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                culture="id"
                style={{ height: "100%" }}
            />
        </div>
    );
};

export default MyCalendar;
