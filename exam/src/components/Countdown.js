import React, { useEffect , useRef, useState} from 'react';
import { Statistic } from 'semantic-ui-react'

const CreateCountdown = () => {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');


    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('May 30,2021 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance  = countdownDate  - now;

            const days = Math.floor(distance / (1000 * 60 *60 * 24));
            const hours = Math.floor((distance % (1000 * 60 *60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 *60)) / (1000 * 60));

            if (distance < 0 ) {
                // stop timer
                clearInterval(interval.current)
            } else {
                // update timer
                setTimerDays(days);
                setTimerHours(hours)
                setTimerMinutes(minutes);
            }
        },1000);
    }

    //component
    useEffect(() => {
        startTimer();
        let currentInterval = interval.current
        return () => {
            clearInterval(currentInterval);
        }
    })

    return (
        <Statistic.Group widths='three'>
            <Statistic>
                <div className='counterItem'>
                    <Statistic.Value>{timerDays}</Statistic.Value>
                    <Statistic.Label>Days</Statistic.Label>
                </div>
            </Statistic>
            <Statistic>
                <div className='counterItem'>
                    <Statistic.Value> {timerHours}</Statistic.Value>
                    <Statistic.Label>Hours</Statistic.Label>
                </div>
            </Statistic>
            <Statistic>
                <div className='counterItem'>
                    <Statistic.Value> {timerMinutes}</Statistic.Value>
                    <Statistic.Label>Minutes</Statistic.Label>
                </div>
            </Statistic>
        </Statistic.Group>
    )
}

const Countdown = () => {

    return (
        CreateCountdown()
    )
}

export default Countdown;