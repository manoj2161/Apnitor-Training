import { useState } from "react";
import "./SearchBar.css";
export const SearchBar = ({ setUser }) => {
  const [username, setUsername] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (username.trim() === "") {
      console.log("name is empty");
      return;
    }
    setUser(username.trim().toLowerCase());
  }
  return (
    <>
      <div className="searchBox">
        <h1>Search user here !</h1>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="search"
            name="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </>
  );
};
