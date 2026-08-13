import { useState } from "react";
function Exercise3() {
    const [count, setCount] = useState(0);
  function addThree() {
    setCount(count + 3);
  }
  return (
    <>
    <div>
      <p>{count}</p>
      <button onClick={addThree}>+3</button>
    </div>
    </>
  );
}

export default Exercise3;