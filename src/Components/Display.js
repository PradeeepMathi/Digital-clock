import {useState} from 'react'
export default function Display(){
    const [currentTime,setCurrentTime] = useState(new Date())
    return(
        <>
        <div className='digital-clock'>
           <h1>digital clock</h1>
           <div className='time'>06:15:59 PM</div>
           <div className='date'>Tuesday, february 6, 2024</div>


        </div>
        </>
    )
}