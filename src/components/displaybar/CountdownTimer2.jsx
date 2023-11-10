import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';

const CountdownTimer2 = ({ initialTime }) => {
  const [remainingTime, setRemainingTime] = useState(initialTime);

  useEffect(() => {
    const intervalID = setInterval(() => {
      updateRemainingTime();
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  const updateRemainingTime = () => {
    const now = dayjs();
    const remainingTimeMs = initialTime - now.getTime();

    if (remainingTimeMs <= 0) {
      setRemainingTime(0);
    } else {
      setRemainingTime(remainingTimeMs);
    }
  };

  const formatRemainingTime = () => {
    const minutes = Math.floor(remainingTime / 1000 / 60);
    const seconds = Math.floor((remainingTime / 1000) % 60);

    return `${minutes}:${seconds}`;
  };

  return (
    <div className="countdown-timer">
      <h1>{formatRemainingTime()}</h1>
    </div>
  );
};

export default CountdownTimer2;
