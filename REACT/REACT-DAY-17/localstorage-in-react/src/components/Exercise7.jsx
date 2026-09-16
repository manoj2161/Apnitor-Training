import { useState } from "react";

export const Exercise7 = () => {
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

    console.log("Users saved");
  }

  function login(id) {
    const data = JSON.parse(localStorage.getItem("users"));

    if (!data) {
      console.log("Users not found");
      return;
    }

    const foundUser = data.find((user) => user.id === id);

    if (foundUser) {
      const currentUser = {
        id: foundUser.id,
      };

      localStorage.setItem("currentUser", JSON.stringify(currentUser));

      setUser(foundUser);
      setShowHabits([]);
    }
  }

  function show() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const data = JSON.parse(localStorage.getItem("users"));

    if (!currentUser || !data) {
      console.log("No user is logged in");
      return;
    }

    const foundUser = data.find((user) => user.id === currentUser.id);

    if (foundUser) {
      setShowHabits(foundUser.habits);
    }
  }

  function logout() {
    localStorage.removeItem("currentUser");

    setUser(null);
    setShowHabits([]);

    console.log("User logged out");
  }

  return (
    <>
      <div>
        <button onClick={save}>Save Users</button>

        <button onClick={() => login(1)}>Login as Manoj</button>

        <button onClick={() => login(2)}>Login as Rahul</button>

        {user !== null && <p>Name: {user.name}</p>}

        {user !== null && <button onClick={show}>Show My Habits</button>}

        {showHabits.map((habit) => (
          <div key={habit.id}>
            <p>{habit.name}</p>

            {habit.completed === true ? <span>✔️</span> : <span>❌</span>}
          </div>
        ))}

        <button onClick={logout}>Logout</button>
      </div>
    </>
  );
};
