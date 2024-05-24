import '../Stylsheet/Display.css'
import {useEffect, useState} from 'react'
export default function Display(){
    const [currentTime,setCurrentTime] = useState(new Date());
    useEffect(()=>{
        const timer = setInterval(()=>{
            setCurrentTime(new Date())
        },1000);
        return ()=> clearInterval(timer)
    },[])
    function formatTimeWithLeadingZero(){
        
    }

    function formatHour (hour){
        return hour ===0 ? 12 : hour > 12 ? hour -12 : hour ;
    };
    return(
        <>
        <div className='digital-clock'>
           <h1>digital clock</h1>
           <div className='time'>{formatHour(currentTime.getHours())}:15:59 PM</div>
           <div className='date'>Tuesday, February 6, 2024</div>
        </div>
        </>
    )
}