import { useState, useEffect } from 'react';
import './CountdownTimer.css';
import { getRemainingTimeUntilMsTimestamp } from './Utils/CountdownTimerUtils.jsx';

const defaultRemaingTime = {
  seconds: '00',
  minutes: '00',
  hours: '00',
  days: '00',
};

const CountdownTimer = ({ CountdownTimestampMs }) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemaingTime);

  // Use useEffect to update the remaining time at regular intervals
  useEffect(() => {
    const intervalID = setInterval(() => {
      updateRemainingTime(CountdownTimestampMs);
    }, 1000); // Update every 1000 milli second (1 sec)

    return () => clearInterval(intervalID); // Cleanup when the component unmounts
  }, [CountdownTimestampMs]);

  // Function to update the remaining time
  function updateRemainingTime(countdown) {
    // Calculate the remaining time here and update the state
    // For example, you can set a future date and calculate the time difference
    // console.log('Hello!!');
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }
  //   -------------------------------------------------------------
  return (
    <div className="countdown-timer">
      <span>{remainingTime.days}</span>
      <span>days</span>
      <span className="two-numbers">{remainingTime.hours}</span>
      <span>hours</span>
      <span className="two-numbers">{remainingTime.minutes}</span>
      <span>minutes</span>
      <span className="two-numbers">{remainingTime.seconds}</span>
      <span>seconds</span>
    </div>
  );
};

export default CountdownTimer;
