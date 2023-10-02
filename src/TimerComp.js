import DisplayField from './components/displaybar/DisplayField';

const TimerComp = () => {
  return (
    <>
      <div className="App">
        <h1>Custom Timer</h1>
        <DisplayField />
      </div>
    </>
  );
};

export default TimerComp;

// ----------------------------------------------------------------

// const [seconds, setSeconds] = useState(0);
//   const [typedSeconds, setTypedSeconds] = useState(0);

//   const startTimer = () => {
//     const intervalId = setInterval(() => {
//       setSeconds(seconds + 1);
//     }, 1000);

//     return intervalId;
//   };

//   const stopTimer = (intervalId) => {
//     clearInterval(intervalId);
//   };

//   const increment = () => {
//     setSeconds(seconds + 1);
//   };

//   const decrement = () => {
//     setSeconds(seconds - 1);
//   };

//   const handleTypedSecondsChange = (event) => {
//     setTypedSeconds(parseInt(event.target.value));
//   };

//   const handleStartTimerClick = () => {
//     const intervalId = startTimer();
//     // Store the interval ID so that we can stop the timer later.
//     stopTimer(intervalId);
//   };

//   return (
//     <div>
//       <h1>Timer</h1>
//       <input
//         type="number"
//         value={typedSeconds}
//         onChange={handleTypedSecondsChange}
//       />
//       <p>{seconds} seconds</p>
//       <button onClick={handleStartTimerClick}>Start</button>
//       <button onClick={stopTimer}>Stop</button>
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//     </div>
//---------------------------------------------------------------------------------------------------------
// import React, { useState } from 'react';

// const TimerComponent = () => {
//   const [seconds, setSeconds] = useState(0);

//   const startTimer = () => {
//     setInterval(() => {
//       setSeconds(seconds + 1);
//     }, 1000);
//   };

//   const pauseTimer = () => {
//     clearInterval();
//   };

//   const resetTimer = () => {
//     setSeconds(0);
//   };

//   return (
//     <div>
//       <h1>1-2-1-2</h1>
//       <p>{seconds} seconds</p>
//       <button onClick={startTimer}>Start</button>
//       <button onClick={pauseTimer}>Pause</button>
//       <button onClick={resetTimer}>Reset</button>
//     </div>
//   );
// };

// export default TimerComponent;
