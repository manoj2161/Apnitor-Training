import { useState } from "react";

export const Exercise8 = () => {
  const [showHabit, setShowHabit] = useState(null);
  const [history, setHistory] = useState(null);
  const habit = {
    id: 1,
    name: "Drink Water",
    completedDays: [],
  };
  function save() {
    const data = JSON.stringify(habit);
    localStorage.setItem("habit", data);
  }
  function load() {
    const data = JSON.parse(localStorage.getItem("habit"));
    setShowHabit(data);
  }
  function show() {
    const data = JSON.parse(localStorage.getItem("habit"));
    setHistory(data.completedDays);
  }
  function clear() {
    const data = JSON.parse(localStorage.getItem("habit"));
    data.completedDays = [];
    const updateddata = JSON.stringify(data);
    localStorage.setItem("habit", updateddata);
    setHistory(data.completedDays);
  }
  function complete() {
    const data = JSON.parse(localStorage.getItem("habit"));
    const date = new Date().toLocaleDateString("en-CA");
    if (data.completedDays.includes(date)) {
      return;
    }
    data.completedDays.push(date);
    const updatedDate = JSON.stringify(data);
    localStorage.setItem("habit", updatedDate);
    setHistory(data.completedDays);
  }
  return (
    <>
      <div>
        <button onClick={save}>Save Habit</button>
        <button onClick={load}>Load Habit</button>
        <button onClick={complete}>Complete Today</button>
        <button onClick={show}>Show History</button>
        <button onClick={clear}>Clear History</button>
      </div>
      <div>
        {showHabit !== null && <p>{showHabit.name}</p>}
        {history !== null &&
          history.map((days, index) => <p key={index}>{days}</p>)}
      </div>
    </>
  );
};
