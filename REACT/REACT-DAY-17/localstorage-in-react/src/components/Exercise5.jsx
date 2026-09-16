import { useState } from "react";

export const Exercise5 = () => {
  const [showHabits, setShowHabits] = useState([]);
  const habits = [
    {
      id: 1,
      name: "Drink Water",
      completed: false,
    },
    {
      id: 2,
      name: "Exercise",
      completed: false,
    },
    {
      id: 3,
      name: "Read Book",
      completed: false,
    },
  ];
  function save() {
    const data = JSON.stringify(habits);
    localStorage.setItem("habits", data);
  }
  function load() {
    const data = JSON.parse(localStorage.getItem("habits"));
    setShowHabits(data);
  }
  function remove() {
    localStorage.removeItem("habits");
    setShowHabits([]);
  }
  function complete(id) {
    const data = JSON.parse(localStorage.getItem("habits"));
    const habit = data.find((habit) => habit.id == id);
    console.log(habit);
    if (habit) {
      habit.completed = true;
      const changedData = JSON.stringify(data);
      console.log(changedData);
      localStorage.setItem("habits", changedData);
    }
  }
  return (
    <>
      <div>
        <button onClick={save}>Save Habits</button>
        <button onClick={load}>Load Habits</button>
        <button
          onClick={() => {
            complete(2);
          }}
        >
          Complete Exercise
        </button>
        <button onClick={remove}>Remove Habits</button>
      </div>
      <div>
        <span>Habit</span>
        <span>Status</span>
        {showHabits.map((habit) => (
          <div>
            <p>{habit.name}</p>
            {habit.completed === true ? <span>✔️</span> : <span>❌</span>}
          </div>
        ))}
      </div>
    </>
  );
};
