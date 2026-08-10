import { useState } from "react";

function PeopleManager() {
  const [people, setPeople] = useState([]);
  const [inputValue, setInputvalue] = useState("")

  function handleChange(e) {
    setInputvalue(e.target.value);
  }
  function handleAdd() {
    if (inputValue.trim() === "") return;
    setPeople((prev) => [...prev, inputValue]);
    setInputvalue("");
  }
  function handleRemove(index) {
    setPeople((prev) => prev.filter((user) => user !== index));
  }
  return (
    <>
      <label>Add Person</label>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleAdd}>+ Add</button>

      <ul>
        {people.map((user, index) => 
           (
            <li key={index}>
              {user}
              <button onClick={() => handleRemove(index)}>-</button>
            </li>
          )
        )}
      </ul>
    </>
  );
}

export default PeopleManager;
