import { useEffect, useState } from "react";
import "./App.css";
function App() {
  const [secondsleft, setSecondsleft] = useState(5);
  const [isRunning, setIsrunning] = useState(false);
  const [mode, setMode] = useState("Focus");
  useEffect(() => {
    if (!isRunning) {
      return;
    }
    const interval = setInterval(() => {
      setSecondsleft((prev) => prev - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [secondsleft, isRunning]);

  useEffect(() => {
    if (secondsleft === 0) {
      if (mode === "Focus") {
        setSecondsleft(3);
        setIsrunning(false);
        setMode("Break");
      } else {
        setSecondsleft(5);
        setIsrunning(false);
        setMode("Focus");
      }
    }
  }, [secondsleft,mode]);
  useEffect(() => {
    const minutes = Math.floor(secondsleft / 60);
    const seconds = secondsleft % 60;
    document.title = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}-${mode}`;
  });
  function handleStart() {
    return !isRunning ? setIsrunning(true) : setIsrunning(false);
  }
  function handleReset() {
    setSecondsleft(5);
    setIsrunning(false);
    setMode("Focus");
  }

  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };
  return (
    <>
      <div className="main">
        <div className="box">
          <h1 className="heading">Focus Timer</h1>
          <h2
            className="mode"
            style={mode === "Focus" ? { color: "lightGreen" } : { color: "red" }}
          >
            {mode}
          </h2>
          <h1 className="time">{formatTime(secondsleft)}</h1>
          <div className="btns">
            <button className="startBtn" onClick={handleStart}>
              {isRunning ? "Pause" : "Start"}{" "}
            </button>
            <button className="resetBtn" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
