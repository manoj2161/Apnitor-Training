import { useState } from "react";
import "./SearchBar.css";
export const SearchBar = ({ getUser }) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (username.trim() === "") {
      return setError("Username cannot be empty");
    }
    getUser(username.trim().toLowerCase());
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
              setError("")
            }}
          />
          <button type="submit">Search</button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </>
  );
};
