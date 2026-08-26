import { useEffect, useRef, useState } from "react";

export const Exercise4 = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  function increment() {
    return setCount((prev) => prev + 1);
  }
  function decrement() {
    return setCount((prev) => prev - 1);
  }
  useEffect(() => {
    countRef.current = count;
  }, [count]);
  return (
    <>
      <p>Curret : {count}</p>
      <p>Previous :{countRef.current}</p>
      <button onClick={increment}>+</button>
      <br />
      <button onClick={decrement}>-</button>
    </>
  );
};
