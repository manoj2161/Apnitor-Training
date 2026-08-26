import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

export const Exercise3 = () => {
  const [time, setTime] = useState(0);
  const timerRef = useRef(null);
  function startTime() {
    if (timerRef.current !== null) {
      return;
    }
    timerRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  }
  function stopTime() {
    clearInterval(timerRef.current);
    timerRef.current(null);
  }
  useEffect(() => {
    return () => {
      clearInterval(timerRef.current);
    };
  }, []);
  return (
    <>
      <h1>Seconds : {time}</h1>
      <button onClick={startTime}>Start Timer</button>
      <button onClick={stopTime}>Stop Timer</button>
    </>
  );
};
