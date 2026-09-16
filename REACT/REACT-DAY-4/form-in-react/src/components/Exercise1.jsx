import { useState } from "react";

function Exercise1() {
  const [query, setQuery] = useState("");
  function handleClear() {
    setQuery("");
  }

  return (
    <>
      <div>
        <input
          type="text"
          value={query}
          placeholder="Search..."
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <button onClick={handleClear}>Clear</button>
      </div>
    </>
  );
}

export default Exercise1;
