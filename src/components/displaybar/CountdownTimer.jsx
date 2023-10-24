import { useState, useEffect } from 'react';
import './CountdownTimer.css';

const defaultRemaingTime = {
  seconds: '00',
  minutes: '00',
  hours: '00',
  days: '00',
};

const CountdownTimer = () => {
  const [remainingTime, setRemainingTime] = useState(defaultRemaingTime);

  // Use useEffect to update the remaining time at regular intervals
  useEffect(() => {
    const intervalID = setInterval(() => {
      updateRemainingTime();
    }, 1000); // Update every 1000 milli second (1 sec)
    return () => clearInterval(intervalID); // Cleanup when the component unmounts
  }, []);

  // Function to update the remaining time
  function updateRemainingTime() {
    // Calculate the remaining time here and update the state
    // For example, you can set a future date and calculate the time difference
    // console.log('Hello!!');
  }
  //   -------------------------------------------------------------
  return (
    <div className="countdown-timer">
      <span>{remainingTime.days}</span>
      <span>days</span>
      <span>{remainingTime.hours}</span>
      <span>hours</span>
      <span>{remainingTime.minutes}</span>
      <span>minutes</span>
      <span>{remainingTime.seconds}</span>
      <span>seconds</span>
    </div>
  );
};

export default CountdownTimer;
