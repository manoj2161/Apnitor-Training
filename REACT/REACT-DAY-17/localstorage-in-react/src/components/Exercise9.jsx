import { useState } from "react";

export const Exercise9 = () => {
  const [showHabits, setShowHabits] = useState([]);
  const [habitdata, sethabitData] = useState([]);
  const habits = [
    {
      id: 1,
      name: "Drink Water",
      color: "blue",
      completedDays: [],
    },
    {
      id: 2,
      name: "Exercise",
      color: "green",
      completedDays: [],
    },
    {
      id: 3,
      name: "Read Book",
      color: "red",
      completedDays: [],
    },
  ];

  function save() {
    const data = JSON.stringify(habits);
    localStorage.setItem("habits", data);
  }
  function load() {
    const data = JSON.parse(localStorage.getItem("habits"));
    sethabitData(data);
    setShowHabits([]);
  }
  function show() {
    const data = JSON.parse(localStorage.getItem("habits"));
    setShowHabits(data);
    sethabitData([]);
  }
  function clear(id) {
    const data = JSON.parse(localStorage.getItem("habits"));
    const habit = data.find((habit) => habit.id === id);
    if (habit) {
      habit.completedDays = [];
      const updatedDates = JSON.stringify(data);
      localStorage.setItem("habits", updatedDates);
      setShowHabits(data);
    }
  }
  function completed(id) {
    const data = JSON.parse(localStorage.getItem("habits"));
    const habit = data.find((habit) => habit.id === id);
    if (habit) {
      const date = new Date().toLocaleDateString("en-CA");
      if (habit.completedDays.includes(date)) {
        return;
      }
      habit.completedDays.push(date);
      const updatedDate = JSON.stringify(data);
      localStorage.setItem("habits", updatedDate);
      setShowHabits(data);
      sethabitData([]);
    }
  }
  return (
    <>
      <div>
        <button onClick={save}>Save Habits</button>
        <button onClick={load}>Load Habits</button>
        <button onClick={() => completed(1)}>Complete Drink Water</button>
        <button onClick={() => completed(2)}>Complete Exercise</button>
        <button onClick={show}>Show Habits</button>
        <button onClick={() => clear(1)}>Clear History of Drink Water</button>
      </div>
      <div>
        {habitdata.map((habit) => (
          <p key={habit.id}>{habit.name}</p>
        ))}
      </div>
      {showHabits.map((habit) => (
        <div key={habit.id}>
          <p>{habit.name}</p>
          {habit.completedDays.map((day, index) => (
            <p key={index}>Completed : {day}</p>
          ))}
        </div>
      ))}
    </>
  );
};
