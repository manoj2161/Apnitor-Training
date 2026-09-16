import { useEffect, useRef, useState } from "react";

export const Typer = () => {
  const focusRef = useRef(null);
  const startTimeRef = useRef(null);
  const intervalRef = useRef(null);

  // Stores the last completed WPM without causing a render
  const lastSpeedRef = useRef(null);

  const [text, setText] = useState("");
  const [time, setTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [speed, setSpeed] = useState(null);
  const [previousSpeed, setPreviousSpeed] = useState(null);

  const demoText = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

  // Focus input when component loads
  useEffect(() => {
    focusRef.current?.focus();

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  // Typing logic
  useEffect(() => {
    // Start timer when first character is typed
    if (text.length === 1 && !startTimeRef.current) {
      startTimeRef.current = Date.now();

      setTime(new Date(startTimeRef.current).toLocaleTimeString());

      intervalRef.current = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTimeRef.current) / 1000);

        setElapsedTime(elapsed);
      }, 1000);
    }

    // Finish test
    if (text === demoText && startTimeRef.current) {
      clearInterval(intervalRef.current);

      const finalTime = Math.max(
        1,
        Math.floor((Date.now() - startTimeRef.current) / 1000),
      );

      setElapsedTime(finalTime);

      const words = demoText.trim().split(/\s+/).length;
      const minutes = finalTime / 60;

      const wpm = words / minutes;
      const newSpeed = Math.round(wpm);

      // Previous completed speed
      setPreviousSpeed(lastSpeedRef.current);

      // Current speed
      setSpeed(newSpeed);

      // Remember this speed for the next attempt
      lastSpeedRef.current = newSpeed;

      // Test is finished
      startTimeRef.current = null;
    }
  }, [text]);

  function handleReset() {
    clearInterval(intervalRef.current);

    setText("");
    setElapsedTime(0);
    setTime(null);
    setSpeed(null);

    startTimeRef.current = null;
    intervalRef.current = null;

    focusRef.current?.focus();
  }

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <div className="bg-gray-700 min-h-screen text-white py-6">
      <p className="text-center text-xl font-semibold">
        Total Words: {wordCount}
      </p>

      <p className="text-center m-4 text-xl font-semibold">
        Elapsed Time: {elapsedTime} seconds
      </p>

      {time !== null && (
        <p className="text-center m-4 text-xl font-semibold">
          Start Time: {time}
        </p>
      )}

      {previousSpeed !== null && (
        <p className="text-center m-4 text-xl font-semibold">
          Previous WPM: {previousSpeed}
        </p>
      )}

      {speed !== null && (
        <p className="text-center m-4 text-xl font-semibold">
          Current WPM: {speed}
        </p>
      )}

      <input
        className="w-full focus:outline-none focus:caret-transparent h-32 text-3xl p-4 text-black"
        type="text"
        value={text}
        maxLength={demoText.length}
        placeholder="Start Typing..."
        ref={focusRef}
        onChange={(e) => setText(e.target.value)}
      />

      <h1 className="text-3xl text-center font-bold p-6 break-words">
        {demoText.split("").map((char, index) => {
          const typedChar = text[index];

          // Character has not been typed yet
          if (typedChar === undefined) {
            return <span key={index}>{char}</span>;
          }

          // Correct = green
          // Wrong = red
          return (
            <span
              key={index}
              className={typedChar === char ? "text-green-500" : "text-red-500"}
            >
              {char}
            </span>
          );
        })}
      </h1>

      <div className="flex justify-center m-8">
        <button
          className="border p-2 text-sm rounded-lg bg-gray-400 text-black shadow-lg shadow-green-700"
          onClick={handleReset}
        >
          Try again
        </button>
      </div>
    </div>
  );
};
