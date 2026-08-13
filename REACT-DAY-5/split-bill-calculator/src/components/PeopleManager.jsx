import {useState } from "react";
import '../App.css'
function PeopleManager({setPeople}) {

  const [inputValue, setInputvalue] = useState("")

  function handleChange(e) {
    setInputvalue(e.target.value);
  }
  function handleAdd() {
    if (inputValue.trim() === "") return;
    setPeople((prev) => [...prev, inputValue]);
    setInputvalue("");
  }
  return (
    <>
      <div className="person">
        <label >Add Person</label><br />
        <input type="text" value={inputValue} onChange={handleChange} />
        <button className="addBtn" onClick={handleAdd}>+ Add</button>
      </div>
    </>
  );
}

export default PeopleManager;
