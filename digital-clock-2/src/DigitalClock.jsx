import React, {useState, useEffect} from "react";

function DigitalClock(){

    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        //so that we update time every 1000ms
        const intervalId = setInterval(()=>{
            setTime(new Date())
        }, 1000);

        //we'll add a clean up funtion as is good practice
        //so that if we ever unmount the clock, it does not
        //continue running
        return()=>{
            clearInterval(intervalId);
        }
    }, []);

    function formatTime(){
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        const meridiem = hours >=12 ? "PM" : "AM";

        //the "or 12" is so that if the operation is 0, 
        //it will return 12
        hours = hours % 12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
    }

    function padZero(number){
        return (number < 10 ? "0" : "") + number;
    }

    return(<div className="clock-container">
        <div className="clock">
            <span>{formatTime()}</span>

        </div>

    </div>)
}
export default DigitalClock