import '../Stylsheet/Display.css';
import { useEffect, useState } from 'react';

export default function Display() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    function formatTimeWithLeadingZero(num) {
        return num < 10 ? `0${num}` : num;
    }

    function formatHour(hour) {
        return hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    }

    function getAmPm(hour) {
        return hour >= 12 ? 'PM' : 'AM';
    }

    const hour = formatTimeWithLeadingZero(formatHour(currentTime.getHours()));
    const minutes = formatTimeWithLeadingZero(currentTime.getMinutes());
    const seconds = formatTimeWithLeadingZero(currentTime.getSeconds());
    const amPm = getAmPm(currentTime.getHours());

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = currentTime.toLocaleDateString(undefined, options);

    return (
        <>
            <div className='digital-clock'>
                <h1>Digital Clock</h1>
                <div className='time'>{`${hour}:${minutes}:${seconds} ${amPm}`}</div>
                <div className='date'>{formattedDate}</div>
            </div>
        </>
    );
}
