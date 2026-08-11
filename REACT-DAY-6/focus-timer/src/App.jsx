import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [time, setTime] = useState(25);
  const [secondLeft, setSecondsleft] = useState(0);

  const [mode, setMode] = useState("Focus");
  function handleBtn() {
    if (mode === "Focus") {
      setMode("Break");
    } else {
      setMode("Focus");
    }
  }
  function handleSeconds() {
    if (secondLeft === 0) {
      setSecondsleft(59);
      setTime(time - 1);
    }
  }
  useEffect(() => {
    const intervalId = setTimeout(() => {
      setSecondsleft(secondLeft - 1);
      handleSeconds()
    }, 1000);
    return () => {
      clearTimeout(intervalId);
    };
  }, [time]);
  return (
    <>
      <h1>Focus Timer</h1>
      <h3></h3>
      <h1>
        {time}:{secondLeft}
      </h1>
      <button onClick={handleBtn}>{mode}</button>
    </>
  );
}
export default App;
