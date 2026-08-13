import { useState } from "react";
function Exercise8() {
  const [items, setItems] = useState([10, 20,30,40]);
  const total = items.reduce((acc,curr)=>acc+curr,0)
  function addItem(price) {
    setItems([...items,price]);
    }
  return (
    <>
    <div>
      <p>Total: ₹{total}</p>
      <button onClick={() => addItem(15)}>Add ₹15 item</button>
    </div>

    </>
  );
}

export default Exercise8;