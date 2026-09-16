import { useState } from "react";

export const Exercise3 = () => {
  const [savedUser, setSavedUser] = useState(null);
  const user = {
    id: 1,
    name: "Manoj",
    email: "manoj@example.com",
    role: "user",
  };
  function save() {
    const data = JSON.stringify(user);
    localStorage.setItem("user", data);
    console.log("user is saved");
  }
  function gettingUser() {
    const data = JSON.parse(localStorage.getItem("user"));
    setSavedUser(data);
    console.log("user is retrived");
  }
  function removeUser() {
    setSavedUser(null);
    localStorage.removeItem("user");
    console.log("user is removed");
  }
  return (
    <>
      <div>
        <h1>User Information</h1>
        <button onClick={save}>Save User</button>
        <button onClick={gettingUser}>Load User</button>
        <button onClick={removeUser}>Remove User</button>
      </div>
      {savedUser !== null ? (
        <div>
          <p>Name : {savedUser.name}</p>
          <p>Email : {savedUser.email}</p>
          <p>Role : {savedUser.role}</p>
        </div>
      ) : (
        <p>No user loaded</p>
      )}
    </>
  );
};
