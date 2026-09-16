import { useState } from "react";

export const Exercise1 = () => {
  const [name, setName] = useState("");
  const [getdata, setgetData] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    localStorage.setItem("fullName", name);
    return console.log(name);
  }
  function getName() {
    const data = localStorage.getItem("fullName");
    return setgetData(data);
  }
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label> <br />
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <button type="submit">Save</button>
      </form>
      <button onClick={getName}>Load Name</button>
      <p>{getdata}</p>
    </>
  );
};
