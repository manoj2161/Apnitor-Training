import { useRef, useState } from "react";

export const Exercise5 = () => {
  const incRef = useRef(0);
  const [count, setCount] = useState(0);
  function handleState() {
    setCount((prev) => prev + 1);
  }
  function handleRef() {
    incRef.current += 1;
  }
  return (
    <>
      <p>{incRef.current}</p>
      <p>{count}</p>
      <button onClick={handleState}>state +</button>
      <br />
      <button onClick={handleRef}>ref +</button>
    </>
  );
};
