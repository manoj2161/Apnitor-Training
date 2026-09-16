import { useState } from "react";

export const Exercise2 = () => {
  const [savedHabits, setSavedHabits] = useState([]);
  const habits = ["Drink Water", "Exercise", "Read Book"];
  function save() {
    console.log(habits);
    const data = JSON.stringify(habits);
    console.log(data);
    localStorage.setItem("habits", data);
    console.log("items saved on local storage");
  }
  function gettingHabits() {
    const data = JSON.parse(localStorage.getItem("habits"));
    setSavedHabits(data);
  }
  return (
    <>
      <div>
        <h1>My Habits</h1>
        <button onClick={save}>Save Habits</button>
        <button onClick={gettingHabits}>Load Habits</button>
      </div>
      <div>
        {savedHabits.map((habit) => (
          <p>{habit}</p>
        ))}
      </div>
    </>
  );
};
