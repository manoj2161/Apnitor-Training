import { useState } from "react";

export const Exercise6 = () => {
  const [showUser, setShowUser] = useState([]);
  const [showHabits, setShowHabits] = useState([]);
  const [user, setUser] = useState(null);
  const users = [
    {
      id: 1,
      name: "Manoj",
      email: "manoj@example.com",
      habits: [
        {
          id: 1,
          name: "Drink Water",
          completed: false,
        },
        {
          id: 2,
          name: "Exercise",
          completed: true,
        },
      ],
    },
    {
      id: 2,
      name: "Rahul",
      email: "rahul@example.com",
      habits: [
        {
          id: 1,
          name: "Meditation",
          completed: false,
        },
        {
          id: 2,
          name: "Running",
          completed: true,
        },
      ],
    },
  ];
  function save() {
    const data = JSON.stringify(users);
    localStorage.setItem("users", data);
    console.log("users saved");
  }
  function load() {
    const data = JSON.parse(localStorage.getItem("users"));
    setShowUser(data);
    console.log("Users Loaded");
  }
  function remove() {
    localStorage.removeItem("users");
    setShowHabits([]);
    setShowUser([]);
    setUser(null);
  }
  function show(id) {
    const data = JSON.parse(localStorage.getItem("users"));
    const user = data.find((user) => user.id === id);
    if (user) {
      setUser(user);
      const habits = user.habits.map((habit) => habit);
      console.log(habits);
      setShowHabits(habits);
      setShowUser([]);
    }
  }
  function complete(hid) {
    const data = JSON.parse(localStorage.getItem("users"));
    const user = data.find((user) => user.name === "Manoj");
    if (user) {
      setUser(user);
      const habit = user.habits.find((habit) => habit.id === hid);
      if (habit) {
        console.log(habit);
        habit.completed = true;
        const updatedHabits = JSON.stringify(data);
        localStorage.setItem("users", updatedHabits);
        setShowHabits(user.habits)
      }
    }
  }
  return (
    <>
      <div>
        <button onClick={save}>Save Users</button>
        <button onClick={load}>Load Users</button>
        <button
          onClick={() => {
            show(1);
          }}
        >
          Show Manoj's Habits
        </button>
        <button
          onClick={() => {
            complete(1);
          }}
        >
          Complete Manoj's Drink Water
        </button>
        <button onClick={remove}>Remove User</button>
      </div>
      <div>
        {showUser.map((user) => (
          <p>{user.name}</p>
        ))}
      </div>
      <div>{user !== null && <p>{user.name}</p>}</div>
      <div>
        {showHabits.map((habit) => (
          <div key={habit.id}>
            <span>{habit.name}</span>
            {habit.completed === true ? <span>✔️</span> : <span>❌</span>}
          </div>
        ))}
      </div>
    </>
  );
};
