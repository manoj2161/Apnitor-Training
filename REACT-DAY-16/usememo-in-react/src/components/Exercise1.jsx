import { useMemo } from "react";
import { useState } from "react";
export const Exercise1 = () => {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState("");

  const slowSquare = useMemo(() => {
    return number * number;
  }, [number]);
  return (
    <>
      {" "}
      <input
        type="number"
        name="num"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <br />
      <input
        type="text"
        name="name"
        placeholder="enter name"
        onChange={(e) => setName(e.target.value)}
      />
      <p>Square with Memo : {slowSquare}</p>
      <p>Name : {name}</p>
    </>
  );
};
