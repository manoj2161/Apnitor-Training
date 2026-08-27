import { use, useEffect, useRef, useState } from "react";

export const Typer = () => {
  const focusRef = useRef();
  const [text, setText] = useState("");
  const [time, setTime] = useState(null);
  const startTimeRef = useRef(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const elapsedTimeRef = useRef(null);
  let demoText = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
  useEffect(() => {
    focusRef.current.focus();
    if (text.length > 0) {
      startTimeRef.current = setInterval(() => {
        const starttime = new Date(Date.now()).toLocaleTimeString();
        setTime(starttime);
      }, 1000);
    }
  }, [text]);
  useEffect(() => {
    if (text.length > 0) {
      setInterval(() => {
        setElapsedTime(elapsedTime + 1);
      }, 1000);
    }
  }, []);
  return (
    <>
      <h1>{demoText}</h1>
      <p>Total Words : {text.length}</p>
      <p>Elapsed Time :{elapsedTime}</p>
      <p>{time}</p>
      <input
        type="text"
        ref={focusRef}
        onChange={(e) => setText(e.target.value)}
      />
      <p>{text}</p>
    </>
  );
};
