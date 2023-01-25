import React, { useContext, useState, useEffect } from 'react'
import { AidProjectContext } from '../../context/AidProjectContext';

function CountDownSection(){
    const { countDownDetails } = useContext(AidProjectContext);
    const [ btnIsEnabled, setBtnIsEnabled ] = useState(false);

    const [ timerValue, setTimerValue] = useState({
        countDownWeek: 0,
        countDownDay: 0,
        countDownHour: 0,
        countDownMinute: 0,
        countDownSecond: 0
    })

    const countDown = (details) =>{
        var date = new Date();
        var currentTimeInUTC = date.getTime() + (date.getTimezoneOffset() * 60000);
        var timeOffset = 2;
        var now = new Date(currentTimeInUTC + (3600000 * timeOffset)).getTime();
        var startDate = details.start;
        var endDate = details.stop;
        if(startDate !== '' || endDate !== '') {
            const end_date = new Date(endDate).getTime();
            const start_date = new Date(startDate).getTime();
            
            if(now >= start_date && now < end_date){
                
                const timeDifference = end_date - now;
                const second = 1000;
                const minute = second * 60;
                const hour = minute * 60;
                const day = hour * 24;
                const week = day * 7;
                setTimerValue({
                    countDownWeek: Math.floor(timeDifference / week),
                    countDownDay: Math.floor((timeDifference  % week) / (day)),
                    countDownHour: Math.floor((timeDifference % day) /(hour)),
                    countDownMinute: Math.floor((timeDifference % hour) /(minute)),
                    countDownSecond: Math.floor((timeDifference % minute) /(second))
                });
                setBtnIsEnabled(true);
    
            }
            else{
                 setTimerValue({
                    countDownWeek: 0,
                    countDownDay: 0,
                    countDownHour: 0,
                    countDownMinute: 0,
                    countDownSecond: 0
                })
                setBtnIsEnabled(false);
            }
        }
        else{
            setTimerValue({
                countDownWeek: 0,
                countDownDay: 0,
                countDownHour: 0,
                countDownMinute: 0,
                countDownSecond:0
            })
            setBtnIsEnabled(false);
        }
        
    }

    const loadCountDown = () =>{
        if(countDownDetails.round === null){
          setBtnIsEnabled(false);
        }
        else{
          setBtnIsEnabled(true);
          const interval = setInterval(countDown.bind(null, countDownDetails) , 1000);
            return(() =>{
                clearInterval(interval);
            })
        }
    }
    useEffect(() =>{
        window.scrollTo(0, 0);
        loadCountDown();
    },[countDownDetails]);
    return(
        btnIsEnabled ?

        <div className="charity-countdown-container shadow-md">
            <div className="charity-countdown-inner-container">
                <div className="charity-countdown-header">
                    <h1>{countDownDetails.title}</h1>
                </div>
                <div className="charity-countdown-content-container">
                    <div className="charity-countdown-wrapper">
                        <h1>{timerValue.countDownWeek}</h1>
                        {timerValue.countDownWeek <= 1 ?
                            <p>Week</p>:
                            <p>Weeks</p>
                        }
                    </div>
                    <div className="charity-vertical-line"></div>
                    <div className="charity-countdown-wrapper">
                        <h1>{timerValue.countDownDay}</h1>
                        {timerValue.countDownDay <= 1 ?
                            <p>Day</p>:
                            <p>Days</p>
                        }
                    </div>
                    <div className="charity-vertical-line"></div>
                    <div className="charity-countdown-wrapper">
                        <h1>{timerValue.countDownHour}</h1>
                        {
                            timerValue.countDownHour <= 1 ?
                            <p>Hour</p>:
                            <p>Hours</p>
                        }
                    </div>
                    <div className="charity-vertical-line"></div>
                    <div className="charity-countdown-wrapper">
                        <h1>{timerValue.countDownMinute}</h1>
                        {
                            timerValue.countDownMinute <= 1 ?
                            <p>Min</p>:
                            <p>Mins</p>
                        }
                        
                    </div>
                    <div className="charity-vertical-line"></div>
                    <div className="charity-countdown-wrapper">
                        <h1>{timerValue.countDownSecond}</h1>
                        {
                            timerValue.countDownSecond <= 1  ?
                            <p>Second</p>:
                            <p>Seconds</p>
                        }
                    </div>
                </div>
            </div>
        </div>
        : <div></div>
    )
}
export default CountDownSection;