import { useState } from "react";

export const Exercise4 = () => {
  const [changedUser, setChangedUser] = useState(null);
  const user = {
    id: 1,
    name: "Manoj",
    email: "manoj@example.com",
    role: "user",
  };
  function save() {
    const data = JSON.stringify(user);
    localStorage.setItem("user", data);
    console.log("User saved");
  }
  function load() {
    const data = JSON.parse(localStorage.getItem("user"));
    setChangedUser(data);
    console.log("User Load");
  }
  function remove() {
    localStorage.removeItem("user");
    setChangedUser(null);
    console.log("User removed");
  }
  function change() {
    const data = JSON.parse(localStorage.getItem("user"));
    if (data) {
      data.name = "Manu";
      const changedData = JSON.stringify(data);
      localStorage.setItem("user", changedData);
      console.log(changedData);
      console.log("User changed");
    }
  }
  return (
    <>
      <div>
        <button onClick={save}>Save User</button>
        <button onClick={load}>Load User</button>
        <button onClick={change}>Change User</button>
        <button onClick={remove}>Remove User</button>
      </div>
      <div>{changedUser !== null && <h1>{changedUser.name}</h1>}</div>
    </>
  );
};
